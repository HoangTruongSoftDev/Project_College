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



