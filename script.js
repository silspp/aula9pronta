const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 - Qual das seguintes práticas é mais benefica para promover a saúde mental e o bem estar?",
        alternativas: [
            {
            texto : "A - Praticar meditação diariamente",
            afirmacao:"muto bom para a saude mental e estress do dia a dia"
            },
            {
            texto: "B - seguir uma dieta rica em alimentos processados",
            afirmacao:"Pode ter saúde comprometida"
            }
            
        ]
    },
    {
        enunciado: "2 - De que forma  os usuários de redes sociais possam  desenvolver uma consciência mais equilibrada sobre os impactos ambientais e promover um comportamento mais sustentável ?",
        alternativas: [
            {
             texto:"A - Aumento da consciência e conexão com o meio ambiente",
             afirmacao:"Aumento da consciência e conexão com o meio ambiente"
            },
            {
             texto: "B - redução de estresse e ansiedade",
             afirmacao:"aumentar a qualidade de vida"
            }
           
        ]
    },
    {
        enunciado: "3 - Como a alimentação pode influenciar a saúde mental?",
        alternativas: [
            {
             texto:"A - Uma alimentação balanceada pode melhorar o humor e reduzir os níveis de estresse",
             afirmacao:"O sujeito vive mais feliz"  
            },
            {
                texto:"B - A alimentação não tem impacto significativo na saúde mental.",
                afirmacao:"Você não esta atualizado"
            }
            
            
        ]
    }
    
    
]

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent=" ";
    textoResultado.textContent="";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas)  {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); {

    };
    caixaAlternativas.appendChild(botaoAlternativas)  
        }
};


    
    function respostaSelecionada(opcaoSelecionada){
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal+= afirmacao+" ";
        atual++;
        mostraPergunta();

    }
    mostraPergunta();

    function mostraResultado(){
        caixaPerguntas.textContent = "Sua saúde em foco !!!";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent=" ";
    }
