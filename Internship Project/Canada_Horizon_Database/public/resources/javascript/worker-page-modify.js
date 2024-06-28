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

const addResume = document.getElementById('addResume');
const resumeCreateButton = document.getElementById('resumeCreateButton');

const addMotivationLetter = document.getElementById('addMotivationLetter');
const motivationLetterCreateButton = document.getElementById('motivationLetterCreateButton');
const informationInput = document.getElementById('informationInput');
let resumeId = '';
let motivationLetterId = '';
const idInput = document.getElementById('idInput');


// =================================================


function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
}
clearSessionEmployer();
let loginUser = document.getElementById("loginUser");
let loginUserSession = sessionStorage.getItem('loginUser');
loginUser.textContent = loginUserSession

// Add event listeners to all elements with the class 'logoutButton'
document.querySelectorAll('.logoutButton').forEach(button => {
    button.addEventListener('click',  () => {
        window.location.href = 'login-page.html'
    })
});
// =================================================

document.addEventListener('DOMContentLoaded', () => {
    const checkingUpdate = sessionStorage.getItem('modifiedWorker');
    if (checkingUpdate === null) {
        findWorkerById();
    }

});
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

async function findWorkerById() {
    const urlParams = new URLSearchParams(window.location.search);
    let workerId = urlParams.get('id');
    console.log('Checking: ' + workerId)
    const worker = await window.api.getWorkerByIdAPI(workerId);
    console.log(worker);

    let formattedDate = formatDate(worker.birthDate);

    firstNameInput.value = worker.firstName;
    lastNameInput.value = worker.lastName;
    birthDateInput.value = formattedDate;
    addressInput.value = worker.address;
    phoneNumberInput.value = worker.phoneNumber;
    professionalDiplomasList = worker.professionalDiplomas;
    professionsList = worker.professions;
    billList = worker.bills;
    resumeId = worker.resume;
    motivationLetterId = worker.motivationLetter;
    informationInput.value = worker.information;

    if (resumeId !== '') {
        try {
            console.log("Testing resumeId: " + resumeId);
            let resumePath = await window.api.saveTempFileAPI(resumeId);
            sessionStorage.setItem('resumePath', resumePath);
        }
        catch (err) {
            console.log("error: ")
            console.log(err)
        }
    }
    else {
        sessionStorage.setItem('resumePath', '');
    }


    if (motivationLetterId !== '') {
        try {
            let motivationLetterPath = await window.api.saveTempFileAPI(motivationLetterId);
            sessionStorage.setItem('motivationLetterPath', motivationLetterPath);
        }
        catch (err) {
            console.log("error: ")
            console.log(err)
        }
    }
    else {
        sessionStorage.setItem('motivationLetterPath', '');
    }
    idInput.value = workerId;
    sessionStorage.setItem('modifiedWorker', workerId);

    sendData();
}
async function openFileWindow(filePath) {
    // Invoke the 'open-file-window' IPC handler in the main process
    await window.api.displayFileAPI(filePath);
}
const readResume = document.getElementById("readResume");
readResume.addEventListener('click', async () => {
    const resumePath = sessionStorage.getItem('resumePath');
    if (resumePath !== '') {
        openFileWindow(resumePath);
    }
    else {
        const result = await window.api.showMessageBoxAPI('Warning', `Missing Resume`, 'Message');
    }
})

const readMotivationLetter = document.getElementById("readMotivationLetter");
readMotivationLetter.addEventListener('click', async () => {
    const motivationLetterPath = sessionStorage.getItem('motivationLetterPath');
    if (motivationLetterPath !== '') {
        openFileWindow(motivationLetterPath);
    }
    else {
        const result = await window.api.showMessageBoxAPI('Warning', `Missing Motivation Letter`, 'Message');
    }
})

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

function sendData() {
    let dataToSend = JSON.stringify(professionalDiplomasList);
    sessionStorage.setItem('professionalDiplomasList', dataToSend);
    dataToSend = JSON.stringify(professionsList);
    sessionStorage.setItem('professionsList', dataToSend);
    const billListDataToSend = JSON.stringify(billList);
    sessionStorage.setItem('workerBillList', billListDataToSend);
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


    const workerIdDataReceived = sessionStorage.getItem('modifiedWorker');
    console.log(workerIdDataReceived);
    if (workerIdDataReceived !== null) {
        idInput.value = workerIdDataReceived;
    }
}
// =================================================

function clearSessionWorker() {
    sessionStorage.removeItem('workerBillList');
    sessionStorage.removeItem('professionsList');
    sessionStorage.removeItem('professionalDiplomasList');
}
// =================================================
window.onload = receiveData;

const updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', () => {
    console.log(billList)
    updateWorker();
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


async function updateWorker() {
    // receiveData();
    for (let i = 0; i < billList.length; i++) {
        billList[i].createdDate = new Date(billList[i].createdDate);
    }
    // const testing = await window.api.showMessageBoxAPI('Successfully', `
    // ID: ${idInput.value} \n Company Name: ${companyNameInput.value.trim()} \n Address: ${addressInput.value.trim()}
    // \n Phone Number ${phoneNumberInput.value.trim()} \n professionalActivitiesList: ${professionalActivitiesList} 
    // \n EIMT: ${EIMTInput.value.trim()} \n Bills: ${strBill}
    // `, 'Message');
    
    const resumePath = sessionStorage.getItem('resumePath');
    const motivationLetterPath = sessionStorage.getItem('motivationLetterPath')
    let dateOfBirth = new Date(birthDateInput.value);
    const modifiedWorker = sessionStorage.getItem('modifiedWorker');
    const worker = await window.api.updateWorkerAPI(modifiedWorker,
                                                    firstNameInput.value.trim(),
                                                    lastNameInput.value.trim(),
                                                    dateOfBirth,
                                                    addressInput.value.trim(),
                                                    phoneNumberInput.value.trim(),
                                                    professionalDiplomasList,
                                                    professionsList,
                                                    billList,
                                                    resumePath,
                                                    motivationLetterPath,
                                                    informationInput.value.trim()
    );
    const result = await window.api.showMessageBoxAPI('Successfully', `Updating Worker Successfully!!!`, 'Message');
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

const returnButton = document.getElementById('returnButton');
returnButton.addEventListener('click', () => {
    console.log(billList)
    window.history.back();
    clearSessionWorker();
});

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', deleteWorker);

async function deleteWorker() {

    const modifiedWorker = sessionStorage.getItem('modifiedWorker');
    const result = await window.api.showMessageBoxAPI('Confirmation', "Are you sure to delete this worker?", 'Confirmation');
    if (result === 'Yes') {
        const worker = await window.api.deleteWorkerAPI(modifiedWorker);
        const result = await window.api.showMessageBoxAPI('Successfully', "Deleting Worker Successfully !!!", 'Message');
        window.history.back();
    }
}



addResume.addEventListener('change', () => {
    if (addResume.files.length > 0) {
        sessionStorage.setItem('resumePath', addResume.files[0].path);
    }

})

addMotivationLetter.addEventListener('change', () => {
    if (addResume.files.length > 0) {
        sessionStorage.setItem('motivationLetterPath', addMotivationLetter.files[0].path);
    }

})


resumeCreateButton.addEventListener('click', function () {
    addResume.click();
});

motivationLetterCreateButton.addEventListener('click', function () {
    addMotivationLetter.click();
});