var persona = /** @class */ (function () {
    function persona(un_Nom) {
        this.nombre = un_Nom;
        this.miedad(21);
    }
    persona.prototype.miedad = function (años) {
        this.edad = años;
        console.log("Tengo " + this.edad + "Años");
    };
    return persona;
}());
var martin = new persona("martin");
