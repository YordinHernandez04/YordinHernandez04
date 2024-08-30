document.getElementById("btnMenu").addEventListener("click",
  function () {
    let elemento = document.getElementById("navbar");
    if(elemento.classList.contains("navbar")) {
      elemento.classList.remove("navbar");
      elemento.classList.add("no_navbar");
    } else {
      elemento.classList.remove("no_navbar");
      elemento.classList.add("no_navbar");
    }
  });







    const nombre = document.querySelector("#nombre");
    const telefono = document.querySelector("#telefono");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector(".formulario");
    formulario.addEventListener("submit", validaFormulario);
    function validaFormulario(e) {
      e.preventDefault();
      if (
        nombre.value === "" ||
        telefono.value === "" ||
        email.value === "" ||
        mensaje.value === "" 
      ) {
        mostrarError("Todos los campos son obligatorios");
        return;
      }
      alert('Hemos recibido su mensaje');
      formulario.reset(); // Limpia el formulario después del envío
    }
  
    function mostrarError(mensaje) {
      const alerta = document.createElement('p');
      alerta.textContent = mensaje;
      alerta.style.background = "red";
      alerta.style.color = "white";
      alerta.style.padding = "10px";
      alerta.style.marginTop = "10px";
      alerta.style.borderRadius = "5px";
      formulario.appendChild(alerta);
      setTimeout(() => {
        alerta.remove();
      }, 3000); // Elimina el mensaje de error después de 3 segundos
    }
  