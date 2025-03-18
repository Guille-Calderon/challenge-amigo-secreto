// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); // Elimina los espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Convertimos todos los nombres a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
    let nombreLower = nombre.toLowerCase();

    // Verificamos si el nombre ya está en la lista (convirtiendo todos los nombres en la lista a minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreLower)) {
        alert("El nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    for (let amigo of amigos) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("listaAmigos").innerHTML = " ";
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}
