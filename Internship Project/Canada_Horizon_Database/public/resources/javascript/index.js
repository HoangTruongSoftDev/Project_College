let divElement = document.getElementById("content-admin");
// =================================================

function clearSession() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivties');
} 
clearSession();

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



