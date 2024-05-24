let updateButton = document.getElementById("updateButton");
let deleteButton = document.getElementById("deleteButton");
let returnButton = document.getElementById("returnButton");

const serviceInput = document.getElementById("serviceInput");
const priceInput = document.getElementById("priceInput");

let idInput = document.getElementById("idInput");
updateButton.addEventListener('click', updateBill)
deleteButton.addEventListener('click', deleteBill)
returnButton.addEventListener('click', returnPreviousPage);
let billListSession = [];

function updateBill() {
        if (serviceInput.value.trim() === '') {
            alert('Missing Service');
        }
        else if (priceInput.value.trim() === '') {
            alert('Missing Price');
        }
        else {
            billListSession[idInput.value].service = serviceInput.value.trim();
            billListSession[idInput.value].price = priceInput.value.trim();
            const paymentInput = document.querySelector('input[name="paymentInput"]:checked');
            billListSession[idInput.value].payment = paymentInput.value;
            alert(`Update successfully !!!`);
        }    
}

function returnPreviousPage() {
    const dataToSend = JSON.stringify(billListSession);
    sessionStorage.setItem('billList', dataToSend);// Store the data in session storage
    window.history.back();
}

function findBillById() {
    const urlParams = new URLSearchParams(window.location.search);
    let billIndex = urlParams.get('id');
    const dataReceived = sessionStorage.getItem('billList');
    billListSession = JSON.parse(dataReceived);
    let bill = billListSession[billIndex];
    console.log(bill);

    serviceInput.value = bill.service;
    priceInput.value = bill.price;
    if (bill.payment === 'Yes') {
        document.querySelector('input[name="paymentInput"][value="Yes"]').checked = true;
    }
    else {
        document.querySelector('input[name="paymentInput"][value="No"]').checked = true;
    }
    idInput.value = billIndex;
}
document.addEventListener('DOMContentLoaded', () => {
    findBillById();
});
function deleteBill() {
    if (confirm('Are you sure to delete this bill?')) {
        // User clicked OK
        billListSession.splice(idInput.value, 1);
        alert('Delete successfully !!!');
        returnPreviousPage();
    }
    
}