const searchOptions = document.getElementById('searchOptions');
const searchByWords = document.getElementById('searchByWords');
let searchValue = '';
const searchButton = document.getElementById('searchButton');

let loginUser = document.getElementById("loginUser");
let loginUserSession = sessionStorage.getItem('loginUser');
loginUser.textContent = loginUserSession

// Add event listeners to all elements with the class 'logoutButton'
document.querySelectorAll('.logoutButton').forEach(button => {
    button.addEventListener('click',  () => {
        window.location.href = 'login-page.html'
    })
});

function initializeEmployerTable() {
    const tableHead = document.querySelector("#employerReportList thead");

    const rowHeader = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.textContent = 'List Of Employers';
    headerCell.colSpan = 4;
    headerCell.style.fontSize = '30px';
    rowHeader.appendChild(headerCell);
    tableHead.appendChild(rowHeader);


    const row = document.createElement("tr");
    const companyNameCell = document.createElement("th");
    companyNameCell.textContent = 'Company Name';
    companyNameCell.classList.add('div-table-title-color');
    row.appendChild(companyNameCell);

    const professionalActivitiesCell = document.createElement("th");
    professionalActivitiesCell.textContent = 'Professional Activities';
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
}

function initializeWorkerTable() {
    
  const tableHead = document.querySelector("#workerReportList thead");

  
  const rowHeader = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.textContent = 'List Of Workers';
  headerCell.colSpan = 4;
  headerCell.style.fontSize = '30px';
  rowHeader.appendChild(headerCell);
  tableHead.appendChild(rowHeader);

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
}

document.addEventListener('DOMContentLoaded', () => {
    searchByWords.style.display = 'none';

    initializeEmployerTable();
    initializeWorkerTable();
});

searchOptions.addEventListener('change', (event) => {
    searchValue = event.target.value;
    if (event.target.value === 'Others') {
        searchByWords.style.display = 'block';
    }
    else {
        searchByWords.style.display = 'none';
    }
});

searchButton.addEventListener('click', async () => {
    if (searchValue === 'Others') {
        if (searchByWords.value.trim() === '') {
            const result = await window.api.showMessageBoxAPI('Warning', "Missing Profession", 'Message');
        }
        else {
            const employers = await window.api.getEmployerListByProfessionalActivitiesAPI(searchByWords.value.trim());
            const workers = await window.api.getWorkerListByProfessionsAPI(searchByWords.value.trim());
            displayReport(employers, workers);
        }
    }
    else {
        const employers = await window.api.getEmployerListByProfessionalActivitiesAPI(searchValue.trim());
        const workers = await window.api.getWorkerListByProfessionsAPI(searchValue.trim());
        displayReport(employers, workers);
    }
})

function displayReport(employers, workers) {
    displayEmployerList(employers)
    displayWorkerList(workers);
}

function displayEmployerList(employers) {
    console.log(employers);
  
    const tableBody = document.querySelector("#employerReportList tbody");
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

function displayWorkerList(workers) {
    console.log(workers);
  
    const tableBody = document.querySelector("#workerReportList tbody");
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

async function populateSelect() {
    const professionCollection = await window.api.getProfessionCollectionAPI();
    searchValue = professionCollection[0];
    professionCollection.forEach(profession => {
        const option = document.createElement('option');
        option.value = profession
        option.textContent = profession;
        searchOptions.appendChild(option);
    });
}

populateSelect();