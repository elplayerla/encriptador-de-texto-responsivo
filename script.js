function validarTexto() {
    var texto = document.getElementsByName("texto")[0].value;
    var regex = /^[a-z ]*$/;
    var error = document.getElementById("error");
    var icono = document.getElementById("icono");
    var advertencia = document.getElementById("advertencia");
  
    if (!regex.test(texto)) {
      error.style.color = "red";
      icono.src = "imagenes/bi_exclamation-circle-fill-red.svg";
      advertencia.style.display = "flex";
      advertencia.classList.add("advertencia-animacion");
      advertencia.style.animationPlayState = "running";
    } else {
      error.style.color = "initial";
      icono.src = "imagenes/bi_exclamation-circle-fill.svg";
      // Detener la animación
      advertencia.classList.remove("advertencia-animacion");
      advertencia.style.animationPlayState = "paused";
    }
}

const container = document.querySelector(".advertencia-y-botones");
const textarea = document.getElementById("texto-entrada");
const image = document.querySelector("img");
const paragraph = document.querySelector("p");

textarea.addEventListener("input", () => {
  const textareaHeight = textarea.offsetHeight;
  const containerHeight = container.offsetHeight;

  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";

  // Actualizar la posición de la imagen y el párrafo
  const imageTop = image.offsetTop;
  const paragraphTop = paragraph.offsetTop;

  const offsetDiff = textareaHeight - containerHeight;
  const imageNewTop = imageTop + offsetDiff;
  const paragraphNewTop = paragraphTop + offsetDiff;

  image.style.top = imageNewTop + "px";
  paragraph.style.top = paragraphNewTop + "px";
});


function encriptar() {
    document.getElementById("area-resultado__elementos-ocultar").style.display = "none";
    document.getElementById("area-resultado").style.display = "inline-block";
    document.getElementById("area-resultado").style.flexDirection = "column-reverse";

    var entrada = document.getElementById("texto-entrada").value;
    // Verificar si la entrada contiene caracteres no permitidos
    var regex = /^[a-z ]+$/;
    if (!regex.test(entrada)) {
        return;
    }

    var resultado = entrada.replace(/e|a|i|o|u/g, function(letra) {
    switch(letra) {
        case 'e':
        return 'enter';
        case 'a':
        return 'ai';
        case 'i':
        return 'imes';
        case 'o':
        return 'ober';
        case 'u':
        return 'ufat';
    }
    });
    document.getElementById("resultado").textContent = resultado;
    
    var miBoton = document.getElementById("copiar");
    miBoton.style.display = "flex";
}

function desencriptar() {
    document.getElementById("area-resultado__elementos-ocultar").style.display = "none";
    document.getElementById("area-resultado").style.display = "inline-block";
    document.getElementById("area-resultado").style.flexDirection = "column-reverse";

    var entrada = document.getElementById("texto-entrada").value;
    var resultado = entrada.replace(/enter|ai|imes|ober|ufat/g, function(letra) {
        switch(letra) {
            case 'enter':
            return 'e';
            case 'ai':
            return 'a';
            case 'imes':
            return 'i';
            case 'ober':
            return 'o';
            case 'ufat':
            return 'u';
        }
    });
    document.getElementById("resultado").textContent = resultado;
    
    var miBoton = document.getElementById("copiar");
    miBoton.style.display = "flex";
}

async function copiar() {
  // Obtener el texto del primer textarea
  var text = document.getElementById("resultado").value;

  // Copiar el texto al portapapeles
  try {
    await navigator.clipboard.writeText(text);
    console.log("Texto copiado al portapapeles");
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
}