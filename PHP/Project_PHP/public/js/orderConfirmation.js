
function cancelOrderFunc(orderId, event) {
            event.preventDefault();
            event.stopPropagation();
            let orderedForm = $("#orderedForm");
            $.post("/Project_PHP/order/confirmation/cancelOrder?cancelOrderId="+orderId, orderedForm.serialize())
                .done(function (data,status, jqXHR) {
                    console.log("DATA: " + data);
                    console.log("STATUS: " + status);
                    console.log("JQXHR: " + jqXHR);
                    alert("Cancel the Order which ID is "+ orderId +" successfully");
                    window.location = "/Project_PHP/order/confirmation";
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
                    
                    alert("Can't cancel the Order. The reason is: " + message);
                    window.location = "/Project_PHP/order/confirmation";
                })
}