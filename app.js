// Inicializa o mapa e configura a visualização inicial
const map = L.map('map').setView([51.505, -0.09], 13);

// Adiciona a camada de tile do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Função para atualizar a lista de resultados
function updateResults(filteredProjects) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    filteredProjects.forEach(projeto => {
        const li = document.createElement('li');
        li.textContent = `${projeto.nome}: ${projeto.descricao}`;
        resultsList.appendChild(li);
    });
}

// Configura o botão de busca
document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProjects = projetos.filter(projeto =>
        projeto.nome.toLowerCase().includes(searchInput)
    );
    updateResults(filteredProjects);

    // Limpa os marcadores existentes do mapa
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Adiciona novos marcadores filtrados
    filteredProjects.forEach(projeto => {
        // Adiciona um marcador fictício para os projetos, centralizado no Brasil
        L.marker([-15.7801, -47.9292]).addTo(map)
            .bindPopup(`<b>${projeto.nome}</b><br>${projeto.descricao}`);
    });
});

