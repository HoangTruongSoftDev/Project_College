

fetch('/api/admins').then(response => response.json()).then(admins => displayAdminList(admins));




function displayAdminList(admins) {
            console.log(admins); // Log the admins array
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

