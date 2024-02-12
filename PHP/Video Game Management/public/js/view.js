

function updateEntity(event) {
    // TODO: complete this function by implementing an AJAX call to modify an existing video game
    event.preventDefault();
    event.stopPropagation();
    let url = API_ENDPOINT_URL + "?action=edit";
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest.status > 300) {
            alert("Cannot Update the Game: " + xmlHttpRequest.response);
            window.location.reload();
        }
        else {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let response_data = JSON.parse(xmlHttpRequest.response);
                if (response_data.redirect !== undefined) {
                    alert("Updating the Game Successfully!");
                    window.location = response_data.redirect;
                }
                else {
                    alert("Response: " + xmlHttpRequest.response);
                    window.location.reload();
                }
            }
            else {
                alert("Response: " + xmlHttpRequest.response);
                window.location.reload();
            }
        }
    }
    xmlHttpRequest.onerror = function () {
        alert("There is some error with network");
    }
    let dataForm = new FormData(event.target);
    xmlHttpRequest.send(new URLSearchParams(dataForm));
}

function deleteEntity(event) {
    // TODO: complete this function by implementing an AJAX call to delete an existing video game
    event.preventDefault();
    event.stopPropagation();
    let url = API_ENDPOINT_URL + "?action=delete";
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest > 300) {
            alert("Cannot Delete the Game: " + xmlHttpRequest.response);
            window.location.reload();
        }
        else {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let response_data = JSON.parse(xmlHttpRequest.response)
                if (response_data.redirect !== undefined) {
                    alert("Deleting the Game Successfully!");
                    window.location = response_data.redirect;
                }
                else {
                    alert("Response: " + xmlHttpRequest.response);
                    window.location.reload();
                }
            }
            else {
                alert("Response: " + xmlHttpRequest.response);
                window.location.reload();
            }
        }
    }
    xmlHttpRequest.onerror = function () {
        alert("There is some error with network");
    }
    let dataForm = new FormData(event.target);
    xmlHttpRequest.send(new URLSearchParams(dataForm));
}


// TODO: complete the instructions below to attach the above functions as event handlers of your HTML forms.
document.getElementById("updateGameForm").onsubmit = updateEntity;
document.getElementById("deleteGameForm").onsubmit = deleteEntity;