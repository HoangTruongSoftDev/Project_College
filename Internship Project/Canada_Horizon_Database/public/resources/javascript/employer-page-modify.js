// =================================================


function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
  } 
  function clearSessionWorker() {
    sessionStorage.removeItem('workerBillList');
    sessionStorage.removeItem('professionsList');
    sessionStorage.removeItem('professionalDiplomasList');
  } 
  clearSessionWorker();
  
  // =================================================

let billList = [];
let professionalActivitiesList = [];
const companyNameInput = document.getElementById('companyNameInput');
const addressInput = document.getElementById('addressInput');
const phoneNumberInput = document.getElementById('phoneNumberInput');
const professionalActivitiesInput = document.getElementById('professionalActivitiesInput');
const idInput = document.getElementById('idInput');

document.addEventListener('DOMContentLoaded', () => {
    const checkingUpdate = sessionStorage.getItem('modifiedEmployer');
    if (checkingUpdate === null) {
        findEmployerById();

    }
});


let loginUser = document.getElementById("loginUser");
let loginUserSession = sessionStorage.getItem('loginUser');
loginUser.textContent = loginUserSession

// Add event listeners to all elements with the class 'logoutButton'
document.querySelectorAll('.logoutButton').forEach(button => {
    button.addEventListener('click',  () => {
        window.location.href = 'login-page.html'
    })
});
async function findEmployerById() {
    const urlParams = new URLSearchParams(window.location.search);
    let employerId = urlParams.get('id');
    console.log('Checking: ' + employerId)
    const employer = await window.api.getEmployerByIdAPI(employerId);
    console.log(employer);

    companyNameInput.value = employer.companyName;
    addressInput.value = employer.address;
    phoneNumberInput.value = employer.phoneNumber;
    professionalActivitiesList = employer.professionalActivities;
    billList = employer.bills;
    idInput.value = employerId;
    sessionStorage.setItem('modifiedEmployer', employerId);
    if (employer.EIMT === 'Yes') {
        document.querySelector('input[name="EIMTInput"][value="Yes"]').checked = true;
    }
    else {
        document.querySelector('input[name="EIMTInput"][value="No"]').checked = true;
    }
    sendData();
}

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
    // receiveData();
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
        window.history.back();
    }

}