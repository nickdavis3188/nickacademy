var home = document.querySelector(".ll1")
var product = document.querySelector(".lll")
var blog  = document.querySelector(".ll3")
var about = document.querySelector(".ll4")
var contact = document.querySelector(".ll5")

home.addEventListener("click",function(e){
    console.log(e)
    if(product.classList.contains("active") || blog.classList.contains("active") || about.classList.contains("active") || contact.classList.contains("active")){
        product.classList.remove("active")
        blog.classList.remove("active")
        about.classList.remove("active")
        contact.classList.remove("active")
        home.classList.add("active")
    }
});

product.addEventListener("click",function(e){
    console.log(e)
    if(home.classList.contains("active") || blog.classList.contains("active") || about.classList.contains("active") || contact.classList.contains("active")){
        home.classList.remove("active")
        blog.classList.remove("active")
        about.classList.remove("active")
        contact.classList.remove("active")
        product.classList.add("active")
    }
});

blog.addEventListener("click",function(e){
    console.log(e)
   if(product.classList.contains("active") || home.classList.contains("active") || about.classList.contains("active") || contact.classList.contains("active")){
    product.classList.remove("active")
    home.classList.remove("active")
    about.classList.remove("active")
    contact.classList.remove("active")
    blog.classList.add("active")
}
});

about.addEventListener("click",function(e){  
    console.log(e)
   if(product.classList.contains("active") || blog.classList.contains("active") || home.classList.contains("active") || contact.classList.contains("active")){
    product.classList.remove("active")
    blog.classList.remove("active")
    home.classList.remove("active")
    contact.classList.remove("active")
    about.classList.add("active")
}
});

contact.addEventListener("click",function(e){
    console.log(e)
    if(product.classList.contains("active") || blog.classList.contains("active") || about.classList.contains("active") || home.classList.contains("active")){
        product.classList.remove("active")
        blog.classList.remove("active")
        about.classList.remove("active")
        home.classList.remove("active")
        contact.classList.add("active")
    }
});

