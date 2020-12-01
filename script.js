const accordsBemol = [["DO", "MI", "SOL"], ["FA", "LA", "DO"], ["SIb", "RE", "FA"], ["MIb", "SOL", "SIb"], ["LAb", "DO", "MIb"], ["REb", "FA", "LAb"], ["SOLb", "SIb", "REb"]];
const accordsDiez = [["SI", "RE#", "FA#"], ["MI", "SOL#", "SI"], ["LA", "DO#", "MI"], ["LA", "DO#", "MI"], ["RE", "FA#", "LA"], ["SOL", "SI", "RE"], ["DO", "MI", "SOL"]];
const accordsEnsemble = accordsBemol.concat(accordsDiez);
const interval = ["Tonique", "Tierce", "Quinte"];
const start = document.getElementById("start");
const hide = document.getElementById("hide");
const begin = document.getElementById("begin");
const option = document.getElementById("option");
const word = document.getElementById("word");
const bemol = document.getElementById("bemol");
const diez = document.getElementById("diez");
const text = document.getElementById("text");
const confirm = document.getElementById("confirm");
const juste = document.getElementById("juste");
let score = 0;
const soundE = new Audio("correct.mp3");
let accChoix = 0;
let randInterval;
let randBemol;
let randDiez;
let randBoth;

start.addEventListener("click", startGame);

function startGame() {
    hide.classList.remove("hide");
    begin.classList.add("hide");
    accChoix = option.selectedIndex;
    randInterval = Math.floor(Math.random() * 2) + 1;

    switch (accChoix) {
        case 0:
            diez.classList.add("hide");
            randBemol = Math.floor(Math.random() * accordsBemol.length);
            word.innerHTML = `Écris la ${interval[randInterval]} de ${accordsBemol[randBemol][0]}`;
            break;
        case 1:
            bemol.classList.add("hide");
            randDiez = Math.floor(Math.random() * accordsDiez.length);
            word.innerHTML = `Écris la ${interval[randInterval]} de ${accordsDiez[randDiez][0]}`;
            break;
        case 2:
            randBoth = Math.floor(Math.random() * accordsEnsemble.length);
            word.innerHTML = `Écris la ${interval[randInterval]} de ${accordsEnsemble[randBoth][0]}`;
            break;
            
    };
    

    confirm.addEventListener("click", () => {
        if (accChoix === 0 && text.value.toUpperCase() === accordsBemol[randBemol][randInterval] || accChoix === 1 && text.value.toUpperCase() === accordsDiez[randDiez][randInterval] || accChoix === 2 && text.value.toUpperCase() === accordsEnsemble[randBoth][randInterval]) {
            text.value = "";
            startGame();
            soundE.play();
            score++;
            juste.innerHTML = score;
        }

        else {
            text.value = "";
        }

});
}

bemol.addEventListener("click", () => text.value = text.value + "b");
diez.addEventListener("click", () => text.value = text.value + "#");