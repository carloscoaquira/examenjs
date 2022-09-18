//mostrar question
function showQuestion(num){
    let srcImg = document.querySelector(".img-2").src;
    document.querySelector(`.header img`).src = srcImg;
    document.querySelector(`.question-block-quiz${num}`).classList.remove("hidden");
}

//desabilitar el inicio
function hiddenInit(){
    let srcImg = document.querySelector(".img-2").src;
    document.querySelector(`.header img`).src = srcImg;
    document.querySelector(`.header h4`).classList.add('hidden');
    document.querySelector(`.header button`).classList.add('hidden');
}

//validar sesionStorage
if(window.sessionStorage){
    if(!sessionStorage.getItem("quizJs")){
        const quizExamen = {
            "answer1": false,
            "answer2": false,
            "answer3": false,
            "count": 0
        };
        sessionStorage.setItem("quizJs", JSON.stringify(quizExamen));    
    }else{
        let validarQuiz = JSON.parse(sessionStorage.getItem("quizJs"));
        if(validarQuiz.count > 0){
            let numQuestion = validarQuiz.count;
            console.log("el item existe", numQuestion)
            showQuestion(numQuestion);
            hiddenInit();
        }
    }
}
//start
const startBtn = document.querySelector("#starQuiz");
if(startBtn != null){
    startBtn.addEventListener('click', ()=>{
        document.querySelector(`.main-question .question-block-quiz1`).classList.remove("hidden");
        let modifiedSesion = JSON.parse(sessionStorage.getItem("quizJs"));
        modifiedSesion.count += 1;
        sessionStorage.setItem("quizJs", JSON.stringify(modifiedSesion));
        hiddenInit(); 
    });
}

//question validate