document.addEventListener('DOMContentLoaded'), function() {
    // 1. pegar os elementos do html  que vamos usar
    const formulario = document.getElementById('meuFormulario');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const erroNome = doctment.getElementById('nomeerro');
    const erroemail = document.getElementById('emailerro');
    const statusFormulario = document.getElementById('statusformulario');

    // --- Funções Auxiliares para mostrar/esconder erros --
    //Esta função mostra um erro para um campo especifico
    function mostraErro(inputElemento, mensagemErroElemento mensagem){
        inputElemento.classList.add('invalido');
    }
}