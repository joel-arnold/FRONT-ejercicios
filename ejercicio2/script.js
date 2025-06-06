// Modo oscuro con localStorage
const botonModoOscuro = document.getElementById('boton-modo');

// Verificar si hay preferencia guardada
const modoOscuroGuardado = localStorage.getItem('modo-oscuro');
if (modoOscuroGuardado === 'true') {
    document.body.classList.add('modo-oscuro');
    botonModoOscuro.textContent = '☀️ Modo Claro';
}

// Event listener para el botón de modo oscuro
botonModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
    
    // Cambiar texto del botón
    if (document.body.classList.contains('modo-oscuro')) {
        botonModoOscuro.textContent = '☀️ Modo Claro';
        localStorage.setItem('modo-oscuro', 'true');
    } else {
        botonModoOscuro.textContent = '🌙 Modo Oscuro';
        localStorage.setItem('modo-oscuro', 'false');
    }
});

// Funcionalidad para tachar habilidades
const skillsList = document.getElementById('skills-list');
const skillItems = document.querySelectorAll('.skill-item');

// Cargar estado de habilidades completadas
const skillsCompletadas = JSON.parse(localStorage.getItem('skills-completadas') || '[]');
skillItems.forEach((skill, index) => {
    if (skillsCompletadas.includes(index)) {
        skill.classList.add('completed');
    }
});

// Event listener para cada habilidad
skillItems.forEach((skill, index) => {
    skill.addEventListener('click', () => {
        skill.classList.toggle('completed');
        
        // Actualizar localStorage
        let skillsCompletadas = JSON.parse(localStorage.getItem('skills-completadas') || '[]');
        
        if (skill.classList.contains('completed')) {
            if (!skillsCompletadas.includes(index)) {
                skillsCompletadas.push(index);
            }
        } else {
            skillsCompletadas = skillsCompletadas.filter(i => i !== index);
        }
        
        localStorage.setItem('skills-completadas', JSON.stringify(skillsCompletadas));
    });
});

// Animación de entrada
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about-section, .skills-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
