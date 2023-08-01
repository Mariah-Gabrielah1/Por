const lampadaLigada= document.getElementById('ligada');
const lampadaDesligada = document.getElementById('desligada');
const lamp = document.getElementById('lamp')

function desligada (){
    lamp.src = './img/desligada.jpeg'
}


function ligar (){
    lamp.src = './img/ligada.jpeg'
}


lampadaDesligada.addEventListener('click', desligada);

lampadaLigada.addEventListener('click', ligar);