const AdminController = require('./controllers/adminController');
const { ipcMain, BrowserWindow } = require('electron');
const BillController = require('./controllers/billController');
const EmployerController = require('./controllers/employerController');
const { dialog } = require('electron');
const path = require('path');
const FileController = require('./controllers/fileController');
const WorkerController = require('./controllers/workerController');

ipcMain.handle('get-admins-by-fname', async (event, keyword) => {
    try {
        const admins = await AdminController.findAdminByFName(keyword);
        return admins;
    }
    catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});

ipcMain.handle('get-admins-by-lname', async (event, keyword) => {
    try {
        const admins = await AdminController.findAdminByLName(keyword);
        return admins;
    }
    catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});
ipcMain.handle('get-admins-by-email', async (event, email) => {
    try {
        const admins = await AdminController.findAdminByEmail(email);
        return admins;
    }
    catch (error) {
        console.error('Error fetching admins:', error);
        return [];
    }
});

ipcMain.handle('get-admins-by-created-date', async (event, startDate, endDate) => {
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

ipcMain.handle('update-admin', async (event, adminId, firstName, lastName, email, password) => {
    try {
        const admin = await AdminController.updateAdmin(adminId, firstName, lastName, email, password);
        return admin;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return null;
    }
})

ipcMain.handle('get-admin-by-id', async (event, adminId) => {
    try {
        const admin = await AdminController.findAdminById(adminId);
        return admin;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return null;
    }
})

ipcMain.handle('delete-admin', async (event, adminId) => {
    try {
        const admin = await AdminController.deleteAdmin(adminId);
        return admin;
    } catch (error) {
        console.error('Error fetching admins:', error);
        return null;
    }
})

ipcMain.handle('create-bill', async (event, service, price, payment) => {
    try {
        const bill = BillController.createBill(service, price, payment);
        return bill;
    } catch (error) {
        console.error('Error fetching bills:', error);
        return null;
    }
})

ipcMain.handle('create-employer', async (event, companyName, address, phoneNumber, professionalActivities, EIMT, bills) => {
    try {
        const employer = await EmployerController.createEmployer(companyName, address, phoneNumber, professionalActivities, EIMT, bills)
        return employer;
    } catch (error) {
        console.error('Error fetching employers:', error);
        return null;
    }
})

ipcMain.handle('get-employer-list', async () => {
    try {
        const employers = await EmployerController.getEmployerList();
        return employers;
    } catch (error) {
        console.error('Error fetching employers:', error);
        return [];
    }
});

ipcMain.handle('show-message-dialog', async (event, title, message, type) => {

    if (type === 'Message') {
        const result = await dialog.showMessageBox({
            type: 'info',
            title: title,
            message: message,
            buttons: ['OK']
        });
        return 'OK';
    }
    else if (type === 'Confirmation') {
        const result = await dialog.showMessageBox({
            type: 'info',
            title: title,
            message: message,
            buttons: ['Yes', 'Cancel']
        });
        switch (result.response) {
            case 0:
                // Yes button clicked
                return 'Yes';
            case 1:
                // Cancel button clicked
                return 'Cancel';
            default:
                // This should not happen
                return null;
        }
    }
});
ipcMain.handle('get-employers-by-company-name', async (event, keyword) => {
    try {
        const employers = await EmployerController.findEmployerByCompanyName(keyword);
        return employers;
    }
    catch (error) {
        console.error('Error fetching employers:', error);
        return [];
    }
});
ipcMain.handle('get-employers-by-address', async (event, keyword) => {
    try {
        const employers = await EmployerController.findEmployerByAddress(keyword);
        return employers;
    }
    catch (error) {
        console.error('Error fetching employers:', error);
        return [];
    }
});
ipcMain.handle('get-employers-by-phone-number', async (event, keyword) => {
    try {
        const employers = await EmployerController.findEmployerByPhoneNumber(keyword);
        return employers;
    }
    catch (error) {
        console.error('Error fetching employers:', error);
        return [];
    }
});
ipcMain.handle('get-employers-by-professional-activities', async (event, keyword) => {
    try {
        const employers = await EmployerController.findEmployerByProfessionalActivities(keyword);
        return employers;
    }
    catch (error) {
        console.error('Error fetching employers:', error);
        return [];
    }
});
ipcMain.handle('get-employers-by-EIMT', async (event, keyword) => {
    try {
        const employers = await EmployerController.findEmployerByEIMT(keyword);
        return employers;
    }
    catch (error) {
        console.error('Error fetching employers:', error);
        return [];
    }
});
ipcMain.handle('get-employers-by-created-date', async (event, startDate, endDate) => {
    try {
        const employers = await EmployerController.findEmployerByCreatedDate(startDate, endDate);
        return employers;
    } catch (error) {
        console.error('Error fetching employers:', error);
        return [];
    }
});

ipcMain.handle('get-employer-by-id', async (event, employerId) => {
    try {
        const employer = await EmployerController.findEmployerById(employerId);
        return employer;
    } catch (error) {
        console.error('Error fetching employers:', error);
        return null;
    }
})

ipcMain.handle('update-employer', async (event, employerId, companyName, address, phoneNumber, professionalActivities, EIMT, bills) => {
    try {
        const employer = await EmployerController.updateEmployer(employerId, companyName, address, phoneNumber, professionalActivities, EIMT, bills);
        return employer;
    } catch (error) {
        console.error('Error fetching employers:', error);
        return null;
    }
})




ipcMain.handle('delete-employer', async (event, employerId) => {
    try {
        const employer = await EmployerController.deleteEmployer(employerId);
        return employer;
    } catch (error) {
        console.error('Error fetching employers:', error);
        return null;
    }
})



ipcMain.handle('upload-file', async (event, filePath) => {
    try {
        const fileId = await FileController.uploadFile(filePath);
        return fileId;
    } catch (error) {
        console.error('File upload failed:', error);
        return error;
    }
});

ipcMain.handle('download-file', async (event, fileId) => {
    try {
        const result = await FileController.downloadFile(fileId);
       return result;
    } catch (err) {
       return err
    }
});

ipcMain.handle('save-temp-file', async (event, fileId) => {
    try {
        const result = await FileController.saveTempFile(fileId);
       return result;
    } catch (err) {
       return err
    }
});


ipcMain.handle('open-file-window', async (event, filePath) => {
    const fileWindow = new BrowserWindow({
        width: 600,
        height: 400,
        minimizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    fileWindow.maximize();
    await fileWindow.loadFile(path.join(__dirname,'..', 'public', 'view-file-page.html'));
    fileWindow.webContents.send('display-file', filePath);
});

ipcMain.handle('create-worker', async (event, firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resume, motivationLetter) => {
    try {
        let resumeId = '';
        if (resume !== '') {
            const resumeObject = await FileController.uploadFile(resume); 
            resumeId = resumeObject.fileId;
        }
        let motivationLetterId = ''
        if (motivationLetter !== '') {
            const motivationLetterObject= await FileController.uploadFile(motivationLetter);
            motivationLetterId = motivationLetterObject.fileId;
        }
        const worker = await WorkerController.createWorker(firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resumeId, motivationLetterId)
        return worker;
    } catch (error) {
        console.error('Error fetching worker:', error);
        return null;
    }
})


ipcMain.handle('update-worker', async (event, workerId,  firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resume, motivationLetter) => {
    try {
        const exsitingWorker = await WorkerController.findWorkerById(workerId);
        if (exsitingWorker.resume !== '') {
            FileController.deleteFile(exsitingWorker.resume);
        }
        if (exsitingWorker.motivationLetter !== '') {
            FileController.deleteFile(exsitingWorker.motivationLetter);
        }
        let resumeId = '';
        if (resume !== '') {
            const resumeObject = await FileController.uploadFile(resume); 
            resumeId = resumeObject.fileId;
        }
        let motivationLetterId = ''
        if (motivationLetter !== '') {
            const motivationLetterObject= await FileController.uploadFile(motivationLetter);
            motivationLetterId = motivationLetterObject.fileId;
        }
        const worker = await WorkerController.updateWorker(workerId, firstName, lastName, birthDate, address, phoneNumber, professionalDiplomas, professions, bills, resumeId, motivationLetterId)
        return worker;
    } catch (error) {
        console.error('Error fetching worker:', error);
        return null;
    }
})
ipcMain.handle('delete-worker', async (event, workerId) => {
    try {
        const exsitingWorker = await WorkerController.findWorkerById(workerId);
        if (exsitingWorker.resume !== '') {
            FileController.deleteFile(exsitingWorker.resume);
        }
        if (exsitingWorker.motivationLetter !== '') {
            FileController.deleteFile(exsitingWorker.motivationLetter);
        }
        const worker = await WorkerController.deleteWorker(workerId);
        return worker;
    } catch (error) {
        console.error('Error fetching worker:', error);
        return null;
    }
})



ipcMain.handle('get-worker-list', async () => {
    try {
        const workers = await WorkerController.getWorkerList();
        return workers;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});

ipcMain.handle('get-workers-by-created-date', async (event, startDate, endDate) => {
    try {
        const workers = await WorkerController.findWorkerByCreatedDate(startDate, endDate);
        return workers;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});


ipcMain.handle('get-workers-by-birth-date', async (event, startDate, endDate) => {
    try {
        const workers = await WorkerController.findWorkerByBirthDate(startDate, endDate);
        return workers;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});

ipcMain.handle('get-workers-by-first-name', async (event, keyword) => {
    try {
        const workers = await WorkerController.findWorkerByFirstName(keyword);
        return workers;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});

ipcMain.handle('get-workers-by-last-name', async (event, keyword) => {
    try {
        const workers = await WorkerController.findWorkerByLastName(keyword);
        return workers;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});

ipcMain.handle('get-workers-by-address', async (event, keyword) => {
    try {
        const workers = await WorkerController.findWorkerByAddress(keyword);
        return workers;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});

ipcMain.handle('get-workers-by-phone-number', async (event, keyword) => {
    try {
        const workers = await WorkerController.findWorkerByPhoneNumber(keyword);
        return workers;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});

ipcMain.handle('get-workers-by-professional-diplomas', async (event, keyword) => {
    try {
        const workers = await WorkerController.findWorkerByProfessionalDiplomas(keyword);
        return workers;
    }
    catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});
ipcMain.handle('get-workers-by-professions', async (event, keyword) => {
    try {
        const workers = await WorkerController.findWorkerByProfessions(keyword);
        return workers;
    }
    catch (error) {
        console.error('Error fetching workers:', error);
        return [];
    }
});

ipcMain.handle('get-worker-by-id', async (event, workerId) => {
    try {
        const worker = await WorkerController.findWorkerById(workerId);
        return worker;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return null;
    }
})

const url = require('url');
const CollectionController = require('./controllers/collectionController');
ipcMain.handle('encode-file', async (event, filePath) => {
    try {
            let encodedPath = url.pathToFileURL(filePath).href;
            return encodedPath;
    } catch (error) {
        console.error('Error fetching workers:', error);
        return null;
    }
})

ipcMain.handle('get-profession-collection', async () => {
    try {
            const professionCollection = CollectionController.getProfessionList();
            return professionCollection;
    } catch (error) {
        console.error('Error fetching professionCollection:', error);
        return null;
    }
})










