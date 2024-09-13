const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Na sua visâo, você acredita que a inteligência artificial irá:",
        alternativas: [
            {
                texto: "Aumentar a desigualdade social, concentrando poder e riqueza em poucas mãos.",
                afirmacao: "Você se preocupa com a situação de classes baixas diante dessa nova realidade."
            },
            {
                texto: "Criar novas oportunidades de trabalho e melhorar a qualidade de vida da maioria das pessoas.",
                afirmacao: "Você acredita que a IA pode se tornar uma ferramenta eficaz em nosso meio."
            }
        ]
    },
    {
        enunciado: "Qual será o maior desafio para a implementação da IA em larga escala?",
        alternativas: [
            {
                texto: "Garantir a segurança e privacidade dos dados.",
                afirmacao: "Com constantes ataques hackers em sistemas brasileiros, você demonstra um certo receio em qustão da segurança dessa nova ferramenta no Brasil."
            },
            {
                texto: "Desenvolver algoritimos imparciais e livres de vieses.",
                afirmacao: "Como esta é uma ferramenta no qual foi criada por humanos, você teme que ela seja desenvolvida com bases políticas e padrões de discriminação e preconceito."
            }
        ]
    },
    {
        enunciado: "A regulamentação da IA será:",
        alternativas: [
            {
                texto: "Essencial para evitar o uso malicioso da tecnologia.",
                afirmacao: "Com esta inovação. surge a preocupação de como será usado essa nova ferramenta na socieda e onde uma regulamentação que garanta não só a proteção do usuario mas do uso correto da IA."
            },
            {
                texto: "Um obstáculo ao desenvolvimento e inovação no setor.",
                afirmacao: "Com base nos atuais projetos do governo. surje a preocupação de regulamentações que desfavorece o povo brasileiro de classes baixas."
            }
        ]
    },
    {
        enunciado: "A IA deve ser desenvolvida com o objetivo de:",
        alternativas: [
            {
                texto: "Maximizar o lucro das empresas.",
                afirmacao: "Essa ferramenta seria criada para beneficiar apenas grandes empresas em seus lucros e produções."
            },
            {
                texto: "Beneficiar a sociedade como um todo.",
                afirmacao: "Essa ferramenta seria criada para beneficiar a população em geral, independente de ser da classe baixa ou da elite."
            }
        ]
    },
    {
        enunciado: "Por fim, você usaria a IA em sua rotina?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Visando tudo isso, você acredita no potencial e futuro da IA em nossa sociedade atual."
            },
            {
                texto: "Não!",
                afirmacao: "Visando tudo isso, você ainda tem receio do potencial e futuro da IA em nossa sociedade evitando o uso."
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
    caixaPerguntas.textContent = "Ao final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
