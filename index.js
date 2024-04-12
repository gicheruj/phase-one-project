function getProductsInfo(){
    fetch("http://localhost:3000/products")
    .then (res => res.json())
    .then (data => console.log(data))

    const button = document.getElementById("button");
    button.addEventListener('click', function(){
        console.log( "Body cream",
         "300g",
         "sh. 700",
      
      "Hair cream",
        "200ml",
        "sh. 500",
      
      "Travel bag",
       "sh. 3000",
      
      "Gym bag",
       "sh. 2500"
      )
    })
}