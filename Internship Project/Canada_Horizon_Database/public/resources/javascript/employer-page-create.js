let billList = []
const createBill = document.getElementById("createBill");
createBill.addEventListener('click', () => {
    console.log('bill-page-create.html Click')
    window.location.href = 'bill-page-create.html';
});
const listBill = document.getElementById("listBill")
listBill.addEventListener('click', () => {
    window.location.href = 'bill-page-check.html';
});

const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener('click', () => {
    console.log('refreshButton Click')
    location.reload();
});

function receiveData() {
    const dataReceived = sessionStorage.getItem('billList');
    console.log(dataReceived);
    if (dataReceived !== null) {
        billList = JSON.parse(dataReceived);
        console.log(billList); 
    }
}
window.onload = receiveData;

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    console.log(billList)
});

