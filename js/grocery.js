// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    // Genero una variable amb la part generica del id del h5 i el variant id de la funcio
    let idProduct = "btn" + id

    //Genero la variable product agafant el contingut del h5 corresponent al boto amb la variable idProduct
    let product = document.getElementById(idProduct).innerHTML;

    // genero una variable index inicialitzada a -1 per si no ho troba
    let index = -1

    for (let i=0; i < products.length; i++) {
        if (products[i].name == product) {
            index = i;
            break;
        }
    }

    let cartProduct = products[index];
    
    return cartList.push(cartProduct);

}

// Exercise 2
function cleanCart() {

    return cartList = [];

}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes


    for (let i=0; i<cartList.length; i++) {
        if (cartList[i].type == 'grocery') {
            subtotal.grocery.value += cartList[i].price;
        } else if (cartList[i].type == 'beauty') {
            subtotal.beauty.value += cartList[i].price;
        } else if (cartList[i].type == 'clothes') {
            subtotal.clothes.value += cartList[i].price;
        }
    }
    
    return subtotal;

}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array

    

    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }

    return total;
    
}

// Exercise 5
function applyPromotionsSubtotals() {

    let comptadorOli = 0;
    let comptadorMescles = 0;
    let descompteOli = 0;
    let descompteMescles = 0;
    let preuMescles = 0
    let totalAmbDescomptes = 0

    for (let i=0; i < cartList.length; i++) {
        if (cartList[i].name == 'cooking oil') {
            comptadorOli += 1;
        } else if (cartList[i].name == 'Instant cupcake mixture') {
            comptadorMescles += 1;
        }
    }
    if (comptadorOli > 3) {
        descompteOli = 0.5;
    } 

    if (comptadorMescles > 10) {
        for (let i=0; i< products.length; i++) {
            if (products[i].name == 'Instant cupcake mixture') {
                preuMescles = products[i].price;
            }
        }
        descompteMescles = preuMescles/3;
    }

    let descompteTotal = descompteOli * comptadorOli + descompteMescles * comptadorMescles;

    totalAmbDescomptes = calculateTotal() - descompteTotal;
    
    return totalAmbDescomptes;


}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
let index = -1


    for (let i=0; i < cartList.length; i++) {
       for (let j=0; j <cart.length; j++) {
           if (cartList[i].name == cart[j].name) {
               index = j;
               break;
           } 
       }
       if (index < 0) {
            cartList[i].quantity = 1;
            cartList[i].subtotalWithDiscount = 0;
            cart.push(cartList[i]);
       } else {
           cart[index].quantity += 1;
           index = -1;
       }
       cartList[i].subtotal = cartList[i].price * cartList[i].quantity;
    }

    return cart;


}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    generateCart();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == 'cooking oil') {
            if (cart[i].quantity > 3 ) {
                cart[i].subtotalWithDiscount = cart[i].subtotal - cart[i].quantity * 0.5;
            }
        } else if (cart[i].name == 'Instant cupcake mixture') {
            if (cart[i].quantity > 10 ) {
                cart[i].subtotalWithDiscount = cart[i].subtotal - cart[i].quantity * (cart[i].price/3);
            }
        }
    
    }
    console.log(cartList)
    console.log(cart);
    return cart;
    
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    // Genero una variable amb la part generica del id del h5 i el variant id de la funcio
    let idProduct = "btn" + id

    //Genero la variable product agafant el contingut del h5 corresponent al boto amb la variable idProduct
    let product = document.getElementById(idProduct).innerHTML;

    // genero una variable index inicialitzada a -1 per si no ho troba
    let index = -1

    for (let i=0; i < products.length; i++) {
        if (products[i].name == product) {
            index = i;
            break;
        }
    }

    let indexCart = -1

    for (let j=0; j <cart.length; j++) {
        if (products[index].name == cart[j].name) {
            indexCart = j;
            break;
        } 
        
    }
    
    if (indexCart < 0) {
        products[index].quantity = 1;
        products[index].subtotalWithDiscount = 0;
        products[index].subtotal = products[index].price * products[index].quantity
        cart.push(products[index]);
    } else {
        cart[indexCart].quantity += 1;
        cart[indexCart].subtotal = cart[indexCart].price * cart[indexCart].quantity 
        indexCart = -1;
        
    }
    
    console.log(cart)
    return cart;

}

// Exercise 10
function removeFromCart(id) {

    let idProduct = "btn" + id

    let product = document.getElementById(idProduct).innerHTML;

    let index = -1

    for (let i=0; i < products.length; i++) {
        if (products[i].name == product) {
            index = i;
            break;
        }
    }

    let indexCart = -1

    for (let j=0; j <cart.length; j++) {
        if (products[index].name == cart[j].name) {
            indexCart = j;
            break;
        } 
        
    }

    if (indexCart < 0) {
        console.log ('Aquest producte no està al carro')
    } else {
        if (cart[indexCart].quantity == 1) {
            cart.splice(indexCart,1);
        } else {
            cart[indexCart].quantity -= 1
            products[index].subtotal = products[index].price * products[index].quantity
        }
    }
    
    console.log(cart)
    return cart;
}



// Exercise 11
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    for(i = 0; i < cart.length; i++) {
        let li = document.createElement("li");
        li.textContent = cart[i].quantity + " " + cart[i].name;
        let list = document.querySelector(".list");
        list.insertAdjacentElement("afterbegin", li);   

    }
}