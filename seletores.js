<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Manipulação DOM</title>
  <style>
    .destaque {
      color: white;
      background-color: teal;
      padding: 5px;
    }
  </style>
</head>
<body>

  <h1 id="titulo">Título Original</h1>

  <ul id="lista">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
  <p>Parágrafo 3</p>

  <button id="meu-botao">Clique aqui</button>

  <script>
    // Mudar o texto do título
    document.getElementById('titulo').textContent = 'Novo Título';

    // Alterar o estilo dos itens da lista
    const itens = document.querySelectorAll('#lista li');
    itens.forEach(item => {
      item.style.color = 'blue';
      item.style.fontWeight = 'bold';
      item.style.fontSize = '18px';
    });

    // Adicionar uma classe a todos os parágrafos
    const paragrafos = document.querySelectorAll('p');
    paragrafos.forEach(p => {
      p.classList.add('destaque');
    });

    // Alterar o texto do botão
    document.getElementById('meu-botao').textContent = 'Botão Atualizado';
  </script>

</body>
</html>
