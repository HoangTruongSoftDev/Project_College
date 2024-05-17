// window.addEventListener

// const { remote } = require('electron');
// const AdminController = remote.require("../../../server/controllers/adminController");
// import { AdminController } from "../../../server/controllers/adminController.js";
const { api } = window;
async function fetchUserList() {
    try {
      // Call the exposed function to fetch user list from MongoDB
      const admins = await api.getAdminListFromDB();
      // Do something with the user list, such as displaying it in the UI
      displayAdminList(admins);
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  }
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
fetchUserList();
