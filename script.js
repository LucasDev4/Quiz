const containerChange = document.querySelector(".change");
const back = document.getElementById("back");
const next = document.getElementById("next");
const progressBars = document.querySelectorAll(".progress");
const comeback = document.getElementById("comeback");

let currentQuestion = 0;

const answers = [];

const questions = [

    {
        title: "Você prefere trabalhar",
        options: [
            "Criando interfaces visuais e interativas",
            "Automatizando tarefas e resolvendo<br>problemas rapidamente",
            "Construindo sistemas grandes e organizados",
            "Controlando cada detalhe do funcionamento",
            "Criando algo extremamente eficiente e seguro"
        ]
    },

    {
        title: "Quando você aprende algo novo,<br> você",
        options: [
            "Testa direto no navegador",
            "Faz scripts rápidos para praticar",
            "Estuda a documentação antes",
            "Quer entender como funciona por baixo dos pano",
            "Se preocupa com performance desde o começo"
        ]
    },

    {
        title: "Você prefere projetos",
        options: [
            "Criativos e visuais",
            "Inteligentes e práticos",
            "Estruturados e robustos",
            "Técnicos e complexos",
            "Desafiadores e modernos"
        ]
    },

    {
        title: "Seu maior medo como dev é",
        options: [
            "Interface quebrada",
            "Código confuso",
            "Sistema mal estruturado",
            "Vazamento de memória",
            "Código inseguro"
        ]
    },

    {
        title: "Você gosta de",
        options: [
            "Ver resultados rápidos",
            "Resolver problemas com poucas linhas",
            "Arquitetura bem definida",
            "Performance extrema",
            "Segurança e controle"
        ]
    },

    {
        title: "Você se considera",
        options: [
            "Criativo",
            "Estratégico",
            "Organizado",
            "Técnico",
            "Perfeccionista"
        ]
    },

    {
        title: "Você prefere",
        options: [
            "Trabalhar com web",
            "Trabalhar com dados e IA",
            "Sistemas corporativos",
            "Jogos ou sistemas embarcados",
            "Sistemas de alta performance"
        ]
    },

    {
        title: "Quando dá erro você",
        options: [
            "Abre o console e resolve",
            "Testa várias soluções rápidas",
            "Analisa a estrutura do projeto",
            "Debuga linha por linha",
            "Revisa lógica e segurança"
        ]
    }

];


function updateProgress() {
    progressBars.forEach((bar, index) => {
        if (index <= currentQuestion)
            bar.classList.add("active");
        else
            bar.classList.remove("active");
    });
}


function renderQuestion(index) {
    const question = questions[index];

    containerChange.innerHTML = `
        <section class="title">
            <p>Pergunta ${String(index + 1).padStart(2, "0")}</p>
            <h2>${question.title}:</h2>
        </section>

        <section class="containerInputs">
            ${question.options.map((option, i) => `
            <div class="twin">
                <label>
                    <input type="radio" name="question" value="${i}">
                    ${option}
                </label>
            </div>
            `).join("")}
        </section>
`;
    if (answers[index] !== undefined) {
        const radio = document.querySelector(`input[value="${answers[index]}"]`);
        if (radio) radio.checked = true;
    }
}


function getSelectedAnswer() {
    const selected = document.querySelector('input[type="radio"]:checked');
    return selected ? Number(selected.value) : null;
}


next.addEventListener("click", () => {
    const selected = getSelectedAnswer();

    if (selected === null) {
        alert("Selecione uma opção antes de continuar.");
        return;
    }

    answers[currentQuestion] = selected;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion(currentQuestion);
        updateProgress();
    }
    else {
        localStorage.setItem("quizAnswers", JSON.stringify(answers));
        window.location.href = "success.html";
    }
});


back.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion(currentQuestion);
        updateProgress();
    }
});

function volta(){
    window.location.href = "index.html";
}
renderQuestion(currentQuestion);
updateProgress();