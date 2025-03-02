var products = {
    'Lemon': 10,
    'Apple': 5,
    'Bread': 19,
    'Cake': 100,
}

var cashVolum;
var totalPrice = 0;
$('#product-option-lemon').click(()=>{
    $('body').append('<p>'+'Lemon'+'</p>')
    totalPrice = totalPrice + products['Lemon']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#product-option-apple').click(()=>{
    $('body').append('<p>'+'Apple'+'</p>')
    totalPrice = totalPrice + products['Apple']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#product-option-bread').click(()=>{
    $('body').append('<p>'+'Bread'+'</p>')
    totalPrice = totalPrice + products['Bread']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#product-option-cake').click(()=>{
    $('body').append('<p>'+'Cake'+'</p>')
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
