//Array d atividade (baseado no material de ARRAYS)
let itens = [];

//Adicionar no final usando push()
function adicionarFinal() {
    let valor = prompt("Digite um item para adicionar no FINAL:");
    if (valor) {
        itens.push(valor);
        alert("Item adicionado com push():/n" + itens);
    }
}

// Remover Ultimo usando pop()
function removerFinal(){
    let removido = itens.pop();
    alert("removido com pop(): " + removido + "\nLista atual:\n" + itens);

}

//Remover primeiro usando shift()
function removerInicio(){
    let removido = itens.shift();
    alert("Removido com shift(): " + removido + "\nlLista atual:\n" + itens);
}

//Mostrar array atual
function mostrarLista(){
    alert("Itens no array:\n" + itens);
}