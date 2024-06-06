function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
  } 
  function clearSessionWorker() {
    sessionStorage.removeItem('workerBillList');
    sessionStorage.removeItem('professionsList');
    sessionStorage.removeItem('professionalDiplomasList');
    sessionStorage.removeItem('modifiedWorker');
  } 
  clearSessionEmployer();
  clearSessionWorker();
  sessionStorage.removeItem('loginUser');
  
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');



const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', login);

async function login() {
    if (emailInput.value.trim() === '') {
        await window.api.showMessageBoxAPI("Warning", "Missing Email", "Message");
    }
    else if (passwordInput.value.trim() === '') {
        await window.api.showMessageBoxAPI("Warning", "Missing Password", "Message");
    }
    else {
        const admins = await window.api.getAdminListByEmailAPI(emailInput.value.trim());
        if (admins.length > 0) {
            
            for (const admin of admins) {
                if (admin.password === passwordInput.value.trim()) {
                    sessionStorage.setItem('loginUser', admin.firstName)
                    window.location.href = 'index.html';
                }
                else {
                    await window.api.showMessageBoxAPI("Warning", "Incorrect Password", "Message");
                    break;
                }
            }
        }
        else {
            await window.api.showMessageBoxAPI("Warning", "Invalid Account", "Message");
        }
    }
}

emailInput.value = "truong@gmail.com";
passwordInput.value = "truong123";