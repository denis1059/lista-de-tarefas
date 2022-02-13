let inputNovaTarefa = document.querySelector('.inputNovaTarefa');
let btnAddTarefa = document.querySelector('.btnAddTarefa');
let listaTarefas = document.querySelector('.listaTarefas');


function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputNovaTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
    
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
        
    }

});

btnAddTarefa.addEventListener('click', function() {
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);

});


document.addEventListener('click', function(e){
    const el = e.target;
    
    if (el.classList.contains('apagar')){
    let confirmacao = window.confirm('Tem certeza que deseja excluir? ');

    if (confirmacao){
        el.parentElement.remove();
       salvaTarefas();
    }
    };          
});

function limpaTarefa(){
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    listaTarefas.appendChild(li);
    limpaTarefa();
    criaBotaoApagar(li);
    salvaTarefas();
    
}

function criaBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = ' ';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
    
};

function salvaTarefas(){

    const liTarefa = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefa){

        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
        
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

    function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);

    }


    

}

adicionaTarefasSalvas();



























/*
inputNovaTarefa.addEventListener('keypress', (e) => {

        if(e.keyCode == 13) {
            let tarefa = {
                nome: inputNovaTarefa.value,
                id: gerarId(),
            }
            adicionarTarefa(tarefa);
        }
    });

function gerarId() {
    return Math.floor(Math.random() * 3000);
}


function adicionarTarefa(tarefa) {
    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li);  
    inputNovaTarefa.value = '';  
}

function criarTagLI(tarefa) {

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div  = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcaoed');

    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')');
    
    let btnExcluir  = document.createElement('button');
    btnExcluir.classList.add('btnAcaolix');
   
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

*/
