const toBar = document.querySelector(".tobar")


window.addEventListener("scroll", () =>{
    if (window.scroll > 0){
        toBar.classList.add(".transparent")
    }

    else {
        toBar.classList.remove("transparent")
    }

} )


// Nueva variables para cambiar el tamaño del topbar


let topbarHeight = toBar.offsetHeight 

const mainContent = document.querySelector(".main-content")

mainContent.style.paddingTop = `${topbarHeight + 20}px` 




// Boton para darle al pley xd 


const containerConsentaccion = document.querySelectorAll (".card-consentaccion")
const containerSpotifyPlaylists = document.querySelectorAll (".card-Spotify-playlists")


// La Funcion para repartir 


const createButtton = card => {
    const button = document. createElement("Button")

    button.innerHTML= = `<i class="fa-solid fa-play"></i>`

    

}

