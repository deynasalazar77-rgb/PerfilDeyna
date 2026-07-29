const formulario = document.getElementById("formUsuario");
const tbody = document.getElementById("tbodyUsuarios");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let editado = false;
let idEditar = null;

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = {
    id: Date.now(),
    nombre: document.getElementById("nombre").value.trim(),
    apellido: document.getElementById("apellido").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    edad: document.getElementById("edad").value,
    genero: document.getElementById("genero").value,
    direccion: document.getElementById("direccion").value.trim(),
  };

  if (
    usuario.nombre === "" ||
    usuario.apellido === "" ||
    usuario.correo === ""
  ) {
    alert("Completa los datos obligatorios");
    return;
  }

  if (editado) {
    const indice = usuarios.findIndex((u) => u.id === idEditar);

    if (indice !== -1) {
      usuario.id = idEditar;
      usuarios[indice] = usuario;
    }

    editado = false;
    idEditar = null;
  } else {
    const existe = usuarios.some(
      (u) => u.correo.toLowerCase() === usuario.correo.toLowerCase()
    );

    if (existe) {
      alert("El correo ya existe");
      return;
    }

    usuarios.push(usuario);
  }

  guardarLocalStorage();
  mostrarUsuarios();
  formulario.reset();
});

function guardarLocalStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function mostrarUsuarios() {
  tbody.innerHTML = "";

  usuarios.forEach((u) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${u.id}</td>
      <td>${u.nombre}</td>
      <td>${u.apellido}</td>
      <td>${u.correo}</td>
      <td>${u.telefono}</td>
      <td>${u.edad}</td>
      <td>${u.genero}</td>
      <td>${u.direccion}</td>
      <td>
        <button onclick="editarUsuario(${u.id})">Editar</button>
        <button onclick="eliminarUsuario(${u.id})">Eliminar</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}


function eliminarUsuario(id) {
  const confirmar = confirm("¿Seguro que quieres eliminar?");
  if (!confirmar) return;

  usuarios = usuarios.filter((u) => u.id !== id);

  guardarLocalStorage();
  mostrarUsuarios();
}

function editarUsuario(id) {
  const usuario = usuarios.find((u) => u.id === id);

  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("apellido").value = usuario.apellido;
  document.getElementById("correo").value = usuario.correo;
  document.getElementById("telefono").value = usuario.telefono;
  document.getElementById("edad").value = usuario.edad;
  document.getElementById("genero").value = usuario.genero;
  document.getElementById("direccion").value = usuario.direccion;

  editado = true;
  idEditar = id;
}

mostrarUsuarios();