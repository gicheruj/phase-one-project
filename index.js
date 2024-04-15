function getProductsInfo(){
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => {
        const products = data;
        console.log(products)
    const bodycream = document.getElementById('bodycream');
    const haircream = document.getElementById('haircream')
    const bag = document.getElementById('Bag')
    bodycream.style.cursor = 'pointer'
    haircream.style.cursor = 'pointer'
    bag.style.cursor = 'pointer'
    bodycream.addEventListener('click', function() {
        document.getElementById('name').textContent = products.bodycream.name
        document.getElementById('size').textContent = products.bodycream.size
        document.getElementById('price').textContent = products.bodycream.price
     }) 
     haircream.addEventListener ('click', function() {
        document.getElementById('name').textContent = products.haircream.name
        document.getElementById('size').textContent = products.haircream.size
        document.getElementById('price').textContent = products.haircream.price 
     })
     bag.addEventListener('click', function() {
        document.getElementById('name').textContent = products.Travelbag.name
        document.getElementById('size').textContent = products.Travelbag.size
        document.getElementById('price').textContent = products.Travelbag.price
     })  
    })
}
getProductsInfo();
      
