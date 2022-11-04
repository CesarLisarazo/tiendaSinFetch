



let items = [
  {
    id:1,
    name: "Miamee",
    price: 1050,
    image: "https://www.infobae.com/new-resizer/XIdojdoXUpe9UT8473cqYW5Liio=/992x1323/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/11/24125443/25-remera-275.jpg"
  
  },

  {
    id:2,
    name: "Remera presidencial",
    price: 1250,
    image: "https://d22fxaf9t8d39k.cloudfront.net/3e4d3b27059c69715bbc8878bdc5b916dfd09de4e01d77eadb5ea963dc49079352616.png"
  },
  {
    id:3,
    name: "La loooz",
    price: 1180,
    image:"https://www.infobae.com/new-resizer/E2nr8vr8rVnv2Xxf_KXn9LhFoDk=/992x992/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/11/24125346/11-remera-250-pe.jpg"
  },
  {
    id:4,
    name: "Medias presidenciales",
    price: 700,
    image: "https://www.infobae.com/new-resizer/FI9wyedFzVls7sDF2mUGlewCjW0=/992x992/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/11/24125259/1-medias-100-pe.jpg"
  },
]


document.addEventListener('DOMContentLoaded',() =>
{
cart=JSON.parse(localStorage.getItem('carrito'))  
renderCart()
})


let cart = [] 
let list = document.getElementById('lista')
let ClearCart = document.getElementById('ClearCart')




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
let cartItems = document.getElementById('carrito')
let total = 0; 
cartItems.innerHTML = ''
cart.forEach((item)=>
{
  total+= item.price * item.quantity
  cartItems.innerHTML += `<li>
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


