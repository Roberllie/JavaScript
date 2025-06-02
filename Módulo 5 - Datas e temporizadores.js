<!DOCTYPE html>
<html>
<head>
  <title>Temporizador de Contagem Regressiva</title>
</head>
<body>
  <h1>Contagem Regressiva</h1>
  <div id="temporizador"></div>

  <script>
    // 1. Função para calcular o tempo restante
    function calcularTempoRestante(dataFutura) {
      const agora = new Date();
      const diferenca = dataFutura - agora;

      if (diferenca <= 0) {
        return null; // Tempo esgotado
      }

      const segundos = Math.floor((diferenca / 1000) % 60);
      const minutos = Math.floor((diferenca / 1000 / 60) % 60);
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

      return { dias, horas, minutos, segundos };
    }

    // 2. Função para atualizar o temporizador na tela
    function atualizarTemporizador() {
      const dataFutura = new Date("2025-12-31T23:59:59"); // Altere para a data desejada
      const tempo = calcularTempoRestante(dataFutura);

      const elemento = document.getElementById("temporizador");

      if (!tempo) {
        elemento.textContent = "Tempo esgotado!";
        clearInterval(intervalo);
        return;
      }

      elemento.textContent = 
        `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
    }

    // 3. Use setInterval para atualizar a cada segundo
    const intervalo = setInterval(atualizarTemporizador, 1000);

    // Atualiza imediatamente ao carregar a página
    atualizarTemporizador();
  </script>
</body>
</html>
