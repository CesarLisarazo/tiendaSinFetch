
fetch('items.json')
.then(response => response.json())
.then(items =>{console.log(items)})



let cart = [] 
let list = document.getElementById('items')
let ClearCart = document.getElementById('ClearCart')


document.addEventListener('DOMContentLoaded',() =>
{
  cart=JSON.parse(localStorage.getItem('carrito'))  
  renderCart()
})


ClearCart.addEventListener('click', ()=> { 
cart.length=[]
renderCart()
saveCart()
})


items.forEach((item,i)=>{
    list.innerHTML += `<li>
        <div> ${item.name}</div>
        <div>Precio: $${item.price}</div>
        <image src="${item.image}" />
        <input type="number" placeholder="Cantidad" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")'/>
        <button>Agregar al carrito</button>
    </li>`
})


function renderCart() 
{ 
  let carritoItems = document.getElementById('carrito')
  let total = 0; 
  carritoItems.innerHTML = ''
  cart.forEach((item)=>
  {
    total+= item.price * item.quantity
    carritoItems.innerHTML += `<li>
    <div>${item.name}</div>
    <div>Cantidad: ${item.quantity}</div>
    <image src="${item.image}" />
    </li>`
  })
  document.getElementById('total').innerHTML = '$' +total
}


function inputChange(i, name, price,image) {
    let listItem = document.querySelectorAll('li')[i]
    let input = listItem.querySelector('input')
    let button = listItem.querySelector('button')

    if(input.value <1)
 {
  input.value =1
  swal(" ", "Debes agregar al menos 1", "error");
 }

else
{

  button.onclick = function(){
  cart.push({
  quantity: input.value,
  name: name,
  price: price,
  image: image
})        
  renderCart()
  saveCart()
}}}


function saveCart()
{
  localStorage.setItem(`carrito`, JSON.stringify(cart))
} 

