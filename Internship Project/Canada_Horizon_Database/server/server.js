const AdminController = require('./controllers/adminController');
const { ipcMain } = require('electron');

ipcMain.handle('get-admins-by-fname', async (event,  keyword) => {
    try {
        const admins = await AdminController.findAdminByFName(keyword);
        return admins;
    }
    catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});

ipcMain.handle('get-admins-by-lname', async (event,  keyword) => {
    try {
        const admins = await AdminController.findAdminByLName(keyword);
        return admins;
    }
    catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});
ipcMain.handle('get-admins-by-email', async (event,  email) => {
    try {
        const admins = await AdminController.findAdminByEmail(email);
        return admins;
    }
    catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});

ipcMain.handle('get-admin-by-created-date', async (event, startDate, endDate) => {
    try {
        const admins = await AdminController.findAdminByCreatedDate(startDate, endDate);
        return admins;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});

ipcMain.handle('get-admin-list', async () => {
    try {
        const admins = await AdminController.getAdminList();
        return admins;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});

ipcMain.handle('create-admin', async (event, firstName, lastName, email, password) => {
    try {
        const admin = await AdminController.createAdmin(firstName, lastName, email, password);
        return admin;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return null;
    }
});

ipcMain.handle('update-admin', async(event, adminId, firstName, lastName, email, password) => {
    try {
        const admin = await AdminController.updateAdmin(adminId, firstName, lastName, email, password);
        return admin;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return null;
    }
})

ipcMain.handle('get-admin-by-id', async(event, adminId) => {
    try {
        const admin = await AdminController.findAdminById(adminId);
        return admin;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return null;
    }
})

ipcMain.handle('delete-admin', async(event, adminId) => {
    try {
        const admin = await AdminController.deleteAdmin(adminId);
        return admin;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return null;
    }
})

