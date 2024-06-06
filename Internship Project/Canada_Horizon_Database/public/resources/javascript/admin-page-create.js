let saveButton = document.getElementById("saveButton");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

saveButton.addEventListener('click', createAdmin)

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
} 
clearSessionEmployer();
clearSessionWorker();

// =================================================
async function createAdmin() {
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
        const admin = await window.api.createAdminAPI(firstNameInput.value.trim(), lastNameInput.value.trim(), emailInput.value.trim(), passwordInput.value.trim());
        const fullName = `${admin.firstName} ${admin.lastName}`;
        const result = await window.api.showMessageBoxAPI('Successfully', `Creating Admin "${fullName}" Successfully !!!`, 'Message');
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    }
}

