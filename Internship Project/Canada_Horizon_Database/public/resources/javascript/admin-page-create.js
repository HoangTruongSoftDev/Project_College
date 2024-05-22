let saveButton = document.getElementById("saveButton");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

saveButton.addEventListener('click', createAdmin)

async function createAdmin() {
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
        const admin = await window.api.createAdminAPI(firstNameInput.value.trim(), lastNameInput.value.trim(), emailInput.value.trim(), passwordInput.value.trim());
        const fullName = `${admin.firstName} ${admin.lastName}`;
        alert(`User ${fullName} is created successfully !!!`);
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    }
}

