let cars=document.getElementsByClassName("cars")
let close=document.getElementById("close")
let colorname=document.getElementById("colorname")
let colors=["grey","white","blue","red"]
let modal=document.getElementsByClassName("modal")[0]
let modalimage=document.getElementById("modalimage")
for (let index = 0; index < cars.length; index++) {
    cars[index].addEventListener("click",function(){
        colorname.textContent=colors[index]
        modalimage.src=cars[index].src
        modal.style.display="flex"
    })
    close.addEventListener("click",function(){
        modal.style.display="none"

    })
}