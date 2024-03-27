// Declaração do array para armazenar os valores das vendas
let vendas = [];

// Adiciona um ouvinte de evento para o evento de envio do formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    // Obtém o valor da venda do campo de entrada e converte para número
    const valor = parseFloat(document.getElementById('valor').value);
    // Adiciona o valor da venda ao array de vendas
    vendas.push(valor);
    // Atualiza os resultados na página
    atualizarResultados();
});

// Função para calcular a média das vendas
function calcularMedia(vendas) {
    // Calcula o total das vendas somando todos os valores
    const total = vendas.reduce((acc, venda) => acc + venda, 0);
    // Calcula a média dividindo o total pelo número de vendas
    return total / vendas.length;
}

// Função para atualizar os resultados exibidos na página
function atualizarResultados() {
    // Verifica se não há vendas registradas
    if (vendas.length === 0) {
        // Se não houver vendas, exibe uma mensagem indicando isso
        document.getElementById('maiorVenda').textContent = "Nenhuma venda registrada ainda.";
        document.getElementById('mediaVendas').textContent = "";
        return; // Encerra a função
    }
    // Calcula a maior venda registrada usando a função Math.max
    const maiorVenda = Math.max(...vendas);
    // Exibe a maior venda na página
    document.getElementById('maiorVenda').textContent = `Maior venda efetuada: R$ ${maiorVenda.toFixed(2)}`;
    // Calcula a média das vendas usando a função calcularMedia
    const media = calcularMedia(vendas);
    // Exibe a média das vendas na página
    document.getElementById('mediaVendas').textContent = `Média das vendas efetuadas: R$ ${media.toFixed(2)}`;
}

// Função para gerar a lista de vendas na página
function gerarLista() {
    // Inicializa a variável HTML com o cabeçalho da lista
    let html = "<h2>Lista de Vendas:</h2>";
    html += "<ul>";
    // Itera sobre cada valor de venda no array de vendas
    vendas.forEach(venda => {
        // Adiciona um item de lista para cada venda na variável HTML
        html += `<li>R$ ${venda.toFixed(2)}</li>`;
    });
    html += "</ul>"; // Fecha a lista não ordenada
    // Adiciona a lista de vendas na área de resultados da página
    document.getElementById('resultado').innerHTML += html;
}
