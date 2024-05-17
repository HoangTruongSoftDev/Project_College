const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    getAdminListAPI: () => ipcRenderer.invoke('get-admin-list'),
    getAdminListByFNameAPI: (keyword) => ipcRenderer.invoke('get-admins-by-fname', keyword),
    getAdminListByLNameAPI: (keyword) => ipcRenderer.invoke('get-admins-by-lname', keyword),
    getAdminListByEmailAPI: (keyword) => ipcRenderer.invoke('get-admins-by-email', keyword),
    getAdminListByCreatedDateAPI: (startDate, endDate) => ipcRenderer.invoke('get-admin-by-created-date', startDate, endDate),
    
    
});