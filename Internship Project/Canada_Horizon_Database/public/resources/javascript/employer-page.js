
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
      const employers = await window.api.getAdminListAPI();
      displayEmployerList(employers);
    } catch (error) {
      console.error('Error fetching employers:', error);
    }
  }
  async function searchEmployerListByFilter(type, keyword) {
    try {
      let employers = [];
      if (type === 'FirstName') {
        employers = await window.api.getAdminListByFNameAPI(keyword);
      }
      else if (type === 'LastName') {
        employers = await window.api.getAdminListByLNameAPI(keyword);
      }
      else if (type === 'Email') {
        employers = await window.api.getAdminListByEmailAPI(keyword);
      }
      console.log("Truong: " + employers);
      displayEmployerList(employers);
    }
    catch (error) {
      console.error('Error fetching employers:', error);
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
  