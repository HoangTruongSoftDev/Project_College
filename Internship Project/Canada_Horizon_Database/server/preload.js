const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getAdminListAPI: () => ipcRenderer.invoke('get-admin-list'),
    getAdminListByFNameAPI: (keyword) => ipcRenderer.invoke('get-admins-by-fname', keyword),
    getAdminListByLNameAPI: (keyword) => ipcRenderer.invoke('get-admins-by-lname', keyword),
    getAdminListByEmailAPI: (keyword) => ipcRenderer.invoke('get-admins-by-email', keyword),
    getAdminListByCreatedDateAPI: (startDate, endDate) => ipcRenderer.invoke('get-admins-by-created-date', startDate, endDate),
    createAdminAPI: (firstName, lastName, email, password) =>  ipcRenderer.invoke('create-admin',firstName, lastName, email, password),
    updateAdminAPI: (adminId, firstName, lastName, email, password) => ipcRenderer.invoke('update-admin', adminId, firstName, lastName, email, password),
    getAdminByIdAPI: (adminId) => ipcRenderer.invoke('get-admin-by-id', adminId),
    deleteAdminAPI: (adminId) => ipcRenderer.invoke('delete-admin', adminId),
    createBillAPI: (service, price, payment) => ipcRenderer.invoke('create-bill', service, price, payment),
    createEmployerAPI: (companyName, address, phoneNumber, professionalActivities, EIMT, bills) => ipcRenderer.invoke('create-employer', companyName, address, phoneNumber, professionalActivities, EIMT, bills),
    getEmployerListAPI: () => ipcRenderer.invoke('get-employer-list'),
    showMessageBoxAPI: (title, message, type) => ipcRenderer.invoke('show-message-dialog', title, message, type),

    getEmployerListByCompanyNameAPI: (keyword) => ipcRenderer.invoke('get-employers-by-company-name', keyword),
    getEmployerListByAddressAPI: (keyword) => ipcRenderer.invoke('get-employers-by-address', keyword),
    getEmployerListByPhoneNumberAPI: (keyword) => ipcRenderer.invoke('get-employers-by-phone-number', keyword),
    getEmployerListByProfessionalActivitiesAPI: (keyword) => ipcRenderer.invoke('get-employers-by-professional-activities', keyword),
    getEmployerListByEIMTAPI: (keyword) => ipcRenderer.invoke('get-employers-by-EIMT', keyword),
    getEmployerListByCreatedDateAPI: (startDate, endDate) => ipcRenderer.invoke('get-employers-by-created-date', startDate, endDate),
    getEmployerByIdAPI: (employerId) => ipcRenderer.invoke('get-employer-by-id', employerId),
    
    updateEmployerAPI: (employerId, companyName, address, phoneNumber, professionalActivities, EIMT, bills) => ipcRenderer.invoke('update-employer', employerId, companyName, address, phoneNumber, professionalActivities, EIMT, bills),
    deleteEmployerAPI: (employerId) => ipcRenderer.invoke('delete-employer', employerId),
});