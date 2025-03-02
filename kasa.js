var products = {
    'Lemon': 10,
    'Apple': 5,
    'Bread': 19,
    'Cake': 100,
}

var H;
var totalPrice = 0;
$('#L').click(()=>{
    $('body').append('<p>'+'Lemon'+'</p>')
    totalPrice = totalPrice + products['Lemon']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#A').click(()=>{
    $('body').append('<p>'+'Apple'+'</p>')
    totalPrice = totalPrice + products['Apple']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#B').click(()=>{
    $('body').append('<p>'+'Bread'+'</p>')
    totalPrice = totalPrice + products['Bread']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#C').click(()=>{
    $('body').append('<p>'+'Cake'+'</p>')
    totalPrice = totalPrice + products['Cake']
    $('#total-price').text('Total price: ' + totalPrice)
})
$('#complete').click(()=>{
H = prompt('Total price: ' + totalPrice + ". How many you give me?\nExample: '40', '20, '50'")
var surrender = H-totalPrice
if (H >= totalPrice) {
    alert('Your rest is: ' + surrender)
    $('body > *').remove()
    $('body').append('<h1 id= "TF">'+"Thank's for buying our products"+'</h1>')
    $('body').append('<img id = "baloons" src = "./images/baloons.png">')
} else{
    alert('Not enough money')

}
})
