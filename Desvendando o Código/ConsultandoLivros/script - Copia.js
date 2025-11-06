const livrosDiv = documentgetElementById('livros');
const isdnSelct = documentgetElementById('isdnSelect');
const buscarBtn = documentgetElementById('buscarBtn');

async function buscarLivros(isdn) {
    const reponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isdn}`);
    const data = await response.json();
    livrosDiv.innerHTML = '';
    data.items.forEach(livro => {
        const livroDiv = document.createElement('div');
        livroDiv.classList.add('livro');
        livroDiv.innerHTML = `
            <h2>${livro.volumeInfo.title}</h2>
            <p>Autor: ${livro.volumeInfo.authors ? livro.volumeInfo.authors.join(', ') : 'Desconhecido'}</p>
            <p>Editora: ${livro.volumeInfo.publisher || 'Desconhecida'}</p>
            <p>Ano: ${livro.volumeInfo.publishedDate || 'Desconhecido'}</p>
            <p>Gênero: ${livro.volumeInfo.categories ? livro.volumeInfo.categories.join(', ') : 'Desconhecido'}</p>
            <p>Descrição: ${livro.volumeInfo.description || 'Sem descrição disponível'}</p>
        `;
        livrosDiv.appendChild(livroDiv);
    });
}buscarBtn.addEventListener('click', () => {
    const isdn = isdnSelct.value;
    buscarLivros(isdn);
});t = async function buscarLivros() {
    const isdn = isdnSelct.value;                           

        if (!isdn) {
        alert('Por favor, selecione um ISBN.');
        return;
    }

    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isdn}`);

    } catch(error) {
        console.error('Erro ao buscar livros:', error);
        alert('Ocorreu um erro ao buscar livros.');
    }

   
}  const livrosDiv = document.getElementById('livros');
    livrosDiv.innerHTML = '';   
    const data = await response.json();
    if (!data.items || data.items.length === 0) {
        livrosDiv.innerHTML = '<p>Nenhum livro encontrado para o ISBN fornecido.</p>';
        return;
    }