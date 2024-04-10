const express = require('express');
const app = express();
const path = require('path');
// Configurando o Express para usar arquivos estáticos (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));
// Rota para a página inicial
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a verificacao
app.get('/mandar', (req, res) => {
// Recuperando os números enviados pelo formulário
const idade = [];

 idade[0] = parseFloat(req.query.idade1);    
 idade[1] = parseFloat(req.query.idade2);
 idade[2] = parseFloat(req.query.idade3);
 idade[3] = parseFloat(req.query.idade4);
 idade[4] = parseFloat(req.query.idade5);

//Criando uma variável para receber a maior idade 
var maiorIdade = idade[0];

for (i=0;i<4;i++){
    if(maiorIdade<=idade[i+1]){
        maiorIdade = idade[i+1];
    }
}

// Realizando a soma das idades 
const soma = idade[0] + idade[1] + idade[2] + idade[3] + idade[4];
// Enviando o resultado como resposta
res.send(`Foram Inseridas ${idade.length}(a) idades\nA soma das idades ${idade[0]}, ${idade[1]}, ${idade[2]}, ${idade[3]} e ${idade[4]} é ${soma}\n A maior idade foi ${maiorIdade}`);
});
// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));