// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

let nombre = document.getElementById('amigo').value;

console.log(nombre); // para verificar el nombre

function agregarAmigo() {
    
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); // Elimina los espacios en blanco

    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");

        return;
   
    }
    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
    //console.log("Lista actualizada:", amigos);
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

    document.getElementById("listaAmigos").innerHTML= " ";
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
   
}

