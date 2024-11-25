function dolar(valor)
{
    const taxa = 5.59;
    return (valor*taxa).toFixed(2);

}
function converter()
{
    const valorDolar = parseFloat (document.getElementById("valorDolar").value);
    if (!isNaN(valorDolar))
    {
        const valorReais = dolar(valorDolar);
        document.getElementById("resultado").innerText= `O valor em reais é: R$ ${valorReais}`;
    }
    else
    {
        document.getElementById("resultado").innerText=`Por favor digite um valor válido`;
    }
}
