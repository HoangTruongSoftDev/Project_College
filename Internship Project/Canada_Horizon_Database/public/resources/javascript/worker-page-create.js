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

let resumePath = '';
let motivationLetterPath = '';

// clear session
// =================================================

function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
}
clearSessionEmployer();

// =================================================

function clearSessionWorker() {
    sessionStorage.removeItem('workerBillList');
    sessionStorage.removeItem('listProfessions');
    sessionStorage.removeItem('listProfessionalDiplomas');
}

const createBill = document.getElementById("createBill");
createBill.addEventListener('click', () => {
    window.location.href = 'bill-page-create-worker.html';
    sendData();
});
const listBill = document.getElementById("listBill")
listBill.addEventListener('click', () => {
    window.location.href = 'bill-page-check-worker.html';
    sendData();
});

const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener('click', () => {
    console.log('refreshButton Click')
    if (confirm('Refreshing will clear all current information of Worker. Are you sure to refresh?')) {
        // User clicked OK
        clearSessionWorker();
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
    if (professionalDiplomasInput.value.trim() === '') {
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
    if (professionsInput.value.trim() === '') {
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
    let dateOfBirth = new Date(birthDateInput.value);
    // firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resume, motivationLetter
    if (addResume.files.length > 0) {
        resumePath = addResume.files[0].path;
    }
    if (addMotivationLetter.files.length > 0) {
        motivationLetterPath = addMotivationLetter.files[0].path;
    }

    // const result = await window.api.showMessageBoxAPI('Successfully', `Creating Worker Successfully!!!\n
    //                                                                     First Name ${firstNameInput.value.trim()}\n
    //                                                                     Last Name ${lastNameInput.value.trim()}\n
    //                                                                     Birth Date ${birthDateInput.value.trim()}\n
    //                                                                     Address ${addressInput.value.trim()}\n
    //                                                                     Phone Number${phoneNumberInput.value.trim()}\n
    //                                                                     Diplomas ${professionalDiplomasList}\n
    //                                                                     Profession ${professionsList}\n
    //                                                                     Bill ${billList}\n
    //                                                                     Resume ${resumePath}\n
    //                                                                     Motivation Letter ${motivationLetterPath}\n`, 'Message');


    const worker = await window.api.createWorkerAPI(firstNameInput.value.trim(),
        lastNameInput.value.trim(),
        dateOfBirth,
        addressInput.value.trim(),
        phoneNumberInput.value.trim(),
        professionalDiplomasList,
        professionsList,
        billList,
        resumePath,
        motivationLetterPath
    );
    const result = await window.api.showMessageBoxAPI('Successfully', `Creating Worker Successfully!!!`, 'Message');

    firstNameInput.value = '';
    lastNameInput.value = '';
    addressInput.value = '';
    phoneNumberInput.value = '';
    clearSessionWorker();
    professionalDiplomasList = [];
    professionsList = [];
    billList = [];
    resumePath = '';
    motivationLetterPath = '';
    addResume.value ='';
    addMotivationLetter.value = ''
}

const listProfessionalDiplomas = document.getElementById('listProfessionalDiplomas');
listProfessionalDiplomas.addEventListener('click', () => {
    sendData();
    window.location.href = 'professional-diploma-check.html';
});

const listProfessions = document.getElementById('listProfessions');
listProfessions.addEventListener('click', () => {
    sendData();
    window.location.href = 'profession-check.html';
});

const addResume = document.getElementById('addResume');
const resumeCreateButton = document.getElementById('resumeCreateButton');

resumeCreateButton.addEventListener('click', function () {
    addResume.click();
});

const addMotivationLetter = document.getElementById('addMotivationLetter');
const motivationLetterCreateButton = document.getElementById('motivationLetterCreateButton');

motivationLetterCreateButton.addEventListener('click', function () {
    addMotivationLetter.click();
});

const readResume = document.getElementById("readResume");
readResume.addEventListener('click', async () => {
    if (addResume.files.length > 0) {
        resumePath = addResume.files[0].path;
        await window.api.displayFileAPI(resumePath);
    }
    else {
        const result = await window.api.showMessageBoxAPI('Warning', `Missing Resume`, 'Message');
    }
    
})

const readMotivationLetter = document.getElementById("readMotivationLetter");
readMotivationLetter.addEventListener('click', async () => {
    if (addMotivationLetter.files.length > 0) {
        motivationLetterPath = addMotivationLetter.files[0].path;
        await window.api.displayFileAPI(motivationLetterPath);
    }
    else {
        const result = await window.api.showMessageBoxAPI('Warning', `Missing Motivation Letter`, 'Message');
    }
})


