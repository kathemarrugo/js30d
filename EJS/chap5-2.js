function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function age(p) { return p.died - p.born; }

function lifeExpec(array,cntur){
 // console.log(array.died/100);
  return (Math.ceil(array.died/100)) == cntur;
}

function centuryList(array){
  var list = [];
  array.forEach(function(person){
  	var exp= Math.ceil(person.died/100);
      	if(list.indexOf(exp)==-1){
          list.push(exp);
      }
  });
  return list
 }

function final(array, century){
  var exObject = {};
  century.forEach(function(centu){
    exObject[centu]= average(array.filter(lifeExpec).map(age));
  });

 return exObject;
}


console.log(final(ancestry,centuryList(ancestry)));
//console.log(ancestry.filter(lifeExpec));
// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

/*Opcion 2
Crear un nuevo objeto solo con dos valores : la decada y la edaad
El nuevo objeto, 

*/
