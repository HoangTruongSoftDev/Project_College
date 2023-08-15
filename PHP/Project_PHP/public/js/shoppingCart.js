function updateCart(event) {
    event.preventDefault();
    event.stopPropagation();
    let shoppingCart = $("#shoppingCart");
    $.post("/Project_PHP/action", shoppingCart.serialize())
        .done(function (data,status, jqXHR) {
            console.log("DATA: " + data);
            console.log("STATUS: " + status);
            console.log("JQXHR: " + jqXHR);
            alert("Updating to cart successfully");
            window.location = "/Project_PHP/shoppingCart";
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
            
            alert("Can't update product in cart. The reason is: " + message);
            window.location = "/Project_PHP/products";
        })
}

function deleteProduct(deleteProductId, event) {
    event.preventDefault();
    event.stopPropagation();
    let shoppingCart = $("#shoppingCart");
    $.post("/Project_PHP/shoppingCart/deleteProduct?deleteProductId="+deleteProductId, shoppingCart.serialize())
        .done(function (data,status, jqXHR) {
            console.log("DATA: " + data);
            console.log("STATUS: " + status);
            console.log("JQXHR: " + jqXHR);
            alert("Deleting product from cart successfully");
            window.location = "/Project_PHP/shoppingCart";
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
            
            alert("Can't delete product in cart. The reason is: " + message);
            window.location = "/Project_PHP/shoppingCart";
        })
}


function checkOut(event) {
    event.preventDefault();
    event.stopPropagation();
    window.location = "/Project_PHP/order/review";
    
    
}
window.onload = function () {
    let shoppingCartForm = document.getElementById("shoppingCart");
    if (shoppingCartForm) {
        document.getElementById("shoppingCart").onsubmit = updateCart;
    }
    document.getElementById("subTotalForm").onsubmit= checkOut;
};

