const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista-contactos");

function mostrarContactos() {
  lista.innerHTML = "";
  const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  for (let c of contactos) {
    const li = document.createElement("li");
    li.textContent = `${c.nombre} (${c.email}) - ${c.destino}: ${c.mensaje}`;
    lista.appendChild(li);
  }
}

formulario.addEventListener("submit", e => {
  e.preventDefault();
  const contacto = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    destino: document.getElementById("destino").value,
    mensaje: document.getElementById("mensaje").value
  };
  const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  contactos.push(contacto);
  localStorage.setItem("contactos", JSON.stringify(contactos));
  formulario.reset();
  mostrarContactos();
});

mostrarContactos();
