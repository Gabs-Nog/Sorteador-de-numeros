function sortear() {
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let de = parseInt(document.getElementById ('de').value);
    let ate = parseInt(document.getElementById ('ate').value);

    if (de >= ate) {
        alert('O campo "Do número" deve ser inferior ao campo "Até o número". Revise os dados informados!');
        return;
      }

    if (quantidade > (ate - de + 1)) {
        alert('O campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Revise os dados informados!');
        return;
      }

    let sorteados = [];
    let numero;

    for (let sorteador = 0; sorteador<quantidade; sorteador++){

    numero = obterNumeroAleatorio(de,ate);

    while (sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de,ate);
    }

    sorteados.push(numero);
    console.log (sorteados);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`);
    alterarStatusBotao();
}

function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else
        {   
         botao.classList.remove('container__botao');
         botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById ('de').value = '';
    document.getElementById ('ate').value = '';
    document.getElementById ('quantidade').value = '';
    document.getElementById ('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}