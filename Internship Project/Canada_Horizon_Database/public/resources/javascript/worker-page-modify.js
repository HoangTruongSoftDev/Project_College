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
const idInput = document.getElementById('idInput');


// =================================================


function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
  } 
  clearSessionEmployer();
  
  // =================================================

document.addEventListener('DOMContentLoaded', () => {
    const checkingUpdate = sessionStorage.getItem('modifiedWorker');
    if (checkingUpdate === null) {
        findWorkerById();
    }
});

async function findWorkerById() {
    const urlParams = new URLSearchParams(window.location.search);
    let workerId = urlParams.get('id');
    console.log('Checking: ' + workerId)
    const worker = await window.api.getWorkerByIdAPI(workerId);
    console.log(worker);

    firstNameInput.value = worker.firstName;
    lastNameInput.value = worker.lastName;
    birthDateInput.value = worker.birthDate;
    addressInput.value = worker.address;
    phoneNumberInput.value = worker.phoneNumber;
    professionalDiplomasList = worker.professionalDiplomas
    professionsList = worker.professions;
    billList = worker.bills;
    resumeId = worker.resume;
    motivationLetterId = worker.motivationLetter;
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
    try {
        const filePath = await window.api.saveTempFileAPI(resumeId);
        console.log(filePath)
        await openFileWindow(filePath)
      }
      catch (err) {
        console.log("error: ")
        console.log(err)
      }
})

const readMotivationLetter = document.getElementById("readMotivationLetter");
readMotivationLetter.addEventListener('click', async () => {
    try {
        const filePath = await window.api.saveTempFileAPI(motivationLetterId);
        console.log(filePath)
        await openFileWindow(filePath)
      }
      catch (err) {
        console.log("error: ")
        console.log(err)
      }
})

const createBill = document.getElementById("createBill");
createBill.addEventListener('click', () => {
    window.location.href = 'bill-page-create.html';
    sendData();
});
const listBill = document.getElementById("listBill")
listBill.addEventListener('click', () => {
    window.location.href = 'bill-page-check.html';
    sendData();
});
function sendData() {
    const dataToSend = JSON.stringify(professionalActivitiesList);
    sessionStorage.setItem('employerProfessionalActivities', dataToSend);
    const billListDataToSend = JSON.stringify(billList);
    sessionStorage.setItem('billList', billListDataToSend);
}
function receiveData() {
    const dataReceived = sessionStorage.getItem('billList');
    console.log(dataReceived);
    if (dataReceived !== null) {
        billList = JSON.parse(dataReceived);
        console.log(billList); 
    }

    const professionalActivitiesDataReceived = sessionStorage.getItem('employerProfessionalActivities');
    console.log(professionalActivitiesDataReceived);
    if (professionalActivitiesDataReceived !== null) {
        professionalActivitiesList = JSON.parse(professionalActivitiesDataReceived);
    }

    const employerIdDataReceived = sessionStorage.getItem('modifiedEmployer');
    console.log(employerIdDataReceived);
    if (employerIdDataReceived !== null) {
        idInput.value = employerIdDataReceived;
    }
}
// =================================================

function clearSession() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
} 

// =================================================
window.onload = receiveData;

const updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', () => {
    console.log(billList)
    updateEmployer();
});

const createProfessionalActivities = document.getElementById('createProfessionalActivities');
createProfessionalActivities.addEventListener('click', async () => {
    if ( professionalActivitiesInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warning', "Missing Professional Activitiy", 'Message');
    }
    else {
        professionalActivitiesList.push(professionalActivitiesInput.value.trim());
        const result = await window.api.showMessageBoxAPI('Successfully', `Adding "${professionalActivitiesInput.value}" Successfully!!!`, 'Message');
        professionalActivitiesInput.value = '';
    }
});


async function updateEmployer() {
    receiveData();
    const EIMTInput = document.querySelector('input[name="EIMTInput"]:checked');
    for (let i = 0; i < billList.length; i++) {
        billList[i].createdDate = new Date(billList[i].createdDate);
    }
    let strBill = ''
    billList.forEach((bill) => {
        strBill += bill.service + ', ';
    });
    
    // const testing = await window.api.showMessageBoxAPI('Successfully', `
    // ID: ${idInput.value} \n Company Name: ${companyNameInput.value.trim()} \n Address: ${addressInput.value.trim()}
    // \n Phone Number ${phoneNumberInput.value.trim()} \n professionalActivitiesList: ${professionalActivitiesList} 
    // \n EIMT: ${EIMTInput.value.trim()} \n Bills: ${strBill}
    // `, 'Message');
    const modifiedEmployer = sessionStorage.getItem('modifiedEmployer');
    const employer = await window.api.updateEmployerAPI(modifiedEmployer, companyNameInput.value.trim(), addressInput.value.trim(), phoneNumberInput.value.trim(), professionalActivitiesList, EIMTInput.value.trim(), billList);
    const result = await window.api.showMessageBoxAPI('Successfully', `Updating Employer Successfully!!!`, 'Message');
}

const listProfessionalActivities = document.getElementById('listProfessionalActivities');
listProfessionalActivities.addEventListener('click', () => {
    sendData();
    window.location.href = 'professional-activities-check.html';
});

const returnButton = document.getElementById('returnButton');
returnButton.addEventListener('click', () => {
    console.log(billList)
    window.history.back();
    clearSession();
});

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', deleteEmployer);

async function deleteEmployer() {

    const modifiedEmployer = sessionStorage.getItem('modifiedEmployer');
    const result = await window.api.showMessageBoxAPI('Confirmation', "Are you sure to delete this employer", 'Confirmation');
    if (result === 'Yes') {
        const employer = await window.api.deleteEmployerAPI(modifiedEmployer);
        const result = await window.api.showMessageBoxAPI('Successfully', "Deleting Employer Successfully !!!", 'Message');
        window.location.href = 'employer-page.html';
    }

}