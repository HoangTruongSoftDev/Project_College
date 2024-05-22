const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getAdminListAPI: () => ipcRenderer.invoke('get-admin-list'),
    getAdminListByFNameAPI: (keyword) => ipcRenderer.invoke('get-admins-by-fname', keyword),
    getAdminListByLNameAPI: (keyword) => ipcRenderer.invoke('get-admins-by-lname', keyword),
    getAdminListByEmailAPI: (keyword) => ipcRenderer.invoke('get-admins-by-email', keyword),
    getAdminListByCreatedDateAPI: (startDate, endDate) => ipcRenderer.invoke('get-admin-by-created-date', startDate, endDate),
    createAdminAPI: (firstName, lastName, email, password) =>  ipcRenderer.invoke('create-admin',firstName, lastName, email, password),
    updateAdminAPI: (adminId, firstName, lastName, email, password) => ipcRenderer.invoke('update-admin', adminId, firstName, lastName, email, password),
    getAdminByIdAPI: (adminId) => ipcRenderer.invoke('get-admin-by-id', adminId),
    deleteAdminAPI: (adminId) => ipcRenderer.invoke('delete-admin', adminId),
});