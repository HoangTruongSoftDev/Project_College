

window.onload = function () {
    var getBillingAddressForm = document.getElementById("getBillingAddressForm");
    if (getBillingAddressForm) {
        getBillingAddressForm.onclick = getBillingFormFunc;
    }
    var getShoppingCartForm = document.getElementById("getShoppingCartForm");
    if (getShoppingCartForm) {
        getShoppingCartForm.onclick = getShoppingCartFormFunc;
    }
    var getShippingAddressForm = document.getElementById("getShippingAddressForm");
    if (getShippingAddressForm) {
        getShippingAddressForm.onclick = getShippingAddressFormFunc;
    }
    var getSummaryOrder = document.getElementById("getSummaryOrder");
    if (getSummaryOrder) {
        getSummaryOrder.onclick = getSummaryOrderFunc;
    }
    var getShippingAddressFormAndSubmitBillingAddress = document.getElementById("reviewBillingAddress");
    if (getShippingAddressFormAndSubmitBillingAddress) {
        getShippingAddressFormAndSubmitBillingAddress.onsubmit = getShippingAddressFormAndSubmitBillingAddressFunc;
    }
    var getSummaryOrderFormAndSubmitShippingAddress = document.getElementById("reviewShippingAddress");
    if (getSummaryOrderFormAndSubmitShippingAddress) {
        getSummaryOrderFormAndSubmitShippingAddress.onsubmit = getSummaryOrderFormAndSubmitShippingAddressFunc;
    }
    var loginUser = document.getElementById("loginForm");
    if (loginUser) {
        loginUser.onsubmit = loginUserFunc;
    }
    var placeOrder = document.getElementById("placeOrder");
    if (placeOrder) {
        placeOrder.onclick = placeOrderFunc;
    }
    var cancel = document.getElementById("cancel");
    if (cancel) {
        cancel.onclick = cancelFunc;
    }
}
function cancelFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=cancelReviewOrder";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest.status > 300) {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let errorResponse = JSON.parse(xmlHttpRequest.response);
                let message = errorResponse.errorMessage;
                let previous = errorResponse.previous;
                while (previous != null) {
                    message += "\n" + previous.errorMessage;
                    previous = previous.previous;
                }
                alert(message);
                
            }
            window.location.onload();
        }
        else {
            alert("Cancel Review Order");
            window.location = "/Project_PHP/shoppingCart";
        }
    }
    xmlHttpRequest.send()
}
function placeOrderFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=placeOrder";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest.status > 300) {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let errorResponse = JSON.parse(xmlHttpRequest.response);
                let message = errorResponse.errorMessage;
                let previous = errorResponse.previous;
                while (previous != null) {
                    message += "\n" + previous.errorMessage;
                    previous = previous.previous;
                }
                alert(message);
                window.location.reload();
            }
        }
        else {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let response = JSON.parse(xmlHttpRequest.response);
                if (response.redirect !== undefined) {
                    alert("Place Order Successfully");
                    window.location = response.redirect;
                }
                else {
                    alert("Error: " + response.response);
                }
            }
        }
        
    }
    xmlHttpRequest.send()
}
function loginUserFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=login&page=order";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest.status > 300) {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let errorResponse = JSON.parse(xmlHttpRequest.response);
                let message = errorResponse.errorMessage;
                let previous = errorResponse.previous;
                while (previous != null) {
                    message += "\n" + previous.errorMessage;
                    previous = previous.previous;
                }
                alert(message);
            }
        }
        else {
            alert("Verify User Sucessfully");
        }
        window.location.reload();
    }
    let formData = new FormData(event.target);
    xmlHttpRequest.send(new URLSearchParams(formData));
}
function getSummaryOrderFormAndSubmitShippingAddressFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=getSummaryOrderFormAndSubmitShippingAddress";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest.status > 300) {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let errorResponse = JSON.parse(xmlHttpRequest.response);
                let message = errorResponse.errorMessage;
                let previous = errorResponse.previous;
                while (previous != null) {
                    message += "\n" + previous.errorMessage;
                    previous = previous.previous;
                }
                alert(message);
            }
        }
        window.location.reload();
    }
    let formData = new FormData(event.target);
    xmlHttpRequest.send(new URLSearchParams(formData));
}
function getShippingAddressFormAndSubmitBillingAddressFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=getShippingAddressFormAndSubmitBillingAddress";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest.status > 300) {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let errorResponse = JSON.parse(xmlHttpRequest.response);
                let message = errorResponse.errorMessage;
                let previous = errorResponse.previous;
                while (previous != null) {
                    message += "\n" + previous.errorMessage;
                    previous = previous.previous;
                }
                alert(message);
            }
        }
        window.location.reload();
    }
    let formData = new FormData(event.target);
    xmlHttpRequest.send(new URLSearchParams(formData));
}
function getSummaryOrderFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=getSummaryOrderForm";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        window.location.reload();
    }
    xmlHttpRequest.send();
}
function getBillingFormFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=getBillingAddressForm";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        window.location.reload();
    }
    xmlHttpRequest.send();
}
function getShoppingCartFormFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=getShoppingCartForm";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
       window.location.reload();
    }
    xmlHttpRequest.send();
}
function getShippingAddressFormFunc(event) {
    event.preventDefault();
    event.stopPropagation();
    let url = "/Project_PHP/action?action=getShippingAddressForm";
    let xmlHttpRequest= new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        window.location.reload();
    }
    xmlHttpRequest.send();
}
