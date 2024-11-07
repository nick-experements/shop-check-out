var products = {
    'Lemon': 10,
    'Apple': 5,
    'Bread': 19,
    'Cake': 100,
}

var H;
var AH = 0;
$('#L').click(()=>{
    $('body').append('<p>'+'Lemon'+'</p>')
    AH = AH + products['Lemon']
    $('#AH').text('Total price: ' + AH)
})
$('#A').click(()=>{
    $('body').append('<p>'+'Apple'+'</p>')
    AH = AH + products['Apple']
    $('#AH').text('Total price: ' + AH)
})
$('#B').click(()=>{
    $('body').append('<p>'+'Bread'+'</p>')
    AH = AH + products['Bread']
    $('#AH').text('Total price: ' + AH)
})
$('#C').click(()=>{
    $('body').append('<p>'+'Cake'+'</p>')
    AH = AH + products['Cake']
    $('#AH').text('Total price: ' + AH)
})
$('#TA').click(()=>{
H = prompt('Total price: ' + AH + ". How many you give me?\nExample: '40', '20, '50'")
var surrender = H-AH
if (H >= AH) {
    alert('Your rest is: ' + surrender)
    $('body > *').remove()
    $('body').append('<h1 id= "TF">'+"Thank's for buying our products"+'</h1>')
    $('body').append('<img id = "baloons" src = "./images/baloons.png">')
} else{
    alert('Not enough money')

}
})
