function parseCart() {
    var cart = $('#cartin').val();
    console.info("Parsing %s", cart);
    var parts = cart.split(",");
    console.log("Length is %d", parts.length);
    if (parts.length < 2) {
        throw "Can't parse cart with length < 2!";
    }
    console.warn("Cart is %o", cart.split(","));
};

function checkout() {
    window.setTimeout(function() {
            console.log("check out clicked!");
            $.ajax({
                    url: "getcheckout.json",
                    dataType: "json"
                }).done(function(data) {
                    console.log("Checked out: %o", data);
                    confirm();
                });
        }, 2000);
};

function confirm() {
    $.ajax({
            url: "confirm.php"
        });
    throw "internal server error on confirm!";
};
