// alerta de bienvenida
let alertaBienvenida = alert('Hola! Bienvenido al Restaurante Coderhouse.');
// instrucciones de uso
let alertaExplicacion = alert('Para realizar un nuevo pedido, elegida el número correspondiente al nº del producto que desea comprar.');
let opcionElegida;
let comprarOtraVez = 'no';

// menu disponible
let menuUno = 'Pizzas';
let menuUnoPrecio = 550;

let menuDos = 'Hamburguesas';
let menuDosPrecio = 350;

let menuTres = 'Gaseosas';
let menuTresPrecio = 200;

let pedido;
let total;

// DO WHILE que ejecuta al menos 1 vez el bloque de codigo
do {
    // muestra el menu disponible
    opcionElegida = parseInt(prompt('Menú\nnº1: Pizzas $550.\nnº2: Hamburguesas $350.\nnº3: Gaseosas $200.'));

    // condicional IF que comprueba que el valor que ingreso el usuario sea un numero menor o igual a 3
    if ((opcionElegida != '') && (opcionElegida <= 3)) {

        // si el numero que ingresa el usuario coincide con un numero del menu, se ejecuta el switch
        switch (opcionElegida) {
            case 1:
                pedido = prompt('¿Cuantas ' + menuUno + ' desea comprar?');

                if ((pedido != '') && (pedido > 0)) {
                    total = pedido * menuUnoPrecio; 
                    alert('El total a pagar es de $' + total)

                } else {
                    alert('Por favor, ingrese el número de ' + menuUno + ' que desea comprar (al menos una)')
                }  
    
                break;

            case 2:
                pedido = prompt('¿Cuantas ' + menuDos + ' desea comprar?');

                if ((pedido != '') && (pedido > 0)) {
                    total = pedido * menuDosPrecio; 
                    alert('El total a pagar es de $' + total)

                } else {
                    alert('Por favor, ingrese el número de ' + menuDos + ' que desea comprar (al menos una)')
                }

                break;

            case 3:
                pedido = prompt('¿Cuantas ' + menuTres + ' desea comprar?');

                if ((pedido != '') && (pedido > 0)) {
                    total = pedido * menuTresPrecio; 
                    alert('El total a pagar es de $' + total)

                } else {
                    alert('Por favor, ingrese el número de ' + menuTres + ' que desea comprar (al menos una)')
                }  
    
                break;
        }

    // si el numero que ingreso el usuario no coincide con ninguno del menu (es un 0, una letra, etc) se muestra una alerta
    } else {
        alert('Por favor, ingrese un número del 1 al 3 y vuelva a intentarlo.')
    }

    // se pregunta al usario si desea hacer otra compra. Si ingresa "si", el DO WHILE se repetira, de lo contrario termina la ejecución.
    comprarOtraVez = prompt('¿Desea ingresar una nueva compra? (Ingrese "si" para continuar).');
} while (comprarOtraVez == 'si');