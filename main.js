const toBar = document.querySelector(".tobar")


window.addEventListener("scroll", () =>{
    if (window.scroll > 0){
        toBar.classList.add(".transparent")
    }

    else {
        toBar.classList.remove("transparent")
    }

} )


