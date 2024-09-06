// Inicializa o mapa e configura a visualização inicial
const map = L.map('map').setView([51.505, -0.09], 13);

// Adiciona a camada de tile do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona marcadores para os projetos usando os dados
projetos.forEach(projeto => {
    L.marker(projeto.localizacao).addTo(map)
        .bindPopup(`<b>${projeto.nome}</b><br>${projeto.descricao}`);
});
