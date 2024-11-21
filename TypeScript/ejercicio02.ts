/*
Crea una interfaz llamada LigaJusticia que represente a un personaje miembro
de la liga de la justicia.

    - nombre: una cadena de texto que almacene el nombre del personaje.
    - artesMarciales: un arreglo de cadenas que liste las artes marciales que 
    domina el personaje.
    - Implementar un objeto llamado batman que cumpla con la interfaz LigaJusticia.

    Mostrar el objeto batman en la consola utilizando console.log()
*/

interface LigaJusticia{
    nombre:string;
    artesMarciales:string[];
}

let batman:LigaJusticia = {
    nombre: "Andrew Torres",
    artesMarciales: ["Karate", "Wing Chung", "Aikido"]
}

console.log(batman);

