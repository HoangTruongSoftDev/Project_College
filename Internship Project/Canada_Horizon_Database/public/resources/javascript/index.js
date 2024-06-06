let divElement = document.getElementById("content-admin");
// =================================================

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



let loginUser = document.getElementById("loginUser");
let loginUserSession = sessionStorage.getItem('loginUser');
loginUser.textContent = loginUserSession

let loginUser1 = document.getElementById("loginUser1");
loginUser1.textContent = loginUserSession

// Add event listeners to all elements with the class 'logoutButton'
document.querySelectorAll('.logoutButton').forEach(button => {
    button.addEventListener('click',  () => {
        window.location.href = 'login-page.html'
    })
});

// =================================================

// Add event listener for click event
divElement.addEventListener("click", function () {
    window.location = "admin-page.html"
});

divElement = document.getElementById("content-employer");

// Add event listener for click event
divElement.addEventListener("click", function () {
    window.location = "employer-page.html"
});

divElement = document.getElementById("content-worker");

// Add event listener for click event
divElement.addEventListener("click", function () {
    window.location = "worker-page.html"
});



