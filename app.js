// criação da array (lista)
let nomesAmigos = [] 

// criação da função adicionarAmigo
function adicionarAmigo () {   
    let input = document.querySelector('input'); // pega o elemento input
    let nome = input.value.trim(); // pega o valor do campo e remove espaços extras
    
    if (nome == '') { // se a variável input (caixa de texto) estiver vazia então mostra uma mensagem
        alert('Por favor, insira um nome.');
    } else { // senão a array recebe o valor da caixa com o método .push (variável do elemento input)
        nomesAmigos.push(nome);        
        exibirNomeAmigos();
    }
    limparCampo();
  
}

function adicionarNaLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < nomesAmigos.length; i++) {  
        let item = document.createElement('li');
        item.textContent = nomesAmigos[i];
        lista.appendChild(item);      
    }
}

function exibirNomeAmigos() {
    adicionarNaLista();
}

// criação da função limparCampo para limpar o campo de texto
function limparCampo(){ 
    let input = document.querySelector('input'); // atribuindo à variável o médoto "document.querySelector('input');" para em seguida atribuir ao mesmo o valor (.value), nesse caso '' (vazio)
    input.value = ''; // limpa o campo de texto
}

function sortearAmigo() {
    if (nomesAmigos.length == 0) { // se o tamanho da array nomesAmigos = 0 então mostra a mensagem
        alert('Adicione amigos antes de sortear.');
        return;
    } 
        let indiceSorteado = Math.floor(Math.random() * nomesAmigos.length); // criação da variável indiceSorteado para fazer o sorteio de um número aleatório
        let amigoSorteado = nomesAmigos[indiceSorteado]; //criação da variável amigoSorteado e atribuindo a mesma o valor da array nomesAmigos na posição do número aleatório sorteado

        let resultadoSorteio = document.getElementById('resultado');
        resultadoSorteio.innerHTML = `Amigo sorteado: ${amigoSorteado}`; // mostra a mensagem após o sorteio
       

        // limpa a lista de amigos
        nomesAmigos = [];
        exibirNomeAmigos();
   
}

// limpa o resultado do sorteio
function limparResultado() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

