const apiKey = 'CP2oNqakD8LfQX8T0I3EKhqW77ZbLxqD9maT7QR5iE0';
const keyword = 'sports shoes'; // aqui modifica el nombre de lo que quieras  que salga en las fotos

const unsplashApiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${keyword}`; //y aqui pon el nombre de la variable

function loadRandomUnsplashImage() {
    fetch(unsplashApiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            const unsplashImage = document.getElementById('unsplash-image-src');
            unsplashImage.src = imageUrl;
        })
        .catch(error => console.error('Error:', error));
}

const loadButton = document.getElementById('load-unsplash-image');
loadButton.addEventListener('click', loadRandomUnsplashImage);

window.addEventListener('load', loadRandomUnsplashImage);

/* - Boton inicio - */
const inicio = document.querySelector('.navbar-brand');

inicio.addEventListener('click',()=>{
    alert('Bienvenido a la pagina de New Balance')
});

/* - Modal - */

// Ventana modal
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
    modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
    modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/* Acordeon */
const acordeon = document.querySelector('.acordeon-contenido');
const acordeonItem = document.querySelector('.acordeon_item')
let height=0;

acordeonItem.addEventListener('click',()=>{
   if (!height){
       height=acordeon.scrollHeight;
   }else {
       height=0;
   }

   acordeon.style.height= `${height}px`;
});

/* Boton */

let botones = document.querySelectorAll('.boton');

for (var i=0; i<botones.length;i++){
    botones[i].addEventListener("click", (e)=>{
        e.preventDefault();
        let overlay = document.createElement('span');
        overlay.classList.add("overlay");

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        overlay.style.left = x + "px";
        overlay.style.top = y + "px";

        e.target.appendChild(overlay);

        setTimeout(()=>{
            overlay.remove();
        }, 500);

    });
}

