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

function displayWorkerList(workers) {
  console.log(workers);

  const tableBody = document.querySelector("#workerList tbody");
  tableBody.innerHTML = ''
  workers.forEach(worker => {
    const row = document.createElement("tr");
    const fullNameCell = document.createElement("td");
    const fullName = worker.firstName + ' ' + worker.lastName
    fullNameCell.textContent = fullName;
    row.appendChild(fullNameCell);

    const professionsCelll = document.createElement("td");
    professionsCelll.textContent = worker.professions;
    row.appendChild(professionsCelll);

    const diplomaCell = document.createElement("td");
    diplomaCell.textContent = worker.professionalDiplomas;
    row.appendChild(diplomaCell);

    const actionCell = document.createElement("td");
    const selectButton = document.createElement("button");
    selectButton.textContent = "Select";
    selectButton.onclick = () => {
      window.location.href = `worker-page-modify.html?id=${worker._id}`;
    };
    actionCell.appendChild(selectButton);
    row.appendChild(actionCell);
    tableBody.appendChild(row);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  searchByWords.style.display = 'none';
  searchByProfession.style.display = 'none';

  const tableHead = document.querySelector("#workerList thead");


  const row = document.createElement("tr");
  const fullNameCell = document.createElement("th");
  fullNameCell.textContent = 'Full Name';
  fullNameCell.classList.add('div-table-title-color');
  row.appendChild(fullNameCell);

  const professionCell = document.createElement("th");
  professionCell.textContent = 'Profession';
  professionCell.classList.add('div-table-title-color');
  row.appendChild(professionCell);

  const diplomaCell = document.createElement("th");
  diplomaCell.textContent = 'Diploma';
  diplomaCell.classList.add('div-table-title-color');
  row.appendChild(diplomaCell);

  const selectCell = document.createElement("th");
  selectCell.textContent = '';
  selectCell.classList.add('div-table-title-color');
  row.appendChild(selectCell);

  tableHead.appendChild(row);
  getAllWorkers();
});

// ============================================================
const searchOptions = document.getElementById('searchOptions');
const searchByWords = document.getElementById('searchByWords');
const searchByProfession = document.getElementById('searchByProfession');
const searchByDate = document.getElementsByClassName('searchByDate');
const searchButton = document.getElementById('searchButton');
const startDateElement = document.getElementById('startDate');
const endDateElement = document.getElementById('endDate');
const resetButton = document.getElementById('resetButton');
const createButton = document.getElementById('createButton');
let typeOfProfessionSearch = 'Agriculture'
let typeOfSearch = 'CreatedDate';

createButton.addEventListener('click', () => {
  window.location = "worker-page-create.html"
});

resetButton.addEventListener('click', () => {
  getAllWorkers();
});


searchOptions.addEventListener('change', (event) => {
  typeOfSearch = event.target.value;
  searchByWords.value = '';
  if (event.target.value === 'CreatedDate' || event.target.value === 'BirthDate') {
    searchByWords.style.display = 'none';
    // Loop through each element with the class 'searchField'
    for (const element of searchByDate) {
      element.style.display = 'block';
    }
    searchByProfession.style.display = 'none';
  }
  else if (event.target.value === 'Profession') {
    searchByWords.style.display = 'none';
    // Loop through each element with the class 'searchField'
    for (const element of searchByDate) {
      element.style.display = 'none';
    }
    searchByProfession.style.display = 'block';
  }
  else {
    searchByWords.style.display = 'block';
    // Loop through each element with the class 'searchField'
    for (const element of searchByDate) {
      element.style.display = 'none';
    }
    searchByProfession.style.display = 'none';
  }
});

searchByProfession.addEventListener('change', (event) => {
  typeOfProfessionSearch = event.target.value;
  if (event.target.value === 'Other') {
    searchByWords.style.display = 'block';
  }
  else {
    searchByWords.style.display = 'none';
  }
});

async function getAllWorkers() {
  try {
    searchByWords.value = '';
    const workers = await window.api.getWorkerListAPI();
    displayWorkerList(workers);
  } catch (error) {
    console.error('Error fetching workers:', error);
  }
}

async function searchWorkerListByFilter(type, keyword) {
  try {
    let workers = [];
    switch (type) {
      case 'FirstName':
        workers = await window.api.getWorkerListByFirstNameAPI(keyword);
        break;
      case 'LastName':
        workers = await window.api.getWorkerListByLastNameAPI(keyword);
        break;
      case 'Address':
        workers = await window.api.getWorkerListByAddressAPI(keyword);
        break;
      case 'PhoneNumber':
        workers = await window.api.getWorkerListByPhoneNumberAPI(keyword);
        break;
      case 'ProfessionalDiploma':
        workers = await window.api.getWorkerListByProfessionalDiplomasAPI(keyword);
        break;
      case 'Profession':
        workers = await window.api.getWorkerListByProfessionsAPI(keyword);
        break;
      default:
        break;

    }
   if (type === 'ProfessionalActivities') {
      workers = await window.api.getEmployerListByProfessionalActivitiesAPI(keyword);
    }
    else if (type === 'EIMT') {
      workers = await window.api.getEmployerListByEIMTAPI(keyword);
    }
    console.log("Truong: " + workers);
    displayWorkerList(workers);
  }
  catch (error) {
    console.error('Error fetching workers:', error);
  }
}

async function searchWorkerListByCreatedDate(startDate, endDate) {
  try {
    let workers = await window.api.getWorkerListByCreatedDateAPI(startDate, endDate);
    console.log("Truong: " + workers);
    displayWorkerList(workers);
  }
  catch (error) {
    console.error('Error fetching workers:', error);
  }
}

async function searchWorkerListByBirthDate(startDate, endDate) {
  try {
    let workers = await window.api.getWorkerListByBirthDateAPI(startDate, endDate);
    console.log("Truong: " + workers);
    displayWorkerList(workers);
  }
  catch (error) {
    console.error('Error fetching workers:', error);
  }
}

searchButton.addEventListener('click', () => {
  if (searchOptions.value === 'CreatedDate') {
    const startDate = startDateElement.value;
    const endDate = endDateElement.value;
    searchWorkerListByCreatedDate(startDate, endDate);
  }
  else if (searchOptions.value === 'BirthDate') {
    const startDate = startDateElement.value;
    const endDate = endDateElement.value;
    searchWorkerListByBirthDate(startDate, endDate);
  }
  else if (searchOptions.value === 'Profession') {
    let searchValue = '';
    if (typeOfProfessionSearch === 'Other') {
      searchValue = searchByWords.value;
    }
    else {
      searchValue = searchByProfession.value;

    }
    searchWorkerListByFilter(typeOfSearch, searchValue)
  }
  else {
    const searchValue = searchByWords.value;
    searchWorkerListByFilter(typeOfSearch, searchValue);
  }
});
