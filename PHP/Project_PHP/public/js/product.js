function addProduct(event) {

    event.preventDefault();
    event.stopPropagation();

    let request = new XMLHttpRequest();
    request.open("POST", "/Project_PHP/action");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onload = function () {
        if (request.status >= 200 && request.status <= 300) {
            if (request.getResponseHeader("Content-Type") === "application/json") {
                let response_data = JSON.parse(request.response);
                if (response_data.url !== undefined) {
                    alert("Adding to cart successfully");
                    window.location = response_data.url;
                }
            }
        }
        else if (request.status >= 400 && request.status < 600) {
            let response_data = JSON.parse(request.response);
            let message = response_data.errorMessage;
            let prev = response_data.previous;
            while (prev !== null) {
                message += "\n"+ prev.errorMessage;
                prev = prev.previous;
            }
            alert("Error: " + message);
            window.location.reload();
        }
        else {
            let response_data = JSON.parse(request.response);
            let message = response_data.errorMessage;
            let prev = response_data.previous;
            while (prev !== null) {
                message += "\n"+ prev.errorMessage;
                prev = prev.previous;
            }
            alert("Error: " + message);
            window.location.reload();
        }
    };
    request.onerror = function () {
        alert("Network Error");
        window.location.reload();
    }
    let formData = new FormData(event.target)
    let raw_data = new URLSearchParams(formData);
    request.send(raw_data);
}

document.getElementById("productDetail").onsubmit = addProduct;


