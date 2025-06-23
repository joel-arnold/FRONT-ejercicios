# 🚀 Ejercicios de HTML, CSS y JavaScript

Este repositorio contiene una serie de ejercicios prácticos para repasar y practicar conceptos fundamentales de desarrollo web frontend.

## 📁 Estructura del Proyecto

```
front-ejercicios/
├── ejercicio1/          # Maquetación básica con HTML y CSS
├── ejercicio2/          # Interacción con JavaScript
├── ejercicio3/          # Fetch y APIs
├── ejercicio5/          # Debugging y corrección de errores
└── README.md           # Este archivo
```

## 🎯 Ejercicios Incluidos

### **Ejercicio 1: Maquetación Básica**
- **Carpeta:** `ejercicio1/`
- **Objetivo:** Practicar estructura semántica, flexbox/grid y responsive design
- **Archivos:** `index.html`, `styles.css`
- **Características:**
  - Página de perfil de usuario completa
  - Diseño responsive
  - Uso de Flexbox y Grid
  - Estructura semántica HTML5

### **Ejercicio 2: Interacción con JavaScript**
- **Carpeta:** `ejercicio2/`
- **Objetivo:** Manipulación del DOM y eventos
- **Archivos:** `index.html`, `styles.css`, `script.js`
- **Funcionalidades:**
  - Modo oscuro con localStorage
  - Habilidades interactivas (clic para tachar)
  - Persistencia de preferencias
  - Animaciones CSS

### **Ejercicio 3: Fetch y APIs**
- **Carpeta:** `ejercicio3/`
- **Objetivo:** Consumir datos externos y renderizarlos
- **Archivos:** `index.html`, `styles.css`, `script.js`
- **Características:**
  - Consumo de REST Countries API
  - Filtrado de países de habla hispana
  - Manejo de estados de carga y error
  - Función de búsqueda
  - Diseño responsive con tarjetas

### **Ejercicio 5: Debugging y Corrección de Errores**
- **Carpeta:** `ejercicio5/`
- **Objetivo:** Identificar y corregir errores comunes
- **Archivos:** `index.html`, `styles.css`, `script.js`
- **Errores incluidos:**
  - Selectores CSS incorrectos
  - Variables JavaScript mal declaradas
  - Métodos y propiedades inexistentes
  - Typos en nombres de funciones
  - Uso incorrecto de APIs del DOM

## 🚀 Cómo usar estos ejercicios

### Opción 1: Abrir directamente
1. Navega a la carpeta del ejercicio que quieras probar
2. Abre el archivo `index.html` en tu navegador
3. ¡Listo! Ya podés ver el ejercicio funcionando

### Opción 2: Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en cualquier archivo `index.html`
3. Selecciona "Open with Live Server"
4. Dirigirse a http://localhost:5000/ejercicioX

### Opción 3: Servidor local
```bash
# Con Node.js:
npx http-server
# Otra alternativa, desde la carpeta raíz del proyecto:
python -m http.server 8080

# Después dirigirse a http://localhost:8080/ejercicioX
```

## 🔧 Para el Ejercicio 5 (Debugging)

### Pasos para completar el ejercicio:
1. Abre `ejercicio5/index.html` en tu navegador
2. Abre las **Herramientas del Desarrollador** (F12)
3. Ve a la pestaña **Console** para ver errores de JavaScript
4. Ve a la pestaña **Elements** para inspeccionar el CSS
5. Identifica y corrige los errores en los archivos
6. Recarga la página para verificar las correcciones

### Errores a buscar:
- ❌ Selectores CSS mal escritos
- ❌ Variables JavaScript no declaradas
- ❌ Métodos inexistentes
- ❌ Propiedades incorrectas
- ❌ IDs mal escritos
- ❌ Funciones con typos

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Responsive Design
- **JavaScript (ES6+)**: DOM Manipulation, Fetch API, LocalStorage
- **APIs Externas**: REST Countries API

## 📚 Conceptos Practicados

- ✅ Estructura HTML semántica
- ✅ CSS Flexbox y Grid
- ✅ Responsive Web Design
- ✅ Manipulación del DOM
- ✅ Event Listeners
- ✅ LocalStorage
- ✅ Fetch API y Promises
- ✅ Manejo de errores
- ✅ Debugging con DevTools

## 🤝 Git y Colaboración

Para el **Ejercicio 4** (Trabajo en Equipo):
```bash
# Clonar el repositorio
git clone [url-del-repo]

# Crear una nueva rama
git checkout -b feature/mi-mejora

# Hacer cambios y commits
git add .
git commit -m "Descripción de la mejora"

# Subir la rama
git push origin feature/mi-mejora

# Crear Pull Request para merge
```

## 🐛 Troubleshooting

### Problema: CORS al usar Fetch API
**Solución:** Usar un servidor local (ver instrucciones arriba)

### Problema: Los estilos no se aplican
**Verificar:** 
- Ruta correcta del archivo CSS
- Sintaxis de selectores CSS
- Cache del navegador (Ctrl+F5)

### Problema: JavaScript no funciona
**Verificar:**
- Consola del navegador para errores
- Ruta correcta del archivo JS
- Sintaxis de JavaScript

## 📞 Soporte

Si encuentras problemas:
1. Revisa la consola del navegador
2. Verifica que todos los archivos estén en las rutas correctas
3. Asegúrate de usar un servidor local para el Ejercicio 3