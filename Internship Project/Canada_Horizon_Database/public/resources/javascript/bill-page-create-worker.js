// =================================================


function clearSessionEmployer() {
    sessionStorage.removeItem('billList');
    sessionStorage.removeItem('employerProfessionalActivities');
    sessionStorage.removeItem('modifiedEmployer');
  } 
  clearSessionEmployer();
  
  // =================================================
  let loginUser = document.getElementById("loginUser");
  let loginUserSession = sessionStorage.getItem('loginUser');
  loginUser.textContent = loginUserSession
  
  // Add event listeners to all elements with the class 'logoutButton'
  document.querySelectorAll('.logoutButton').forEach(button => {
      button.addEventListener('click',  () => {
          window.location.href = 'login-page.html'
      })
  });
const serviceInput = document.getElementById("serviceInput");
const priceInput = document.getElementById("priceInput");
let billList = []

const returnButton = document.getElementById("returnButton");
returnButton.addEventListener('click', () => {
    const dataReceived = sessionStorage.getItem('workerBillList');
    if (dataReceived) {
        let billListSession = JSON.parse(dataReceived);
        if (billList.length > 0) {
            billList.forEach(bill => {
                billListSession.push(bill)
            })
        }
        const dataToSend = JSON.stringify(billListSession);
        sessionStorage.setItem('workerBillList', dataToSend);// Store the data in session storage
    }
    else {
        const dataToSend = JSON.stringify(billList);
        sessionStorage.setItem('workerBillList', dataToSend);// Store the data in session storage
    }
     
    window.history.back();
})

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener('click', createBill)
async function createBill() {
    const paymentInput = document.querySelector('input[name="paymentInput"]:checked');
    if (serviceInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warrning', "Missing Service", 'Message');
    }
    else if (priceInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warrning', "Missing Price", 'Message');
    }
    else if (paymentInput.value.trim() === '') {
        const result = await window.api.showMessageBoxAPI('Warrning', "Missing Payment", 'Message');
    }
    else {
        const bill = await window.api.createBillAPI(serviceInput.value.trim(), priceInput.value.trim(), paymentInput.value.trim());
        billList.push(bill);
        console.log(bill);
        const result = await window.api.showMessageBoxAPI('Successfully', "Creating Bill Successfully !!!", 'Message');
        serviceInput.value = '';
        serviceInput.focus();
        priceInput.value = '';
    }
}







