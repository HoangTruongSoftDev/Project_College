let billList = [];
let professionalActivitiesList = [];
const companyNameInput = document.getElementById('companyNameInput');
const addressInput = document.getElementById('addressInput');
const phoneNumberInput = document.getElementById('phoneNumberInput');
const professionalActivitiesInput = document.getElementById('professionalActivitiesInput');

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


function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
    
  } 
  function clearSessionWorker() {
    sessionStorage.removeItem('workerBillList');
    sessionStorage.removeItem('professionsList');
    sessionStorage.removeItem('professionalDiplomasList');
    sessionStorage.removeItem('modifiedWorker');
    sessionStorage.removeItem('modifiedEmployer');
  } 
  clearSessionWorker();
  
  // =================================================

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
    if (confirm('Refreshing will clear all current information of Employer. Are you sure to refresh?')) {
        // User clicked OK
        clearSessionEmployer();
        location.reload();
    }
});
function sendData() {
    const dataToSend = JSON.stringify(professionalActivitiesList);
    sessionStorage.setItem('employerProfessionalActivities', dataToSend);
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
}

window.onload = receiveData;

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    console.log(billList)
    createEmployer();
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


async function createEmployer() {
    const EIMTInput = document.querySelector('input[name="EIMTInput"]:checked');
    for (let i = 0; i < billList.length; i++) {
        billList[i].createdDate = new Date(billList[i].createdDate);
    }
    
    const employer = await window.api.createEmployerAPI(companyNameInput.value.trim(), addressInput.value.trim(), phoneNumberInput.value.trim(), professionalActivitiesList, EIMTInput.value.trim(), billList);
    const result = await window.api.showMessageBoxAPI('Successfully', `Creating Employer Successfully!!!`, 'Message');

    companyNameInput.value = '';
    addressInput.value = '';
    phoneNumberInput.value = '';
    professionalActivitiesInput.value = '';
    clearSessionEmployer();
    billList = [];
    professionalActivitiesList = [];
}

const listProfessionalActivities = document.getElementById('listProfessionalActivities');
listProfessionalActivities.addEventListener('click', () => {
    sendData();
    window.location.href = 'professional-activities-check.html';
});
