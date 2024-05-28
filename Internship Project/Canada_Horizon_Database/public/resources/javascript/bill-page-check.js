let billList = [];
function displayBillList(billList) {
    console.log(billList);

    const tableBody = document.querySelector("#billList tbody");
    tableBody.innerHTML = ''
    billList.forEach((bill, index) => {
        const row = document.createElement("tr");
        const billCell = document.createElement("td");
        billCell.textContent = bill.service;
        row.appendChild(billCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = bill.price;
        row.appendChild(priceCell);

        const paymentCell = document.createElement("td");
        paymentCell.textContent = bill.payment;
        row.appendChild(paymentCell);

        const actionCell = document.createElement("td");
        const selectButton = document.createElement("button");
        selectButton.textContent = "Select";
        selectButton.onclick = () => {
            window.location.href = `bill-page-modify.html?id=${index}`;
        };
        actionCell.appendChild(selectButton);
        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });
}
function receiveData() {
    const dataReceived = sessionStorage.getItem('billList');
    console.log(dataReceived);
    if (dataReceived !== null) {
        billList = JSON.parse(dataReceived);
        console.log(billList);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    receiveData();
    searchByWords.style.display = 'none';
    searchByPayment.style.display = 'none';
    // =================================================================
  const tableHead = document.querySelector("#billList thead");

  const row = document.createElement("tr");
  const serviceCell = document.createElement("th");
  serviceCell.textContent = 'Service';
  serviceCell.classList.add('div-table-title-color');
  row.appendChild(serviceCell);

  const priceCell = document.createElement("th");
  priceCell.textContent = 'Price';
  priceCell.classList.add('div-table-title-color');
  row.appendChild(priceCell);

  const paymentCell = document.createElement("th");
  paymentCell.textContent = 'Payment';
  paymentCell.classList.add('div-table-title-color');
  row.appendChild(paymentCell);

  const selectCell = document.createElement("th");
  selectCell.textContent = '';
  selectCell.classList.add('div-table-title-color');
  row.appendChild(selectCell);

  tableHead.appendChild(row);
// =================================================================
    displayBillList(billList);
});

const searchOptions = document.getElementById('searchOptions');
const searchByWords = document.getElementById('searchByWords');
const searchByPayment = document.getElementById('searchByPayment');
const searchByDate = document.getElementsByClassName('searchByDate');
const searchButton = document.getElementById('searchButton');
const startDateElement = document.getElementById('startDate');
const endDateElement = document.getElementById('endDate');
const resetButton = document.getElementById('resetButton');
const returnButton = document.getElementById('returnButton');

resetButton.addEventListener('click', () => {
    displayBillList(billList);
});

let typeOfSearch = 'CreatedDate';
searchOptions.addEventListener('change', (event) => {
    typeOfSearch = event.target.value;
    searchByWords.value = '';
    if (event.target.value === 'CreatedDate') {
        searchByWords.style.display = 'none';
        // Loop through each element with the class 'searchField'
        for (const element of searchByDate) {
            element.style.display = 'block';
        }
        searchByPayment.style.display = 'none';
    }
    else if (event.target.value === 'Payment') {
        searchByWords.style.display = 'none';
        // Loop through each element with the class 'searchField'
        for (const element of searchByDate) {
            element.style.display = 'none';
        }
        searchByPayment.style.display = 'block';
    }
    else {
        searchByWords.style.display = 'block';
        // Loop through each element with the class 'searchField'
        for (const element of searchByDate) {
            element.style.display = 'none';
        }
        searchByPayment.style.display = 'none';
    }
});


searchButton.addEventListener('click', () => {
    if (searchOptions.value === 'CreatedDate') {
        const startDate = new Date(startDateElement.value);
        const endDate = new Date(endDateElement.value);
        let billListSearch = [];
        billList.forEach(bill => {
            let createdDate = new Date(bill.createdDate);
            if (createdDate >= startDate && createdDate <= endDate) {
                billListSearch.push(bill);
            }
        });
        displayBillList(billListSearch)
    }
    else if (searchOptions.value === 'Payment') {
        const searchValue = searchByPayment.value;
        let billListSearch = [];
        billList.forEach(bill => {
            if (bill.payment === searchValue) {
                billListSearch.push(bill);
            }
        });
        displayBillList(billListSearch)
    }
    else {
        const searchValue = searchByWords.value;
        let billListSearch = [];
        if (searchOptions.value === 'Price') {
            billList.forEach(bill => {
                if (bill.price.toLowerCase().includes(searchValue.toLowerCase())) {
                    billListSearch.push(bill);
                }
            });
        }
        else if (searchOptions.value === 'Service') {
            billList.forEach(bill => {
                if (bill.service.toLowerCase().includes(searchValue.toLowerCase())) {
                    billListSearch.push(bill);
                }
            });
        }
        
        displayBillList(billListSearch)
    }
});

returnButton.addEventListener('click', () => {
    window.history.back();
});