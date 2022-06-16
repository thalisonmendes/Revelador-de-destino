let perguntaNatela = document.getElementById("pergu-")
let pergunta = document.getElementById("valor-pergunta")
let resultado = document.getElementById("resultado")
let botaoPergunta = document.getElementById("botao")
let respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem duvidas!",
    "Pergunte novamente masi tarde!",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possivel prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]



function perguntar() {

    if (pergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    let totalDeRespostas = respostas.length
    let numeroAleatorio = Math.floor(Math.random() * totalDeRespostas)
    console.log(respostas[numeroAleatorio])
    perguntaNatela.innerHTML = pergunta.value
    resultado.innerHTML = respostas[numeroAleatorio]
}
