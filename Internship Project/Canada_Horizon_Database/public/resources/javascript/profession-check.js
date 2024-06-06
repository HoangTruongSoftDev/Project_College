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
  let loginUser = document.getElementById("loginUser");
let loginUserSession = sessionStorage.getItem('loginUser');
loginUser.textContent = loginUserSession

// Add event listeners to all elements with the class 'logoutButton'
document.querySelectorAll('.logoutButton').forEach(button => {
    button.addEventListener('click',  () => {
        window.location.href = 'login-page.html'
    })
});
  // =================================================

let professionsList = []
function displayProfessionsList(professionsList) {
    console.log(professionsList);

    const tableBody = document.querySelector("#professionsList tbody");
    tableBody.innerHTML = ''
    professionsList.forEach((profession, index) => {
        const row = document.createElement("tr");
        const professionCell = document.createElement("td");
        const inputProfession = document.createElement("input");
        inputProfession.value = profession;
        inputProfession.classList.add("input-style");
        inputProfession.id = `professionId-${index}`;
        professionCell.appendChild(inputProfession);
        row.appendChild(professionCell);

        const actionCell = document.createElement("td");
        const selectButton = document.createElement("button");
        selectButton.textContent = "Delete";
        selectButton.onclick = () => {
            professionsList.forEach((_, index) => {
                const inputProfession = document.getElementById(`professionId-${index}`);
                professionsList[index] = inputProfession.value;
            });
            professionsList.splice(index, 1);
            sendData();
            window.location.reload();
        };
        actionCell.appendChild(selectButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
}
function sendData() {
    
    const dataToSend = JSON.stringify(professionsList);
    sessionStorage.setItem('professionsList', dataToSend);// Store the data in session storage
}
function receiveData() {
    const dataReceived = sessionStorage.getItem('professionsList');
    console.log(dataReceived);
    if (dataReceived !== null) {
        professionsList = JSON.parse(dataReceived);
        console.log(professionsList);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    receiveData();
    displayProfessionsList(professionsList);
});
const returnButton = document.getElementById("returnButton");
returnButton.addEventListener('click', returnPreviousPage);

function returnPreviousPage() {
    sendData();
    window.history.back();
}

const updateButton = document.getElementById("updateButton");
updateButton.addEventListener('click', updateProfessions);

async function updateProfessions() {
    professionsList.forEach((_, index) => {
        const inputProfession = document.getElementById(`professionId-${index}`);
        professionsList[index] = inputProfession.value;
    });
    sendData();
    const result = await window.api.showMessageBoxAPI('Successfully', `Updating Professions Successfully!!!`, 'Message');
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', () => {
    window.location.reload();
});