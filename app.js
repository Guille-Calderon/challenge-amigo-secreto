// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

let nombre = document.getElementById('amigo').value;

console.log(nombre); 

function agregarAmigo() {
    
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); // Elimina espacios en blanco

    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");

        return;
   
    }
