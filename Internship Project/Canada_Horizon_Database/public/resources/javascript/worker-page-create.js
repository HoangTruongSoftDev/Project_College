let billList = [];
let professionalDiplomasList = [];
let professionsList = [];

const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const birthDateInput = document.getElementById('birthDateInput');
const addressInput = document.getElementById('addressInput');
const phoneNumberInput = document.getElementById('phoneNumberInput');
const professionalDiplomasInput = document.getElementById('professionalDiplomasInput');
const professionsInput = document.getElementById('professionsInput');

let resumeId = '';
let motivationLetterId = '';

// clear session
// =================================================

function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
} 
clearSessionEmployer();

// =================================================

function clearSession() {
    sessionStorage.removeItem('workerBillList');
    
}

const createBill = document.getElementById("createBill");
createBill.addEventListener('click', () => {
    console.log('bill-page-create.html Click')
    window.location.href = 'bill-page-create.html';
    sendData();
});
const listBill = document.getElementById("listBill")
listBill.addEventListener('click', () => {
    window.location.href = 'bill-page-check.html';
    sendData();
});

const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener('click', () => {
    console.log('refreshButton Click')
    if (confirm('Refreshing will clear all current information of Worker. Are you sure to refresh?')) {
        // User clicked OK
        clearSession();
        location.reload();
    }
});
function sendData() {
    let dataToSend = JSON.stringify(professionalDiplomasList);
    sessionStorage.setItem('professionalDiplomasList', dataToSend);
    dataToSend = JSON.stringify(professionsList);
    sessionStorage.setItem('professionsList', dataToSend);
}
function receiveData() {
    const dataReceived = sessionStorage.getItem('workerBillList');
    console.log(dataReceived);
    if (dataReceived !== null) {
        billList = JSON.parse(dataReceived);
        console.log(billList); 
    }

    const professionalDiplomasDataReceived = sessionStorage.getItem('professionalDiplomasList');
    console.log(professionalDiplomasDataReceived);
    if (professionalDiplomasDataReceived !== null) {
        professionalDiplomasList = JSON.parse(professionalDiplomasDataReceived);
    }

    const professionsDataReceived = sessionStorage.getItem('professionsList');
    console.log(professionsDataReceived);
    if (professionsDataReceived !== null) {
        professionsList = JSON.parse(professionsDataReceived);
    }
}
window.onload = receiveData;

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    console.log(billList)
    createWorker();
});

const createProfessionalDiplomas = document.getElementById('createProfessionalDiplomas');
createProfessionalDiplomas.addEventListener('click', async () => {
    if ( professionalDiplomasInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warning', "Missing Professional Diploma", 'Message');
    }
    else {
        professionalDiplomasList.push(professionalDiplomasInput.value.trim());
        const result = await window.api.showMessageBoxAPI('Successfully', `Adding "${professionalDiplomasInput.value}" Successfully!!!`, 'Message');
        professionalDiplomasInput.value = '';
    }
});

const createProfessions = document.getElementById('createProfessions');
createProfessions.addEventListener('click', async () => {
    if ( professionsInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warning', "Missing Profession", 'Message');
    }
    else {
        professionsList.push(professionsInput.value.trim());
        const result = await window.api.showMessageBoxAPI('Successfully', `Adding "${professionsInput.value}" Successfully!!!`, 'Message');
        professionsInput.value = '';
    }
});


async function createWorker() {
    for (let i = 0; i < billList.length; i++) {
        billList[i].createdDate = new Date(billList[i].createdDate);
    }
    // firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resume, motivationLetter
    const worker = await window.api.createWorkerAPI(firstNameInput.value.trim(), 
                                                    lastNameInput.value.trim(), 
                                                    birthDateInput.value, 
                                                    addressInput.value.trim(),
                                                    phoneNumberInput.value.trim(),
                                                    professionalDiplomasList,
                                                    professionsList,
                                                    billList,
                                                    resumeId,
                                                    motivationLetterId
                                                );
    const result = await window.api.showMessageBoxAPI('Successfully', `Creating Worker Successfully!!!`, 'Message');

    firstNameInput.value = '';
    lastNameInput.value = '';
    addressInput.value = '';
    phoneNumberInput.value = '';
    clearSession();
    professionalDiplomasList = [];
    professionsList = [];
    billList = [];
    resumeId = '';
    motivationLetterId = '';
}

const listProfessionalDiplomas = document.getElementById('listProfessionalDiplomas');
listProfessionalDiplomas.addEventListener('click', () => {
    sendData();
    window.location.href = 'professional-diploma-check.html';
});
