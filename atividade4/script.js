const mensagens = [
    "Bem-vindos ao novo painel informativo da escola!",
    "Atenção: Reunião de pais na próxima sexta-feira!",
    "Inscrições abertas para o torneio de xadrez!",
    "Não esqueçam: Prova de matemática na próxima semana.",
    "Visita ao museu programada para o dia 25/10."
];

const imagens = [
    "sapo.jpg",
    "gato.jpg",
    "rato.jpg",
    "cachorro.jpg"
];

let mensagemAtual = 0;
let imagemAtual = 0;
let paragrafoVisivel = true;

function mudarMensagem() {
    mensagemAtual = (mensagemAtual + 1) % mensagens.length;
    document.getElementById('mensagem').textContent = mensagens[mensagemAtual];
}

function mudarImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    document.getElementById('imagem').src = imagens[imagemAtual];
}

function alternarParagrafo() {
    const paragrafo = document.getElementById('paragrafo');
    const botao = document.getElementById('botaoParagrafo');

    if (paragrafoVisivel) {
        paragrafo.style.display = 'none';
        botao.textContent = 'Mostrar Parágrafo';
    } else {
        paragrafo.style.display = 'block';
        botao.textContent = 'Ocultar Parágrafo';
    }

    paragrafoVisivel = !paragrafoVisivel;
}

function mudarTextoBotao(botao) {
    const textos = [
        "Clique novamente!",
        "Ótimo trabalho!",
        "Continue assim!",
        "Você é incrível!",
        "Voltar ao início"
    ];

    let textoAtual = textos.indexOf(botao.textContent);
    textoAtual = (textoAtual + 1) % textos.length;
    botao.textContent = textos[textoAtual];
}