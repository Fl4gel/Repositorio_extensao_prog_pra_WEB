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

 const idadesString = req.query.idades;    

 //transformando em várias idades 
 const idades = idadesString.split(",").map((idade) => parseFloat(idade));


 // Criando uma variável para receber a maior idade
 let maiorIdade = idades[0];
 for (let i = 1; i < idades.length; i++) {
   if (maiorIdade < idades[i]) {
     maiorIdade = idades[i];
   }
 }


  // Criando string com as idades
  const listaIdades = idades.join(", ");
  
// Realizando a soma das idades 
const soma = idades.reduce((acc, curr) => acc + curr, 0);
// Enviando o resultado como resposta
});


// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));



res.send(`
<p>As idades adicionadas foram: ${listaIdades}.</p>
<p>Foram inseridas ${idades.length} idades.</p>
<p>A soma das idades é ${soma}.</p>
<p>A maior idade foi ${maiorIdade}.</p>
`);