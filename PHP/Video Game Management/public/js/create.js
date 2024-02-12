

function createEntity(event) {
    // TODO: complete this function by implementing an AJAX call to create a new video game
    event.preventDefault();
    event.stopPropagation()
    let url = API_ENDPOINT_URL + "?action=create";
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("POST", url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status < 200 || xmlHttpRequest.status > 300) {
            alert("Error of Creating Game: " + xmlHttpRequest.response);
            window.location.reload();
        }
        else {
            if (xmlHttpRequest.getResponseHeader("Content-Type") === "application/json") {
                let response_data = JSON.parse(xmlHttpRequest.response);
                if (response_data.redirect !== undefined) {
                    alert("Creating the Game Successfully");
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
    let dataFrom= new FormData(event.target);
    xmlHttpRequest.send(new URLSearchParams(dataFrom));
}

// TODO: complete the instruction below to attach the function above as the submit event handler of your HTML creation form.
document.getElementById("createGameForm").onsubmit = createEntity;