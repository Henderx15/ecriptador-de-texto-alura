//Codigo Encriptar
function encriptar(str, remplazo) {
  let textoEncriptado = str;
  for (const vocales in remplazo) {
      textoEncriptado = textoEncriptado.split(vocales).join(remplazo[vocales]);
  }
  return textoEncriptado;
}

function botonEncriptar() {
  const img = document.querySelector(".imagen");
  img.style.display = "none";
  const msj = document.querySelector(".mensaje-derecho");
  msj.style.display = "none";
  const input = document.getElementById("input-centro");
  const textoEncriptado = encriptar(input.value, {
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat"
  });
  document.getElementById("input-derecho").value = textoEncriptado;
  
}

//Codigo Desencriptar

function desencriptar(str, remplazo) {
  let textoEncriptado = str;
  for (const palabrasClaves in remplazo) {
      const vocales = remplazo[palabrasClaves];
      textoEncriptado = textoEncriptado.split(palabrasClaves).join(vocales);
  }
  return textoEncriptado;
}

function botonDesencriptar() {
  const img = document.querySelector(".imagen");
  img.style.display = "none";
  const msj = document.querySelector(".mensaje-derecho");
  msj.style.display = "none";
  const input = document.getElementById("input-centro");
  const textoEncriptado = desencriptar(input.value, {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
  });
  document.getElementById("input-derecho").value = textoEncriptado;
}

//boton copiar

function botonCopiar() {
  const contenido = document.getElementById("input-derecho").value;
  navigator.clipboard.writeText(contenido)
  
}