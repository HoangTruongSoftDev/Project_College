let billList = [];
let professionalActivitiesList = [];
const companyNameInput = document.getElementById('companyNameInput');
const addressInput = document.getElementById('addressInput');
const phoneNumberInput = document.getElementById('phoneNumberInput');
const professionalActivitiesInput = document.getElementById('professionalActivitiesInput');


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
        clearSession();
        location.reload();
    }
});
function sendData() {
    const dataToSend = JSON.stringify(professionalActivitiesList);
    sessionStorage.setItem('employerProfessionalActivties', dataToSend);
}
function receiveData() {
    const dataReceived = sessionStorage.getItem('billList');
    console.log(dataReceived);
    if (dataReceived !== null) {
        billList = JSON.parse(dataReceived);
        console.log(billList); 
    }

    const professionalActivitiesDataReceived = sessionStorage.getItem('employerProfessionalActivties');
    console.log(professionalActivitiesDataReceived);
    if (professionalActivitiesDataReceived !== null) {
        professionalActivitiesList = JSON.parse(professionalActivitiesDataReceived);
    }
}
// =================================================

function clearSession() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivties');
} 

// =================================================
window.onload = receiveData;

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    console.log(billList)
    createEmployer();
});
const createProfessionalActivities = document.getElementById('createProfessionalActivities');
createProfessionalActivities.addEventListener('click', () => {
    if ( professionalActivitiesInput.value.trim() === '') {
        alert('Missing Professional Activitiy');
    }
    else {
        professionalActivitiesList.push(professionalActivitiesInput.value.trim());
        alert(`Adding Professional Activitiy ${professionalActivitiesInput.value} successfully!!!`);
        professionalActivitiesInput.value = '';
    }
});


async function createEmployer() {
    const EIMTInput = document.querySelector('input[name="EIMTInput"]:checked');
    for (let i = 0; i < billList.length; i++) {
        billList[i].createdDate = new Date(billList[i].createdDate);
    }
    
    const employer = await window.api.createEmployerAPI(companyNameInput.value.trim(), addressInput.value.trim(), phoneNumberInput.value.trim(), professionalActivitiesList, EIMTInput.value.trim(), billList);
    alert(`Employer is created successfully !!!`);
    companyNameInput.value = '';
    addressInput.value = '';
    phoneNumberInput.value = '';
    professionalActivitiesInput.value = '';
    clearSession();
    billList = [];
    professionalActivitiesList = [];
}

const listProfessionalActivities = document.getElementById('listProfessionalActivities');
listProfessionalActivities.addEventListener('click', () => {
    sendData();
    window.location.href = 'professional-activities-check.html';
});
