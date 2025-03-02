const products = {
    'Lemon': 10,
    'Apple': 5,
    'Bread': 19,
    'Cake': 100,
}

let cashVolum;
let totalPrice = 0;
$('#product-option-lemon').click(()=>{
    $('#cart-items').append('<li>'+'Lemon'+'</li>')
    totalPrice = totalPrice + products['Lemon']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#product-option-apple').click(()=>{
    $('#cart-items').append('<li>'+'Apple'+'</li>')
    totalPrice = totalPrice + products['Apple']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#product-option-bread').click(()=>{
    $('#cart-items').append('<li>'+'Bread'+'</li>')
    totalPrice = totalPrice + products['Bread']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#product-option-cake').click(()=>{
    $('#cart-items').append('<li>'+'Cake'+'</li>')
    totalPrice = totalPrice + products['Cake']
    $('#total-price').text('Total price: ' + totalPrice)
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
