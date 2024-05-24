let updateButton = document.getElementById("updateButton");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let deleteButton = document.getElementById("deleteButton");
let idInput = document.getElementById("idInput");
updateButton.addEventListener('click', updateAdmin)
deleteButton.addEventListener('click', deleteAdmin)
// =================================================

function clearSession() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivties');
} 
clearSession();

// =================================================

async function updateAdmin() {
    if (firstNameInput.value.trim() === '') {
        alert('Missing First Name');
    }
    else if (lastNameInput.value.trim() === '') {
        alert('Missing Last Name');
    }
    else if (emailInput.value.trim() === '') {
        alert('Missing Email');
    }
    else if (passwordInput.value.trim() === '') {
        alert('Missing Password');
    }
    else {
        console.log('idInput ' + idInput.value);
        console.log('fName ' + firstNameInput.value.trim());
        console.log('lName ' + lastNameInput.value.trim());
        console.log('email ' + emailInput.value.trim());
        console.log('password ' + passwordInput.value.trim());
        const updatedAdmin = await window.api.updateAdminAPI(idInput.value, firstNameInput.value.trim(), lastNameInput.value.trim(), emailInput.value.trim(), passwordInput.value.trim());
        console.log('update checking' + updatedAdmin)
        alert(`Update successfully !!!`);
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
    if (confirm('Are you sure to delete this user?')) {
        // User clicked OK
        const admin = await window.api.deleteAdminAPI(idInput.value);
        alert('Delete successfully !!!');
        window.location.href = 'admin-page.html';
    }
    
}


