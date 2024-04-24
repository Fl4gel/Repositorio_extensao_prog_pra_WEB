
var tarefas = []

function submitDados(event){
    event.preventDefault();
    const dados = {
        titulo: document.getElementById('titulo').value,
        desc: document.getElementById('descricao').value,
        data: document.getElementById('data_exec').value,
        categoria: document.getElementById('categoria').value,
        prioridade: Number(document.getElementById('prioridade').value)
    }

    tarefas.push(dados)

    document.getElementById('titulo').value = ''
    document.getElementById('descricao').value = ''
    document.getElementById('data_exec').value = ''
    document.getElementById('categoria').value = ''
    document.getElementById('prioridade').value = ''

    console.log(dados)
    console.log(tarefas)
}

function organizarCategoria(event){
    event.preventDefault();

    const previousLabels = document.querySelectorAll(".label-categorias");
    previousLabels.forEach(label => label.remove());


    let tarefas_by_categoria = tarefas
    const label = document.createElement("label")
    const div = document.getElementById('container-categorias')
    label.classList.add("label-categorias");
    


    tarefas_by_categoria.sort( (a, b) => a.categoria.localeCompare(b.categoria))

    tarefas_by_categoria.forEach(obj => label.innerHTML += `<br>Titulo: ${obj.titulo}<br>Categoria: ${obj.categoria}<br>`)
    div.appendChild(label)
}

function organizarPrioridade(event){
    event.preventDefault();

    const previousLabels = document.querySelectorAll(".label-prioridade");
    previousLabels.forEach(label => label.remove());

    let tarefas_by_prioridade = tarefas
    const label = document.createElement("label")
    const div = document.getElementById('container-prioridades')
    label.classList.add("label-prioridade");

    tarefas_by_prioridade.sort( (a, b) => a.prioridade - b.prioridade)

    tarefas_by_prioridade.forEach(obj => label.innerHTML += `<br>Titulo: ${obj.titulo}<br>Prioridade: ${obj.prioridade}<br>`)
    div.appendChild(label)
}

function listarTarefas(event) {
    event.preventDefault();

    const previousLabels = document.querySelectorAll(".label-dados");
    previousLabels.forEach(label => label.remove());

    const label = document.createElement("label")
    const div = document.getElementById('container-dados')
    label.classList.add("label-dados");

    tarefas.forEach(obj => label.innerHTML += 
        `<br>Titulo: ${obj.titulo}
        <br>Descrição: ${obj.desc}
        <br>Data: ${obj.data}
        <br>Categoria: ${obj.categoria}
        <br>Prioridade: ${obj.prioridade}<br>
    `)

    div.appendChild(label)
    
}