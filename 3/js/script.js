function conversao(valor,valorDolarAtual,tipo)
{
    if(tipo=="dolar")
    {
        return (valor*valorDolarAtual).toFixed(2);
    }
    else if (tipo== "real")
    {
        return (valor/valorDolarAtual).toFixed(2);
    }
    else
    {
        return "Tipo inválido. Use 'Dolar' ou 'Real'.";  
    }
}
function converter(tipo)
{
    const valor = parseFloat(document.getElementById("valor").value);
    const valorDolarAtual = parseFloat(document.getElementById("valorDolarAtual").value);
    const resultado = conversao(valor,valorDolarAtual,tipo);
    document.getElementById("resultado").innerText = isNaN(resultado) ? "Tipo inválido. Use 'Dolar' ou 'Real'." : `O valor convertido é: ${resultado}`;
}