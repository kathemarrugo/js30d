/* Pregunta: pq funciona si lo enviado no es un array si no un JSON?

Funcion Filter()
Se llama con un array adelante, y se le envia como parametro la funciona que fuiltrará los elementos
La funcion retorna un nuevo array, solo con los elementos que coninciden con la condicion dada en la fucnion.
ejemplo:
  array.filter(funcion);

  array.filter(function{
  return array.elemento1 ="Algo";
});

funcion Map ()
Se llama con un array adelante o pasandose como parametro; Se envia una funcion como parametro que indicará
el proceso que ha de hacerse a los elementos del array. Retorná un nuevo array con los resultados que arroje la funcion.

ejemplo:
array.map(funcion);
var numeros= [1, 4, 9];
var raices = numeros.map(Math.sqrt);
Devolverá un nuevo array cuyos elementos corresponden a la raiz cuadrada de cada uno de los elementos del array.

Funcion Reduce()
La funcion reduce, Realiza operaciones sobre el array con el fin de retornar un unico valor.
Se llama con varios parametro - el array a operar,la funcion q desribe la operacion a realizar y posicion inicial. Si no se envia
la posicion final, se toma la cero.
Se puede utilizar para buscar un valor dentro de un array, comparando valores... Retorna un solo valor

su sintaxis es la siguiente:
reduce(array, funcion, inicio) o array.reduce( funcion, inicio);



[
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"},
  … and so on
]
Mother-child age difference*/

function plus(a, b) {
  return a + b;
}
function average(array) {
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function ages(data){
    var aux = [];
    var wmother = data.filter(function(array){
    	return byName[array.mother]!=null;
      });
    wmother.forEach(function(valu){
        var bson = valu.born;
        var bmom = byName[valu.mother].born;
        var age = bson - bmom;
        aux.push(age);
     });
  return aux;
}
console.log(average(ages(ancestry)));

// Your code here.

// → 31.2
