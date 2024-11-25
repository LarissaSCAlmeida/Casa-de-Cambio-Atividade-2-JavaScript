function dolar2(quantidadeDolar,valorDolarAtual)
{
    return(quantidadeDolar*valorDolarAtual).toFixed(2);
}
function converter()
{
    const quantidadeDolar = parseFloat(document.getElementById("quantidadeDolar").value);
    const valorDolarAtual = parseFloat(document.getElementById("valorDolarAtual").value);
    const valorReais = dolar2(quantidadeDolar,valorDolarAtual);
    document.getElementById("resultado").innerText =`O valor em reais R$ ${valorReais}`;
}