//CARACTERÍSTICAS PRINCIPALES 

//Tipo estático

let nombre: string = "Andrew";
let edad: number = 30;
let activo: boolean = true;

//Interfaces

interface Persona {
    nombre: string;
    edad: number;
}

const andrew: Persona = {nombre: "Andrew", edad: 30};

//Clases con modificadores de acceso (public, private y protected)

class Estudiante {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public saludar(){
        return `Hola, soy ${this.nombre}`;
    }
        
}

//Funciones tipadas

function sumar (a: number, b: number): number{
    return a+b;
}

//Enumeraciones (enum)

enum Color {
    Rojo,
    Verde,
    Azul
    
}

const colorFavorito: Color = Color.Verde;