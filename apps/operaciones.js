"use strict";
class operacion {
    constructor() {
        this.resultado = 0;
        this.valorA = 0;
        this.valorB = 0;
    }
    set ValorA(value) {
        this.valorA = value;
    }
    set ValorB(value) {
        this.valorB = value;
    }
    get Resultado() {
        return this.resultado;
    }
}
class suma extends operacion {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}
class resta extends operacion {
    Resta() {
        this.resultado = this.valorA - this.valorB;
    }
}
class producto extends operacion {
    Producto() {
        this.resultado = this.valorA * this.valorB;
    }
}
let operacion_suma = new suma();
operacion_suma.valorA = 10;
operacion_suma.valorB = 10;
operacion_suma.Sumar();
console.log("el resutado de sumar es: " + operacion_suma.Resultado);
let operacion_resta = new resta();
operacion_resta.valorA = 25;
operacion_resta.valorB = 10;
operacion_resta.Resta();
console.log("el resutado de restar es: " + operacion_resta.Resultado);
let operacion_multi = new producto();
operacion_multi.valorA = 100;
operacion_multi.ValorB = 2;
operacion_multi.Producto();
console.log("el resutado de multiplicar es: " + operacion_multi.Resultado);
