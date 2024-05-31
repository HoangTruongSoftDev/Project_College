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
  
  // =================================================

let professionalDiplomasList = []
function displayDiplomasList(professionalDiplomasList) {
    console.log(professionalDiplomasList);

    const tableBody = document.querySelector("#professionalDiplomasList tbody");
    tableBody.innerHTML = ''
    professionalDiplomasList.forEach((professionalDiploma, index) => {
        const row = document.createElement("tr");
        const DiplomaCell = document.createElement("td");
        const inputDiploma = document.createElement("input");
        inputDiploma.value = professionalDiploma;
        inputDiploma.classList.add("input-style");
        inputDiploma.id = `professionalDiplomaId-${index}`;
        DiplomaCell.appendChild(inputDiploma);
        row.appendChild(DiplomaCell);

        const actionCell = document.createElement("td");
        const selectButton = document.createElement("button");
        selectButton.textContent = "Delete";
        selectButton.onclick = () => {
            professionalDiplomasList.forEach((_, index) => {
                const inputDiploma = document.getElementById(`professionalDiplomaId-${index}`);
                professionalDiplomasList[index] = inputDiploma.value;
            });
            professionalDiplomasList.splice(index, 1);
            sendData();
            window.location.reload();
        };
        actionCell.appendChild(selectButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
}
function sendData() {
    
    const dataToSend = JSON.stringify(professionalDiplomasList);
    sessionStorage.setItem('professionalDiplomasList', dataToSend);// Store the data in session storage
}
function receiveData() {
    const dataReceived = sessionStorage.getItem('professionalDiplomasList');
    console.log(dataReceived);
    if (dataReceived !== null) {
        professionalDiplomasList = JSON.parse(dataReceived);
        console.log(professionalDiplomasList);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    receiveData();
    displayDiplomasList(professionalDiplomasList);
});
const returnButton = document.getElementById("returnButton");
returnButton.addEventListener('click', returnPreviousPage);

function returnPreviousPage() {
    sendData();
    window.history.back();
}

const updateButton = document.getElementById("updateButton");
updateButton.addEventListener('click', updateProfessionalDiplomas);

async function updateProfessionalDiplomas() {
    professionalDiplomasList.forEach((_, index) => {
        const inputDiploma = document.getElementById(`professionalDiplomaId-${index}`);
        professionalDiplomasList[index] = inputDiploma.value;
    });
    sendData();
    const result = await window.api.showMessageBoxAPI('Successfully', `Updating Professional Diplomas Successfully!!!`, 'Message');
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', () => {
    window.location.reload();
});