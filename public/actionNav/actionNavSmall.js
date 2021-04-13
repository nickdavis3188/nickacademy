var home = document.querySelector(".s1")
var product = document.querySelector(".ss")
var blog  = document.querySelector(".s3")
var about = document.querySelector(".s4")
var contact = document.querySelector(".s5")

home.addEventListener("click",function(e){
    if(product.classList.contains("active2") || blog.classList.contains("active2") || about.classList.contains("active2") || contact.classList.contains("active2")){
        product.classList.remove("active2")
        blog.classList.remove("active2")
        about.classList.remove("active2")
        contact.classList.remove("active2")
        home.classList.add("active2")
    }
});

product.addEventListener("click",function(e){
    if(home.classList.contains("active2") || blog.classList.contains("active2") || about.classList.contains("active2") || contact.classList.contains("active2")){
        home.classList.remove("active2")
        blog.classList.remove("active2")
        about.classList.remove("active2")
        contact.classList.remove("active2")
        product.classList.add("active2")
    }
});

blog.addEventListener("click",function(e){
   if(product.classList.contains("active2") || home.classList.contains("active2") || about.classList.contains("active2") || contact.classList.contains("active2")){
    product.classList.remove("active2")
    home.classList.remove("active2")
    about.classList.remove("active2")
    contact.classList.remove("active2")
    blog.classList.add("active2")
}
});

about.addEventListener("click",function(e){
   if(product.classList.contains("active2") || blog.classList.contains("active2") || home.classList.contains("active2") || contact.classList.contains("active2")){
    product.classList.remove("active2")
    blog.classList.remove("active2")
    home.classList.remove("active2")
    contact.classList.remove("active2")
    about.classList.add("active2")
}
});

contact.addEventListener("click",function(e){
    if(product.classList.contains("active2") || blog.classList.contains("active2") || about.classList.contains("active2") || home.classList.contains("active2")){
        product.classList.remove("active2")
        blog.classList.remove("active2")
        about.classList.remove("active2")
        home.classList.remove("active2")
        contact.classList.add("active2")
    }
});

