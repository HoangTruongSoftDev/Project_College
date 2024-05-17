function displayAdminList(admins) {
  console.log(admins);
  const adminListElement = document.getElementById('adminList');
  
  adminListElement.innerHTML = '';
  admins.forEach(admin => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
                    <div class="div-table-content">
                        <div class="name">${admin.firstName}</div>
                        <div class="lastName">${admin.lastName}</div>
                        <div class="email">${admin.email}</div>
                    </div>
                    `;
    adminListElement.appendChild(listItem);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  searchByWords.style.display = 'none';
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
