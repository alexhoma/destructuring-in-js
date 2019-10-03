# Destructuring in JS

## Slides 
https://docs.google.com/presentation/d/1eTWamc8MFbP-B_MvX8mJLHBdtGzj1b-Yw7SdRuIQjsU/edit#slide=id.g61f2ea7b6c_1_150

## Objetivo
Lo que se persigue con esta presentación es desmitificar el destructuring en JavaScript y ganar confianza, tanto cuando nos encontremos su uso en código ya existente, como para usarlo en nuevas implementaciones, adquiriendo así una poderosa herramienta que nos ofrece el lenguaje.

## Temas 
* [¿Qué es el ‘destructuring’?](#que)
* [¿Dónde puedo usarlo?](#donde)
* [Array and Object destructuring](#array-and-object)
* [Rest syntax](#rest)
* [Spread syntax](#spread)
* [Recursos](#resources)

## ¿Qué es el ‘destructuring’?<a name="que"></a>
Destructuring es desmenuzar una estructura de datos en los diferentes elementos que contiene para trabajar con ellos por separado.

En el caso de JavaScript, a partir de ES6 (EcmaScript 2015), podemos desempaquetar los valores de `Arrays` o propiedades de `Objects` en distintas variables.

Si hasta ahora teníamos que extraer estos valores o propiedades una a una en distintas variables:
```javascript
const array = ['one', 'two', 'three'];
const a = array[0];
const b = array[0];
const c = array[0];

console.log(a, b, c);
// one two three
```
Con destructuring el código queda mucho más pequeño y, si comprendemos la sintaxis, sencillo:
```javascript
const array = ['one', 'two', 'three'];
const [a, b, c] = array;

console.log(a, b, c);
// one two three
```

A día de hoy la mayor parte de los navegadores modernos ya soportan esta sintaxis, pero siempre podemos hacer polyfilling mediante el uso de [Babel](https://babeljs.io/).

## ¿Dónde puedo usarlo?<a name="donde"></a>

Podemos usar el destructuring para:

### Declaración de variables
```javascript
const a= ['one'];

console.log(a);
// one
```
### Asignación de variables
```javascript
let a;
a= ['one'];

console.log(a);
// one
```
### Definición de parámetros de funciones
```javascript
const f = ([x]) => x;

console.log(f(['one']));
// one
```

## Array and Object destructuring<a name="array-and-object"></a>
[Ver ejemplos](./index.js)

## Rest syntax<a name="rest"></a>
Aplicada el destructuring puede entenderse como un método para condensar en un `Array` o `Objeto`, según sea el caso, el resto de valores o propiedades una vez hemos ´destructurado´ aquellas que queríamos obtener de manera arbitraria.
```javascript
const [a, b, c, ...other] = ['A', 'B', 'C', 'D', 'E', 'F'];

console.log(a, b, c, other);
// A B C ['D', 'E', 'F']
```

Ésta misma sintaxis la encontramos en el `rest parameter` de funciones, dónde podemos condensar en un `Array` un número indeterminado de argumentos:

```javascript
function generaBocata(bread, ...ingredients) {
  console.log(bread, ingredients);
}

generaBocata('chapata', 'lomo', 'queso', 'cebolla);
// 'chapata', ['lomo', 'queso', 'cebolla']
```

[Ver ejemplos](./index.js)

## Spread syntax<a name="spread"></a>
A diferencia de la rest syntax, a pesar de seguir la misma convención (los `...`), su efecto es muy distinto, así que es importante entender cómo funciona para evitar confusiones.

La spread syntax permite expandir un objeto iterable como un `Array` o un `String` en casos donde se esperan cero o más argumentos (en el caso de llamadas a funciones):
```javascript
function sum(a, b) {
  return a + n;
}

const args = [2, 3];

console.log(sum(...args));
// 5
```

O elementos (para `Arrays`):
```javascript
const iterable = [1, 2 ,3]
console.log([...iterable, 3, 4, 5]);
// [1, 2, 3, 4, 5]
```

O en el caso de `Objects` expandirlos en casos donde se esperan cero o más pares clave-valor:
```javascript
const object = { name: 'Pepe', age: 33 }
console.log({...object, lastName: 'Pérez' });
// { name: 'Pepe', age: 33, lastName: 'Pérez' }
```

[Ver ejemplos](./index.js)

## Recursos<a name="resources"></a>

* [Capítulo de destructuring](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/es-next-beyond/ch2.md#destructuring) del libro ‘ES6 and Beyond’ de la colección ‘You don’t know JavaScript’ de Kyle Simpson
* [Capítulo de destructuring](https://exploringjs.com/impatient-js/ch_destructuring.html) y la [sección de ‘param handling’](https://exploringjs.com/impatient-js/ch_callables.html#parameter-handling) del libro ‘JavaScript for impatient programmers’ de Axel Rauschmayer.
* Documentación de Mozilla de [destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/), [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) y [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
