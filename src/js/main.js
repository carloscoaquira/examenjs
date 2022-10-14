//mostrar question
function showQuestion(num){
    let formAnterior = num - 1;
    if(num < 4){
        document.querySelector(`.question-block-quiz${num}`).classList.remove("hidden");
    }
    if(formAnterior <= 3){
        document.querySelector(`.question-block-quiz${formAnterior}`).classList.add("hidden");
    }
    if(formAnterior == 3){
        mostrarResultados(correctAnswer, formAnterior);
    }
}

//mostrar resultados
function mostrarResultados(correctas, total){
    if(correctas == total){
        const contenedor = `<div class="resultado-final">
            <h3>Felicidades</h3>
            <h3>Sacaste una nota de: </h3>
            <h1>${correctas*20} / ${total*20}</h1>
        </div`;
        document.querySelector('.main-question').innerHTML = contenedor;
    }else{
        const contenedor = `<div class="resultado-final">
            <h3>Tu nota total es de: </h3>
            <h1>${correctas*20} / ${total*20}</h1>
            <button class="btn" onclick="resetQuiz()">Repetir</button>
        </div`;
        document.querySelector('.main-question').innerHTML = contenedor;
    }
    

}
function resetQuiz(){
    location.reload();
}

//desabilitar el inicio
function hiddenInit(){
    let srcImg = document.querySelector(".img-2").src;
    document.querySelector(`.header .header--img`).src = srcImg;
    document.querySelector(`.header h4`).classList.add('hidden');
    document.querySelector(`.header button`).classList.add('hidden');
}
//validar formulario
function validarFormulario(idForm){
    const formActual = document.forms[idForm];
    let valorInput = formActual.querySelector(`input[name="${idForm}"]:checked`).value.toLowerCase();
    let respuestaCorrecta = respuestas[idForm];
    if(valorInput == respuestaCorrecta){
        correctAnswer = ++correctAnswer;
    }
    let numberFormnext = Number(idForm.slice(4)) + 1;
    showQuestion(numberFormnext);
    console.log(numberFormnext, correctAnswer);
}

//respuestas
const respuestas = {
    quiz1: "programing",
    quiz2: "client",
    quiz3: ".js"
}
let correctAnswer = 0;

document.addEventListener("DOMContentLoaded", function() {
    //start
    const startBtn = document.querySelector("#starQuiz");
    if(startBtn != null){
        startBtn.addEventListener('click', ()=>{
            hiddenInit();
            showQuestion(1); 
        });
    }
    const containerQuestions = document.querySelectorAll(`.question-block form`);
    containerQuestions.forEach(formulario => {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            let formIdActual = formulario.id;
            validarFormulario(formIdActual);
        });
    }); 
});