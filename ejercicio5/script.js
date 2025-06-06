// Variables globales
let operacionActual = '';
let historial = [];

// ERROR 1: Variable no declarada correctamente
resultado = document.getElementById('resultado');
const listaHistorial = document.getElementById('lista-historial');

// Función para agregar números/operadores
function agregar(valor) {
    // ERROR 2: Uso incorrecto de innerHTML en lugar de value para input
    resultado.innerHTML += valor;
    operacionActual += valor;
}

// Función para limpiar
function limpiar() {
    resultado.value = '';
    operacionActual = '';
}

// Función para borrar último carácter
function borrar() {
    let valorActual = resultado.value;
    resultado.value = valorActual.slice(0, -1);
    operacionActual = resultado.value;
}

// ERROR 3: Función con nombre mal escrito y lógica incorrecta
function calclar() {
    try {
        // ERROR 4: eval es peligroso pero aquí hay otro error - paréntesis mal cerrados
        let resultadoCalculo = eval(operacionActual);
        
        // ERROR 5: Acceso incorrecto a propiedad
        resultado.valor = resultadoCalculo;
        
        // Agregar al historial
        agregarAlHistorial(operacionActual + ' = ' + resultadoCalculo);
        
        operacionActual = resultadoCalculo.toString();
    } catch (error) {
        // ERROR 6: Método inexistente
        resultado.setValue('Error');
        operacionActual = '';
    }
}

// ERROR 7: Nombre de función incorrecto (debería ser calcular, no calclar)
function calcular() {
    calclar(); // Llamada a función mal nombrada
}

// Función para agregar al historial
function agregarAlHistorial(operacion) {
    historial.push(operacion);
    
    const li = document.createElement('li');
    li.textContent = operacion;
    
    // ERROR 8: ID mal escrito
    document.getElementById('lista-historal').appendChild(li);
    
    // ERROR 9: Acceso a propiedad inexistente
    if (listaHistorial.childrenCount > 10) {
        listaHistorial.removeChild(listaHistorial.firstChild);
        historial.shift();
    }
}

// Función para limpiar historial
function limpiarHistorial() {
    historial = [];
    // ERROR 10: Método inexistente
    listaHistorial.removeAllChildren();
}

// ERROR 11: Event listener mal implementado
document.addEventListener('DOMContentLoaded', function() {
    // ERROR 12: Acceso incorrecto a evento
    document.addEventListener('keypress', function(evento) {
        const tecla = evento.key;
        
        if (tecla >= '0' && tecla <= '9') {
            agregar(tecla);
        } else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
            agregar(tecla);
        } else if (tecla === 'Enter' || tecla === '=') {
            // ERROR 13: Función inexistente
            realizarCalculo();
        } else if (tecla === 'Escape') {
            limpiar();
        } else if (tecla === 'Backspace') {
            borrar();
        }
    });
});

// ERROR 14: Función no definida anteriormente pero llamada
function realizarCalculo() {
    calcular();
}

// ERROR 15: Función con sintaxis incorrecta
function mostrarInfo() {
    // ERROR 16: Método inexistente
    console.información('Calculadora iniciada correctamente');
    
    // ERROR 17: Variable no definida
    if (calculadoraIniciada) {
        console.log('Todo funcionando');
    }
}
