const arr = document.querySelectorAll("div")

arr.forEach(ele => {
    ele.addEventListener("click",function(e){
        document.querySelector("body").style.backgroundColor = e.target.innerText
    })
})