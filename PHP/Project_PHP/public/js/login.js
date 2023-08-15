
function logIn(event) {
    
    event.preventDefault();
    event.stopPropagation();
    
    let loginForm =  $("#loginForm");
    $.post("/Project_PHP/action?page=login", loginForm.serialize())
        .always(function (response, textStatus, jqXHR) {
            console.log("always");
            console.log("response: " + response);
            console.log("textStatus: " + textStatus);
            console.log("jqXHR: " + jqXHR);
        })
        .done(function (data, status, jqXHR) {
            console.log("Successfully");
            console.log("DATA: " + data);
            console.log("STATUS: " +status);
            console.log("JQXHR: " +jqXHR);
            if (jqXHR.responseJSON !== undefined) {
                    // success
                    alert("Login successful!");
                    window.location = jqXHR.responseJSON.redirectTo;
            }
            else {
                alert(jqXHR.responseJSON);
            }
            
        })
        .fail(function(jqXHR, status, error){
            console.log("Fail");
            console.log("The text error is: " + jqXHR.responseText);
            console.log(jqXHR.responseJSON);
            console.log(status);
            console.log(error);
            let message = jqXHR.responseJSON.errorMessage;
            let prev = jqXHR.responseJSON.previous;
            while (prev !== null) {
                message += "\n"+ prev.errorMessage;
                prev = prev.previous;
            }
            // error
            if (jqXHR.status == 400) {
                alert("Login failed: user not found. The reason is: " + message);
                $("#username").val("");
                $("#passwordHash").val("");
            }
            else if (jqXHR.status == 401) {
                alert("Login failed: Invalid password. The reason is: " + message);
                $("#passwordHash").val("");
            }
            else {
                alert("Some error!!! The reason is: " + message);
                $("#username").val("");
                $("#passwordHash").val("");
            }
            
        });
}


function gotoRegisterPage(){
    window.location = "/Project_PHP/register";
}

window.onload = function() {
    document.getElementById("redirectRegister").onclick = gotoRegisterPage;
    document.getElementById("loginForm").onsubmit = logIn;
}
