const comeback = document.getElementById("comeback");

const icon = document.getElementById("resultIcon");
const nameEl = document.getElementById("resultName");
const desc1 = document.getElementById("resultDesc1");
const desc2 = document.getElementById("resultDesc2");
const profile = document.getElementById("resultProfile");
const percent = document.getElementById("resultPercent");
const character = document.getElementById("resultCharacter");
const resultContainer = document.getElementById("resultContainer");

const answers = JSON.parse(localStorage.getItem("quizAnswers"));

if (!answers) {
    window.location.href = "index.html";
}

const scores = {
    frontend: 0,
    python: 0,
    java: 0,
    c: 0,
    cpp: 0
};

answers.forEach(answer => {
    if (answer === 0) scores.frontend++;
    if (answer === 1) scores.python++;
    if (answer === 2) scores.java++;
    if (answer === 3) scores.c++;
    if (answer === 4) scores.cpp++;
});

const result = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
);

const results = {

    frontend: {
        name: "JavaScript",
        icon: "./img/JavaScriptIcon.svg",
        character: "./img/JavaScriptIcon.svg",
        desc1: "Você é criativo e gosta de ver resultados visuais.",
        desc2: "Você combina com desenvolvimento Front-End.",
        profile: "Perfil: Criador de Interfaces"
    },

    python: {
        name: "Python",
        icon: "./img/PythonIcon.svg",
        character: "./img/PythonIcon.svg",
        desc1: "Você é estratégico e gosta de automação.",
        desc2: "Python é perfeito para você.",
        profile: "Perfil: Especialista em Automação"
    },

    java: {
        name: "Java",
        icon: "./img/JavaIcon.svg",
        character: "./img/Duke.png",
        desc1: "Você é estruturado e organizado.",
        desc2: "Java é forte no mundo corporativo.",
        profile: "Perfil: Arquiteto de Sistemas"
    },

    c: {
        name: "C",
        icon: "./img/CIcon.png",
        character: "./img/CIcon.png",
        desc1: "Você gosta de controle total.",
        desc2: "C é poderoso e direto.",
        profile: "Perfil: Engenheiro de Sistemas"
    },

    cpp: {
        name: "C++",
        icon: "./img/CppIcon.svg",
        character: "./img/CppIcon.svg",
        desc1: "Você busca máxima performance.",
        desc2: "C++ é usado em sistemas críticos.",
        profile: "Perfil: Engenheiro de Performance"
    }

};

const final = results[result];

resultContainer.classList.add(result);

icon.src = final.icon;
nameEl.innerText = final.name;
desc1.innerText = final.desc1;
desc2.innerText = final.desc2;
profile.innerText = final.profile;
character.src = final.character;

const max = 8;
const score = scores[result];
const percentage = Math.round((score / max) * 100);

percent.innerText = "Compatibilidade: " + percentage + "%";

comeback.addEventListener("click", () => {
    localStorage.removeItem("quizAnswers");
    window.location.href = "index.html";
});
