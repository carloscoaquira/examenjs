//mostrar question
function showQuestion(num){
    document.querySelector(`.question-block-quiz${num}`).classList.remove("hidden");
}

//desabilitar el inicio
function hiddenInit(){
    let srcImg = document.querySelector(".img-2").src;
    document.querySelector(`.header .header--img`).src = srcImg;
    document.querySelector(`.header h4`).classList.add('hidden');
    document.querySelector(`.header button`).classList.add('hidden');
}

//start
const startBtn = document.querySelector("#starQuiz");
if(startBtn != null){
    startBtn.addEventListener('click', ()=>{
        hiddenInit();
        showQuestion(1); 
    });
}

//question validate
const containerQuestions = document.querySelectorAll(`.question-block form`);
containerQuestions.forEach(formulario => {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let radioChecked = document.querySelectorAll(`input[type=radio]`);
        radioChecked.forEach(item =>{
            if(item.checked){
                console.log(item);
            }
        });
    });
});