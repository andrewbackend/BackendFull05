/*
Implemente una clase genérica Cola<T> que simule el compartamiento de una estructura
de datos tipo cola (FIFO). Esta clase debe incluir las sgtes funcionalidades:

- Agregar elementos
- Quitar elementos
- Tamño
- Ver el frente
*/

class Cola<T> {
    private elementos: T[] = [];

    agregar(item: T): void {
        this.elementos.push(item);
    }

    quitar(): T | undefined {
        if (this.elementos.length === 0){
            console.log("La cola está vacía.");
            return undefined;
        }
        return this.elementos.shift(); 
    }

    tamaño(): number {
        return this.elementos.length;
    }

    verFrente(): T | undefined {
        return this.elementos[0]; 
    }
}

//Ejemplos de uso

const cola = new Cola<number>();
cola.agregar(10);
cola.agregar(20);
cola.agregar(30);

console.log("Frente de la cola: ", cola.verFrente()); //10
console.log("Tamaño de la cola: ", cola.tamaño()); //3

cola.quitar(); // Elimina 10
console.log("Nuevo frente: ", cola.verFrente()); // 20
console.log("Tamaño actualizado: ", cola.tamaño()); // 2