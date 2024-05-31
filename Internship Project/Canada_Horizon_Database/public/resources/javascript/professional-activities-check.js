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
  clearSessionWorker();
  
  // =================================================
let professionalActivitiesList = []
function displayActivitiesList(professionalActivitiesList) {
    console.log(professionalActivitiesList);

    const tableBody = document.querySelector("#professionalActivitiesList tbody");
    tableBody.innerHTML = ''
    professionalActivitiesList.forEach((professionalActivity, index) => {
        const row = document.createElement("tr");
        const activityCell = document.createElement("td");
        const inputActivity = document.createElement("input");
        inputActivity.value = professionalActivity;
        inputActivity.classList.add("input-style");
        inputActivity.id = `professionalActivityId-${index}`;
        activityCell.appendChild(inputActivity);
        row.appendChild(activityCell);

        const actionCell = document.createElement("td");
        const selectButton = document.createElement("button");
        selectButton.textContent = "Delete";
        selectButton.onclick = () => {
            professionalActivitiesList.forEach((_, index) => {
                const inputActivity = document.getElementById(`professionalActivityId-${index}`);
                professionalActivitiesList[index] = inputActivity.value;
            });
            professionalActivitiesList.splice(index, 1);
            sendData();
            window.location.reload();
        };
        actionCell.appendChild(selectButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
}
function sendData() {
    
    const dataToSend = JSON.stringify(professionalActivitiesList);
    sessionStorage.setItem('employerProfessionalActivities', dataToSend);// Store the data in session storage
}
function receiveData() {
    const dataReceived = sessionStorage.getItem('employerProfessionalActivities');
    console.log(dataReceived);
    if (dataReceived !== null) {
        professionalActivitiesList = JSON.parse(dataReceived);
        console.log(professionalActivitiesList);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    receiveData();
    displayActivitiesList(professionalActivitiesList);
});
const returnButton = document.getElementById("returnButton");
returnButton.addEventListener('click', returnPreviousPage);

function returnPreviousPage() {
    sendData();
    window.history.back();
}

const updateButton = document.getElementById("updateButton");
updateButton.addEventListener('click', updateProfessionalActivities);

async function updateProfessionalActivities() {
    professionalActivitiesList.forEach((_, index) => {
        const inputActivity = document.getElementById(`professionalActivityId-${index}`);
        professionalActivitiesList[index] = inputActivity.value;
    });
    sendData();
    const result = await window.api.showMessageBoxAPI('Successfully', `Updating Professional Activities Successfully!!!`, 'Message');
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', () => {
    window.location.reload();
});