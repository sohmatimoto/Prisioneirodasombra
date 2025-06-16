const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma cela escura e úmida de uma fortaleza imponente, Kael, o Prisioneiro Sombra, aguardava sua execução ao amanhecer.Ele era um mestre em escapadas, e esta noite não seria diferente. Precisava de um plano. Kael notou um guarda cochilando na guarita ou uma fresta na parede que levava aos esgotos. Como Kael tentará escapar da cela?",
        alternativas: [
            {
                texto: "Render o guarda e pegar suas chaves.",
                afirmacao: "afirmação"
            },
            {
                texto: "Fugir pelos esgotos através da fresta.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ele conseguiu sair da cela, mas o alarme da fortaleza foi ativado. Vozes e passos se aproximavam. Kael tinha que se mover rapidamente. Para onde Kael deve ir agora?",
        alternativas: [
            {
                texto: "Subir na torre mais alta para tentar um salto audacioso.",
                afirmacao: "afirmação"
            },
            {
                texto: "Descer para os calabouços, onde poderia encontrar túneis subterrâneos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Enquanto se movia, ele encontrou uma sala de armas com equipamentos ou uma cozinha com um mapa da fortaleza. O Kael deve pegar?",
        alternativas: [
            {
                texto: "Um punhal e uma corda para se defender e escalar.",
                afirmacao: "afirmação"
            },
            {
                texto: "Um mapa detalhado da fortaleza.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A perseguição se intensificava, e ele se viu encurralado entre dois caminhos: uma ponte estreita sobre um abismo ou um portão de ferro fechado. Como Kael vai prosseguir?",
        alternativas: [
            {
                texto: "Atravessar a ponte estreita, arriscando a queda.",
                afirmacao: "afirmação"
            },
            {
                texto: "Tentar arrombar o portão de ferro, mesmo sob pressão.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ele estava quase livre! A apenas alguns metros da liberdade, uma armadilha se ativou, e ele ficou preso",
        alternativas: [
            {
                texto: "Usar sua agilidade para desativar o mecanismo rapidamente.",
                afirmacao: "afirmação"
            },
            {
                texto: "Sacrificar algo valioso para abrir um atalho improvisado.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
