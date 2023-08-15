function register(event) {
    
    event.preventDefault();
    event.stopPropagation();
    
    let registerForm = $("#registerForm");
    $.post("/Project_PHP/action", registerForm.serialize())
        .done(function (data, status, jqXHR){
            console.log("Sucess");
            console.log("DATA: " + data);
            console.log("JQXHR: " + jqXHR);
            console.log("STATUS: " + status);
            if (jqXHR.responseJSON !== undefined) {
                alert("Register Successfully");
                window.location = jqXHR.responseJSON.redirectTo;
            }
        }).fail(function (jqXHR, status,error) {
            console.log("Fail");
            console.log("STATUS: " + status);
            console.log("JQXHR: " + jqXHR);
            console.log("ERROR: " + error);
            let message = jqXHR.responseJSON.errorMessage;
            let prev = jqXHR.responseJSON.previous;
            while (prev !== null) {
                message += "\n" + prev.errorMessage;
                prev = prev.previous;
            }
        alert("Register Fail. The reason is: " + message);
        window.location.reload();
    })
}
function gotoLoginPage(){
    window.location = "/Project_PHP/";
}

window.onload = function() {
    document.getElementById("redirectLogin").onclick = gotoLoginPage;
    document.getElementById("registerForm").onsubmit = register;
}