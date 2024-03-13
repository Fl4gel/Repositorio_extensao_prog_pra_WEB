function calcularPreco(valor, porcentagem) {
    return valor - (valor*porcentagem);
}

function mostrarResultado(){
    const Valor = parseFloat(document.getElementById('valor').value);
    const n_parcelas = parseFloat(document.getElementById('n_parcelas').value);
    

    if (n_parcelas == 1) {
        n2= 0.1;
        const resultado = calcularPreco(Valor,n2);
        document.getElementById('resultado').innerText = `O valor total da venda foi ${resultado}` 
    } 
    if (n_parcelas>1 && n_parcelas<4) {
        n2= 0.05;
        const resultado = calcularPreco(Valor,n2);
        document.getElementById('resultado').innerText = `O valor total da venda foi ${resultado}` 
    } 
    if (n_parcelas>4) {
        n2= -0.1;
        const resultado = calcularPreco(Valor,n2);
        document.getElementById('resultado').innerText = `O valor total da venda foi ${resultado}` 
    } 


    } 