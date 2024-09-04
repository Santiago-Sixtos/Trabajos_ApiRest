document.getElementById('fetchImages').addEventListener('click', fetchCharacters);

function fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; // Limpiar el contenido anterior

            // Obtener personajes aleatorios (hasta 9)
            const randomCharacters = getRandomCharacters(data.results, 9);

            randomCharacters.forEach(character => {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('image-container');

                imgContainer.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <p>${character.name}</p>
                `;

                gallery.appendChild(imgContainer);
            });
        })
        .catch(error => console.error('Error al obtener los personajes:', error));
}

// Función para obtener personajes aleatorios
function getRandomCharacters(allCharacters, count) {
    const shuffledCharacters = allCharacters.sort(() => 0.5 - Math.random());
    return shuffledCharacters.slice(0, count);
}