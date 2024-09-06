// Importa dados de projetos sociais
import projetos from './dados.js';

// Obtém referências aos elementos do DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsList = document.getElementById('resultsList');

// Adiciona evento de clique ao botão de busca
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProjects = projetos.filter(projeto =>
    projeto.nome.toLowerCase().includes(searchTerm) ||
    projeto.descricao.toLowerCase().includes(searchTerm)
  );

  // Se não houver termos de pesquisa, mostrar todos os projetos
  if (searchTerm.trim() === '') {
    updateResults(projetos);
  } else {
    updateResults(filteredProjects);
  }
});

// Função para atualizar a lista de resultados
function updateResults(filteredProjects) {
  resultsList.innerHTML = ''; // Limpa a lista antes de adicionar novos resultados

  if (filteredProjects.length === 0) {
    resultsList.innerHTML = '<p>Nenhum resultado encontrado.</p>';
  } else {
    filteredProjects.forEach(projeto => {
      const li = document.createElement('li');
      li.textContent = `${projeto.nome}: ${projeto.descricao}`;
      resultsList.appendChild(li);
    });
  }
}

