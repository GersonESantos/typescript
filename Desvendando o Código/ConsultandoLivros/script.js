const livrosDiv = document.getElementById('livros');
const mensagemDiv = document.getElementById('mensagem');
const isbnInput = document.getElementById('isbnInput');
const buscarBtn = document.getElementById('buscarBtn');

async function buscarLivros(isbn) {
  if (!isbn) {
    alert('Por favor, informe um ISBN.');
    return;
  }

  try {
    mensagemDiv.textContent = 'Carregando...';
    livrosDiv.innerHTML = '';

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${encodeURIComponent(isbn)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    mensagemDiv.textContent = '';

    if (!data.items || data.items.length === 0) {
      livrosDiv.innerHTML = '<p>Nenhum livro encontrado para o ISBN fornecido.</p>';
      return;
    }

    data.items.forEach(item => {
      const info = item.volumeInfo || {};
      const titulo = info.title || 'Título desconhecido';
      const autores = info.authors ? info.authors.join(', ') : 'Desconhecido';
      const editora = info.publisher || 'Desconhecida';
      const ano = info.publishedDate || 'Desconhecido';
      const categorias = info.categories ? info.categories.join(', ') : 'Desconhecido';
      const descricao = info.description || 'Sem descrição disponível';

      const livroDiv = document.createElement('div');
      livroDiv.className = 'livro';
      livroDiv.innerHTML = `
        <h2>${titulo}</h2>
        <div class="meta"><strong>Autor(es):</strong> ${autores}</div>
        <div class="meta"><strong>Editora:</strong> ${editora} — <strong>Ano:</strong> ${ano}</div>
        <div class="meta"><strong>Gênero:</strong> ${categorias}</div>
        <p>${descricao}</p>
      `;
      livrosDiv.appendChild(livroDiv);
    });
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    mensagemDiv.innerHTML = `<div class="error">Ocorreu um erro ao buscar livros. Verifique a conexão ou tente outro ISBN.</div>`;
  }
}

if (buscarBtn && isbnInput) {
  buscarBtn.addEventListener('click', () => {
    buscarLivros(isbnInput.value.trim());
  });

  isbnInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') buscarLivros(isbnInput.value.trim());
  });
}