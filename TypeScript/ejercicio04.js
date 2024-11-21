/*
Implemente una función de tipo felcha llamada getAvenger que reciba los siguientes
parámetros:

- nombre (obligatorio): Una cadena que representa el nombre del vengador.
- poder (opcional): Una cadena que representa el poder especial del vengador
- arma (opcional, con valor por defecto "arco"): Una cadena que representa el arma
utilizada por el vengador.

La función debe retornar un mensaje de texto que describa al vengador, siguiendo
estas reglas:

Si el parámetro poder tiene un valor, el mensaje debe incluir el poder y el arma.
Si el parámetro poder no tiene un valor, el mensaje solo incluirá el nombre y un mensaje
indicando que el poder no está definido.

Mostrar el resultado usando console.log():

*/
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = "".concat(nombre, " tiene el poder de: ").concat(poder, " y un arma: ").concat(arma, " ");
    }
    else {
        mensaje = nombre + "tiene un " + poder;
        mensaje = "".concat(nombre, " tiene un: ").concat(poder);
    }
    return mensaje;
};
console.log(getAvenger("Spiderman", "", ""));
