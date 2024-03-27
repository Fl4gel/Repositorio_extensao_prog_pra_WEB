let id = 1; // Começa com ID 1

function adicionarPessoa() {
    // Obtém o valor do campo de entrada de nome
    const nome = document.getElementById("name").value;
    // Obtém o valor do campo de entrada de valor e converte para número com ponto flutuante
    const valor = parseFloat(document.getElementById("value").value);
    // Calcula o desconto (10% do valor)
    const desconto = valor * 0.1;

    // Obtém a referência ao corpo da tabela (onde as linhas serão adicionadas)
    const tbody = document.getElementById("tbody");

    // Cria uma nova linha na tabela
    const newRow = document.createElement("tr");
    
    // Cria e adiciona a célula para o ID
    const idCell = document.createElement("td");
    idCell.textContent = id; // Define o conteúdo da célula como o ID atual
    newRow.appendChild(idCell); // Adiciona a célula à nova linha

    // Cria e adiciona a célula para o nome
    const nomeCell = document.createElement("td");
    nomeCell.textContent = nome; // Define o conteúdo da célula como o nome inserido
    newRow.appendChild(nomeCell); // Adiciona a célula à nova linha

    // Cria e adiciona a célula para o valor, formatando-o com duas casas decimais
    const valorCell = document.createElement("td");
    valorCell.textContent = valor.toFixed(2); // Define o conteúdo da célula como o valor formatado
    newRow.appendChild(valorCell); // Adiciona a célula à nova linha

    // Cria e adiciona a célula para o desconto, formatando-o com duas casas decimais
    const descontoCell = document.createElement("td");
    descontoCell.textContent = desconto.toFixed(2); // Define o conteúdo da célula como o desconto formatado
    newRow.appendChild(descontoCell); // Adiciona a célula à nova linha

    // Adiciona a nova linha à tabela
    tbody.appendChild(newRow);

    id++; // Incrementa o ID para a próxima pessoa

    // Limpa os campos do formulário após adicionar
    document.getElementById("name").value = "";
    document.getElementById("value").value = "";
}
