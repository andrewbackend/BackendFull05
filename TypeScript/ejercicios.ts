/*
01.-
Implementa un tipo genérico llamado SoloCadena<T> que transforme las propiedades de 
un tipo dado T:

- Si una propiedad de T es de tipo string, su tipo debe permanecer como string.
- Si una propuedad de T no es de tipo string, debe conservar su tipo original.

Además:
Crear una interfaz llamada Usuario con las sgtes propiedades:
- nombre
- edad
- activo

Utilice el tipo gen+erico SoloCadena<T> para crear un nuevo tipo llamado UsuarioSoloCadena basado en la 
interfaz Usuario.
Crear un objeto de tipo UsuarioSoloCadena donde:
- Las propiedades que son cadenas en la interfaz original (nombre) sigan siendo cadenas.
- Las propiedades que no con cadenas (edad, activo) conserven sus tipos originales.

*/


/*
02.-
Crea una función que reciba un DNI(8 números) y calculque la ltra del DNI

Es un proceso matemático fácil que se basa en obtener el resto de la división
entera del número de DNI y el número 23.
Y con el resto se obtiene la letra, susandolo como posición o índice dentro
de un array de letras.

Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
'B', 'N', 'J','Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/