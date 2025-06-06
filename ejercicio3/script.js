// Elementos del DOM
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error-message');
const countriesContainer = document.getElementById('countries-container');
const retryBtn = document.getElementById('retry-btn');

// Función para obtener países de habla hispana
async function fetchSpanishSpeakingCountries() {
    try {
        showLoading();
        
        // Fetch de todos los países
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,languages,capital,population,region,subregion,flag');
        
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        
        const countries = await response.json();
        
        // Filtrar países que hablan español
        const spanishSpeakingCountries = countries.filter(country => {
            if (country.languages) {
                return Object.values(country.languages).some(language => 
                    language.toLowerCase().includes('spanish') || 
                    language.toLowerCase().includes('español') ||
                    language.toLowerCase().includes('castellano')
                );
            }
            return false;
        });
        
        // Ordenar alfabéticamente
        spanishSpeakingCountries.sort((a, b) => 
            a.name.official.localeCompare(b.name.official)
        );
        
        displayCountries(spanishSpeakingCountries);
        hideLoading();
        
    } catch (error) {
        console.error('Error:', error);
        showError();
        hideLoading();
    }
}

// Función para mostrar loading
function showLoading() {
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    countriesContainer.style.display = 'none';
}

// Función para ocultar loading
function hideLoading() {
    loadingElement.style.display = 'none';
}

// Función para mostrar error
function showError() {
    errorElement.style.display = 'block';
    countriesContainer.style.display = 'none';
}

// Función para mostrar países
function displayCountries(countries) {
    countriesContainer.style.display = 'grid';
    countriesContainer.innerHTML = '';
    
    countries.forEach((country, index) => {
        const countryCard = createCountryCard(country);
        countryCard.style.animationDelay = `${index * 0.1}s`;
        countriesContainer.appendChild(countryCard);
    });
}

// Función para crear tarjeta de país
function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';
    
    // Obtener idiomas
    const languages = country.languages ? Object.values(country.languages) : [];
    const otherLanguages = languages.filter(lang => 
        !lang.toLowerCase().includes('spanish') && 
        !lang.toLowerCase().includes('español') &&
        !lang.toLowerCase().includes('castellano')
    );
    
    card.innerHTML = `
        <h3>${country.flag} ${country.name.official}</h3>
        
        <div class="country-info">
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'No disponible'}</p>
            <p><strong>Población:</strong> ${country.population ? country.population.toLocaleString() : 'No disponible'}</p>
            <p><strong>Región:</strong> ${country.region || 'No disponible'}</p>
            <p><strong>Subregión:</strong> ${country.subregion || 'No disponible'}</p>
        </div>
        
        <div class="languages-section">
            <h4>Idiomas oficiales:</h4>
            <div class="languages-list">
                ${languages.map(lang => {
                    const isSpanish = lang.toLowerCase().includes('spanish') || 
                                    lang.toLowerCase().includes('español') ||
                                    lang.toLowerCase().includes('castellano');
                    return `<span class="language-tag ${isSpanish ? 'spanish-tag' : ''}">${lang}</span>`;
                }).join('')}
            </div>
            ${otherLanguages.length > 0 ? `
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                    <strong>Otros idiomas además del español:</strong> ${otherLanguages.join(', ')}
                </p>
            ` : `
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                    <em>El español es el único idioma oficial</em>
                </p>
            `}
        </div>
    `;
    
    return card;
}

// Event listeners
retryBtn.addEventListener('click', fetchSpanishSpeakingCountries);

// Cargar países al cargar la página
document.addEventListener('DOMContentLoaded', fetchSpanishSpeakingCountries);

// Agregar funcionalidad de búsqueda (bonus)
function addSearchFunctionality() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        text-align: center;
        margin-bottom: 2rem;
    `;
    
    searchContainer.innerHTML = `
        <input type="text" id="search-input" placeholder="Buscar país..." 
               style="padding: 0.8rem 1.5rem; font-size: 1rem; border: none; 
                      border-radius: 25px; width: 300px; max-width: 90%;
                      box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
    `;
    
    const main = document.querySelector('.main');
    main.insertBefore(searchContainer, countriesContainer);
    
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const countryCards = document.querySelectorAll('.country-card');
        
        countryCards.forEach(card => {
            const countryName = card.querySelector('h3').textContent.toLowerCase();
            if (countryName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Agregar búsqueda después de cargar los países
setTimeout(addSearchFunctionality, 2000);
