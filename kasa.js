const products = {
    'Lemon': 10,
    'Apple': 5,
    'Bread': 19,
    'Cake': 100,
}

let cashVolum;
let totalPrice = 0;
function addProductToCart(articul, title){
    $('#cart-items').append('<li>'+title+'</li>')
    totalPrice = totalPrice + products[articul]
    $('#total-price').text('Total price: ' + totalPrice)
}
$('#product-option-lemon').click(()=>{
    addProductToCart('Lemon', 'Lemon')
})
$('#product-option-apple').click(()=>{
    addProductToCart('Apple', 'Apple')
})
$('#product-option-bread').click(()=>{
    addProductToCart('Bread', 'Bread')
})
$('#product-option-cake').click(()=>{
    addProductToCart('Cake', 'Cake')
})
$('#complete').click(()=>{
    cashVolum = prompt('Total price: ' + totalPrice + ". How many you give me?\nExample: '40', '20, '50'")
    const rest = cashVolum-totalPrice
    if (cashVolum >= totalPrice) {
        alert('Your rest is: ' + rest)
        $('body > *').remove()
        $('body').append('<h1 id= "thanks">'+"Thank's for buying our products"+'</h1>')
        $('body').append('<img id = "baloons" src = "./images/baloons.png">')
    } else{
        alert('Not enough money')
    }
})
