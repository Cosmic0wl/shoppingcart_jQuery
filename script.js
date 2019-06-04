$(document).ready(function() {
    // prints from JSON
    for (let i = 0; i < products.length; i++) {
        var obj = products;
        var myImage = $('<img src=' + obj[i].image + '>');
        var imgDiv = $(".img");
        $(imgDiv[i]).append(myImage);
        var myText = $('<h3>' + obj[i].name + '</h3>' + '<p>' + obj[i].price + '$</p>');
        var textDiv = $(".text");
        $(textDiv[i]).append(myText);
    }
    // end of loop
    // cart and button 

    var cart = [];
    var btn = $(".button");
    for (let i = 0; i < btn.length; i++) {
        $(btn[i]).click(function() {
            btnAdd(obj[i], i);
            sum(cart);
        });
    }

    //ALL FUNCTIONS
    function btnAdd(product, i) {
        //if this product already exists then add +1 to its quantity
        if (cart[i] != undefined) {
            // cart[i].quantity++;
            cart[i] = product;
        } else {
            cart[i] = product;
        }
        rewriteCart();
    }

    //overwrites previous cart 
    function rewriteCart() {
        var bought = $("#bought");
        $(bought).html("");
        console.log(bought);
        for (let j = 0; j < cart.length; j++) {
            if (cart[j] != undefined) {
                var item = $("<p>" + cart[j].name + "</p>" + "<p>" + cart[j].quantity + "</p>" + "<button class='plus'>+</button>" + "<button class='minus'>-</button>" + "<p>" + cart[j].price * cart[j].quantity + "</p>" + "<button class='delete'>x</button>");
                $("#bought").append(item);
            }
        }
        //takes all minus buttons in the array and applies the remove from cart function to each one of them, if the item exists
        var k = 0;
        var minusButtons = $(".minus");
        for (let j = 0; j < cart.length; j++) {
            if (cart[j] != undefined) {
                $(minusButtons[k]).click(function() {
                    removeFromCart(j);
                });
                k++;
            }
        }

        var h = 0;
        var deleteButtons = $(".delete");
        for (let j = 0; j < cart.length; j++) {
            if (cart[j] != undefined) {
                $(deleteButtons[h]).click(function() {
                    deleteFromCart(j);
                });
                h++;
            }
        }

        var l = 0;
        var plusButtons = $(".plus");
        for (let j = 0; j < cart.length; j++) {
            if (cart[j] != undefined) {
                $(plusButtons[l]).click(function() {
                    addQuantity(j);
                });
                l++;
            }
        }

    }
    // if quantity is less or equal to 0 the item does note exist
    function deleteFromCart(i) {
        cart[i] = undefined;
        rewriteCart(); //overwrites cart
        sum(cart); // overwrites sum
    }

    function removeFromCart(i) {
        if (cart[i].quantity > 1) {
            cart[i].quantity--;
        }
        rewriteCart(); //overwrites cart
        sum(cart); // overwrites sum
    }

    function addQuantity(i) {
        cart[i].quantity++;
        rewriteCart(); //overwrites cart
        sum(cart); // overwrites sum
    }

    function sum(currentCart) {
        var total = 0;
        var shipping = 0;

        for (let j = 0; j < currentCart.length; j++) {
            if (currentCart[j] != undefined) {
                total += currentCart[j].price * currentCart[j].quantity;
                //calculate shipping                       
                if (total <= 80) {
                    shipping = total + 9;
                } else if (total >= 80) {
                    shipping = total + 6;
                }
            }
        }

        $("#total").html("<p>" + total.toFixed(2) + "</p>" + "<p>And with shipping: " + shipping + "</p>");

    }


});