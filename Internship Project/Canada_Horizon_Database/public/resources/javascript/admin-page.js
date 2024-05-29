// =================================================

function clearSession() {
  sessionStorage.removeItem('billList');
  sessionStorage.removeItem('employerProfessionalActivities');
  sessionStorage.removeItem('modifiedEmployer');
} 
clearSession();

// =================================================

function displayAdminList(admins) {
  console.log(admins);

  const tableBody = document.querySelector("#adminList tbody");
  tableBody.innerHTML = ''
  admins.forEach(admin => {
    const row = document.createElement("tr");
    const fNameCell = document.createElement("td");
    fNameCell.textContent = admin.firstName;
    row.appendChild(fNameCell);

    const lNameCell = document.createElement("td");
    lNameCell.textContent = admin.lastName;
    row.appendChild(lNameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = admin.email;
    row.appendChild(emailCell);

    const actionCell = document.createElement("td");
    const selectButton = document.createElement("button");
    selectButton.textContent = "Select";
    selectButton.onclick = () => {

      window.location.href = `admin-page-modify.html?id=${admin._id}`;
    };
    actionCell.appendChild(selectButton);
    row.appendChild(actionCell);
    tableBody.appendChild(row);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  searchByWords.style.display = 'none';
    // =================================================================
    const tableHead = document.querySelector("#adminList thead");
    const row = document.createElement("tr");
    const fNameCell = document.createElement("th");
    fNameCell.textContent = 'First Name';
    fNameCell.classList.add('div-table-title-color');
    row.appendChild(fNameCell);

    const lNameCell = document.createElement("th");
    lNameCell.textContent = 'Last Name';
    lNameCell.classList.add('div-table-title-color');
    row.appendChild(lNameCell);

    const emailCell = document.createElement("th");
    emailCell.textContent = 'Email';
    emailCell.classList.add('div-table-title-color');
    row.appendChild(emailCell);

    const selectCell = document.createElement("th");
    selectCell.textContent = '';
    selectCell.classList.add('div-table-title-color');
    row.appendChild(selectCell);

    tableHead.appendChild(row);
// =================================================================
  getAllAdmins();
});

// ============================================================
const searchOptions = document.getElementById('searchOptions');
const searchByWords = document.getElementById('searchByWords');
const searchByDate = document.getElementsByClassName('searchByDate');
const searchButton = document.getElementById('searchButton');
const startDateElement = document.getElementById('startDate');
const endDateElement = document.getElementById('endDate');
const resetButton = document.getElementById('resetButton');
const createButton = document.getElementById('createButton');

createButton.addEventListener('click', () => {
  window.location = "admin-page-create.html"
});

resetButton.addEventListener('click', () => {
  getAllAdmins();
});

let typeOfSearch = 'CreatedDate';
searchOptions.addEventListener('change', (event) => {
  typeOfSearch = event.target.value;
  searchByWords.value = '';
  if (event.target.value === 'CreatedDate') {
    searchByWords.style.display = 'none';
    // Loop through each element with the class 'searchField'
    for (const element of searchByDate) {
      element.style.display = 'block';
    }
  }
  else {
    switch (event.target.value) {
      case 'FirstName':
        searchByWords.placeholder = 'Enter First Name';
        break;
      case 'LastName':
        searchByWords.placeholder = 'Enter Last Name';
        break;
      case 'Email':
        searchByWords.placeholder = 'Enter Email';
        break;
    }
    searchByWords.style.display = 'block';
    // Loop through each element with the class 'searchField'
    for (const element of searchByDate) {
      element.style.display = 'none';
    }
  }
});

async function getAllAdmins() {
  try {
    searchByWords.value = '';
    const admins = await window.api.getAdminListAPI();
    displayAdminList(admins);
  } catch (error) {
    console.error('Error fetching admins:', error);
  }
}
async function searchAdminListByFilter(type, keyword) {
  try {
    let admins = [];
    if (type === 'FirstName') {
      admins = await window.api.getAdminListByFNameAPI(keyword);
    }
    else if (type === 'LastName') {
      admins = await window.api.getAdminListByLNameAPI(keyword);
    }
    else if (type === 'Email') {
      admins = await window.api.getAdminListByEmailAPI(keyword);
    }
    console.log("Truong: " + admins);
    displayAdminList(admins);
  }
  catch (error) {
    console.error('Error fetching admins:', error);
  }
}

async function searchAdminListByCreatedDate(startDate, endDate) {
  try {
    let admins = await window.api.getAdminListByCreatedDateAPI(startDate, endDate);
    console.log("Truong: " + admins);
    displayAdminList(admins);
  }
  catch (error) {
    console.error('Error fetching admins:', error);
  }
}

searchButton.addEventListener('click', () => {
  if (searchOptions.value === 'CreatedDate') {
    const startDate = startDateElement.value;
    const endDate = endDateElement.value;
    searchAdminListByCreatedDate(startDate, endDate);
  }
  else {
    const searchValue = searchByWords.value;
    searchAdminListByFilter(typeOfSearch, searchValue)
  }
});
