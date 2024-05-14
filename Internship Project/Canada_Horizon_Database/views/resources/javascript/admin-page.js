const AdminController = require("../../../controllers/adminController");
AdminController.createAdmin("Truong", "Pham", "truong@getAdminList.com", "123");
// const admins = [
//     { username: 'admin1', email: 'admin1@example.com' },
//     { username: 'admin2', email: 'admin2@example.com' },
//     { username: 'admin3', email: 'admin3@example.com' }
// ];

// const adminListElement = document.getElementById('adminList');

// adminListElement.innerHTML = '';

// admins.forEach(admin => {

//     const listItem = document.createElement('li');


//     listItem.innerHTML = `
//     <div class="div-table-content">
//         <div class="name">${admin.username}</div>
//         <div class="lastName">${admin.email}</div>
//         <div class="email">TGruong</div>
//     </div>
//     `;


//     adminListElement.appendChild(listItem);
// });