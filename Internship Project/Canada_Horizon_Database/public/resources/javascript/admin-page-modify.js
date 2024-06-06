let updateButton = document.getElementById("updateButton");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let deleteButton = document.getElementById("deleteButton");
let idInput = document.getElementById("idInput");
updateButton.addEventListener('click', updateAdmin)
deleteButton.addEventListener('click', deleteAdmin)

let loginUser = document.getElementById("loginUser");
let loginUserSession = sessionStorage.getItem('loginUser');
loginUser.textContent = loginUserSession

// Add event listeners to all elements with the class 'logoutButton'
document.querySelectorAll('.logoutButton').forEach(button => {
    button.addEventListener('click',  () => {
        window.location.href = 'login-page.html'
    })
});

let returnButton = document.getElementById('returnButton');
returnButton.addEventListener('click', () => {
    window.history.back();
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
} 
clearSessionEmployer();
clearSessionWorker();

// =================================================

async function updateAdmin() {
    if (firstNameInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warning', "Missing First Name", 'Message');
    }
    else if (lastNameInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warning', "Missing Last Name", 'Message');
    }
    else if (emailInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warning', "Missing Email", 'Message');
    }
    else if (passwordInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warning', "Missing Password", 'Message');
    }
    else {
        console.log('idInput ' + idInput.value);
        console.log('fName ' + firstNameInput.value.trim());
        console.log('lName ' + lastNameInput.value.trim());
        console.log('email ' + emailInput.value.trim());
        console.log('password ' + passwordInput.value.trim());
        const updatedAdmin = await window.api.updateAdminAPI(idInput.value, firstNameInput.value.trim(), lastNameInput.value.trim(), emailInput.value.trim(), passwordInput.value.trim());
        console.log('update checking' + updatedAdmin)
        const result = await window.api.showMessageBoxAPI('Successfully', "Updating Admin Successfully !!!", 'Message');
    }
}

async function findAdminById() {
    const urlParams = new URLSearchParams(window.location.search);
    let adminId = urlParams.get('id');
    console.log('Checking: ' + adminId)
    const admin = await window.api.getAdminByIdAPI(adminId);
    console.log(admin);

    firstNameInput.value = admin.firstName;
    lastNameInput.value = admin.lastName;
    emailInput.value = admin.email;
    passwordInput.value = admin.password;
    idInput.value = adminId;
}

document.addEventListener('DOMContentLoaded', () => {
    findAdminById();
});



async function deleteAdmin() {
    const result = await window.api.showMessageBoxAPI('Confirmation', "Are you sure to delete this user?", 'Confirmation');
    if (result === 'Yes') {
        const admin = await window.api.deleteAdminAPI(idInput.value);
        const result = await window.api.showMessageBoxAPI('Successfully', "Deleting Admin Successfully !!!", 'Message');
        window.location.href = 'admin-page.html';
    }
}


