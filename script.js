function calcularArea(forma) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior

    switch (forma) {
        case "triangulo":
            var base = parseFloat(prompt("Digite o valor da base do triângulo:"));
            var altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));
            var areaTriangulo = (base * altura) / 2;
            resultadoDiv.innerHTML = "Área do triângulo: " + areaTriangulo.toFixed(2);
            break;

        case "retangulo":
            var comprimento = parseFloat(prompt("Digite o valor do comprimento do retângulo:"));
            var largura = parseFloat(prompt("Digite o valor da largura do retângulo:"));
            var areaRetangulo = comprimento * largura;
            resultadoDiv.innerHTML = "Área do retângulo: " + areaRetangulo.toFixed(2);
            break;

        case "circulo":
            var raio = parseFloat(prompt("Digite o valor do raio do círculo:"));
            var areaCirculo = Math.PI * raio * raio;
            resultadoDiv.innerHTML = "Área do círculo: " + areaCirculo.toFixed(2);
            break;

        case "quadrado":
            var lado = parseFloat(prompt("Digite o valor do lado do quadrado:"));
            var areaQuadrado = lado * lado;
            resultadoDiv.innerHTML = "Área do quadrado: " + areaQuadrado.toFixed(2);
            break;

        default:
            resultadoDiv.innerHTML = "Forma inválida!";
    }
}