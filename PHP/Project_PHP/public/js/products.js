function addToCart(event) {
    event.preventDefault();
    event.stopPropagation();
    let shoppingCart = $("#listOfProducts");
    $.post("/Project_PHP/action", shoppingCart.serialize())
        .done(function (data,status, jqXHR) {
            console.log("DATA: " + data);
            console.log("STATUS: " + status);
            console.log("JQXHR: " + jqXHR);
            alert("Adding to cart successfully");
            window.location = "/Project_PHP/products";
        })
        .fail(function (jqXHR, status, error) {
            console.log("JQXHR: " + jqXHR);
            console.log("STATUS: " + status);
            console.log("ERROR: " + error);
            let message = jqXHR.responseJSON.errorMessage;
            let prev = jqXHR.responseJSON.previous;
            while (prev !== null) {
                message += "\n"+ prev.errorMessage;
                prev = prev.previous;
            }
            // error
            
            alert("Can't add product to cart. The reason is: " + message);
            window.location = "/Project_PHP/products";
        })
}

window.onload = function () {
    document.getElementById("listOfProducts").onsubmit = addToCart;
};