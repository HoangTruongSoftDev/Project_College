const serviceInput = document.getElementById("serviceInput");
const priceInput = document.getElementById("priceInput");
let billList = []

const returnButton = document.getElementById("returnButton");
returnButton.addEventListener('click', () => {
    const dataReceived = sessionStorage.getItem('billList');
    if (dataReceived) {
        let billListSession = JSON.parse(dataReceived);
        if (billList.length > 0) {
            billList.forEach(bill => {
                billListSession.push(bill)
            })
        }
        const dataToSend = JSON.stringify(billListSession);
        sessionStorage.setItem('billList', dataToSend);// Store the data in session storage
    }
    else {
        const dataToSend = JSON.stringify(billList);
        sessionStorage.setItem('billList', dataToSend);// Store the data in session storage
    }
     
    window.history.back();
})

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener('click', createBill)
async function createBill() {
    const paymentInput = document.querySelector('input[name="paymentInput"]:checked');
    if (serviceInput.value.trim() === '') {
        alert('Missing Service');
    }
    else if (priceInput.value.trim() === '') {
        alert('Missing Price');
    }
    else if (paymentInput.value.trim() === '') {
        alert('Missing Payment');
    }
    else {
        const bill = await window.api.createBillAPI(serviceInput.value.trim(), priceInput.value.trim(), paymentInput.value.trim());
        billList.push(bill);
        console.log(bill);
        alert(`Bill is created successfully !!!`);
        serviceInput.value = '';
        serviceInput.focus();
        priceInput.value = '';
    }
}







