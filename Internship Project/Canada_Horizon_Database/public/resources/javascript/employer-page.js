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

function displayEmployerList(employers) {
  console.log(employers);

  const tableBody = document.querySelector("#employerList tbody");
  tableBody.innerHTML = ''
  employers.forEach(employer => {
    const row = document.createElement("tr");
    const companyNameCell = document.createElement("td");
    companyNameCell.textContent = employer.companyName;
    row.appendChild(companyNameCell);

    const activitiesCell = document.createElement("td");
    activitiesCell.textContent = employer.professionalActivities;
    row.appendChild(activitiesCell);

    const eimtCell = document.createElement("td");
    eimtCell.textContent = employer.EIMT;
    row.appendChild(eimtCell);

    const actionCell = document.createElement("td");
    const selectButton = document.createElement("button");
    selectButton.textContent = "Select";
    selectButton.onclick = () => {

      window.location.href = `employer-page-modify.html?id=${employer._id}`;
    };
    actionCell.appendChild(selectButton);
    row.appendChild(actionCell);
    tableBody.appendChild(row);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  searchByWords.style.display = 'none';
  searchByEIMT.style.display = 'none';
  // =================================================================
  const tableHead = document.querySelector("#employerList thead");

    const row = document.createElement("tr");
    const companyNameCell = document.createElement("th");
    companyNameCell.textContent = 'Company Name';
    companyNameCell.classList.add('div-table-title-color');
    row.appendChild(companyNameCell);

    const professionalActivitiesCell = document.createElement("th");
    professionalActivitiesCell.textContent = 'Professional Activitie';
    professionalActivitiesCell.classList.add('div-table-title-color');
    row.appendChild(professionalActivitiesCell);

    const eimtCell = document.createElement("th");
    eimtCell.textContent = 'EIMT';
    eimtCell.classList.add('div-table-title-color');
    row.appendChild(eimtCell);

    const selectCell = document.createElement("th");
    selectCell.textContent = '';
    selectCell.classList.add('div-table-title-color');
    row.appendChild(selectCell);

    tableHead.appendChild(row);
// =================================================================
  getAllEmployers();
});

// ============================================================
const searchOptions = document.getElementById('searchOptions');
const searchByWords = document.getElementById('searchByWords');
const searchByEIMT = document.getElementById('searchByEIMT');
const searchByDate = document.getElementsByClassName('searchByDate');
const searchButton = document.getElementById('searchButton');
const startDateElement = document.getElementById('startDate');
const endDateElement = document.getElementById('endDate');
const resetButton = document.getElementById('resetButton');
const createButton = document.getElementById('createButton');

createButton.addEventListener('click', () => {
  window.location = "employer-page-create.html"
});

resetButton.addEventListener('click', () => {
  getAllEmployers();
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
    searchByEIMT.style.display = 'none';
  }
  else if (event.target.value === 'EIMT') {
    searchByWords.style.display = 'none';
    // Loop through each element with the class 'searchField'
    for (const element of searchByDate) {
      element.style.display = 'none';
    }
    searchByEIMT.style.display = 'block';
  }
  else {
    searchByWords.style.display = 'block';
    // Loop through each element with the class 'searchField'
    for (const element of searchByDate) {
      element.style.display = 'none';
    }
    searchByEIMT.style.display = 'none';
  }
});

async function getAllEmployers() {
  try {
    searchByWords.value = '';
    const employers = await window.api.getEmployerListAPI();
    displayEmployerList(employers);
  } catch (error) {
    console.error('Error fetching employers:', error);
  }
}
async function searchEmployerListByFilter(type, keyword) {
  try {
    let employers = [];
    if (type === 'CompanyName') {
      employers = await window.api.getEmployerListByCompanyNameAPI(keyword);
    }
    else if (type === 'Address') {
      employers = await window.api.getEmployerListByAddressAPI(keyword);
    }
    else if (type === 'PhoneNumber') {
      employers = await window.api.getEmployerListByPhoneNumberAPI(keyword);
    }
    else if (type === 'ProfessionalActivities') {
      employers = await window.api.getEmployerListByProfessionalActivitiesAPI(keyword);
    }
    else if (type === 'EIMT') {
      employers = await window.api.getEmployerListByEIMTAPI(keyword);
    }
    console.log("Truong: " + employers);
    displayEmployerList(employers);
  }
  catch (error) {
    console.error('Error fetching employers:', error);
  }
}

async function searchEmployerListByCreatedDate(startDate, endDate) {
  try {
    let employers = await window.api.getEmployerListByCreatedDateAPI(startDate, endDate);
    console.log("Truong: " + employers);
    displayEmployerList(employers);
  }
  catch (error) {
    console.error('Error fetching employers:', error);
  }
}

searchButton.addEventListener('click', () => {
  if (searchOptions.value === 'CreatedDate') {
    const startDate = startDateElement.value;
    const endDate = endDateElement.value;
    searchEmployerListByCreatedDate(startDate, endDate);
  }
  else if (searchOptions.value === 'EIMT') {
    const searchValue = searchByEIMT.value;
    searchEmployerListByFilter(typeOfSearch, searchValue)
  }
  else {
    const searchValue = searchByWords.value;
    searchEmployerListByFilter(typeOfSearch, searchValue);
  }
});
