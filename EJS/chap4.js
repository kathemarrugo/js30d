// The sum of a range
function range(str, end, stp){
 arg=[];
  if(arguments.length===2){
     for(i=str;i<=end;i++){
     	arg.push(i);
  	}
}else
  if(stp<0){
 	 for(i=end;i>=str;i+=stp){
     	arg.push(i);
  	}
  }
  else{
    for(i=str;i<=end;i+=stp){
     	arg.push(i);
  	}
}
	console.log(sum(arg));
 	return arg;
}

function sum (arg){
  aux=0;
 for(i=0;i<arg.length;i++){
     	aux+=arg[i];
  	}
  return 'suma = '+ aux;
}

console.log(range(2, 5,-1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
//console.log(sum(range(1, 10)));
// → 55

/*
Reversing an array
.*/
function reverseArray(arrayval){
  var lng = arrayval.length;
  var newArray = [];
  for (i=lng-1;i>=0;i--){
    //console.log(i);
    newArray.push(arrayval[i]);
   }
  return newArray;
}

function reverseArrayInPlace(arrayValue){
  var lng = arrayValue.length;
  for (i=lng-1;i>=0;i--){
    //console.log(i);
    arrayValue.push(arrayValue[i]);
   }
  var newlng = arrayValue.length;
  return arrayValue.slice(lng,newlng);
}

console.log(reverseArray( ["A", "B", "C"]));
// → ["C", "B", "A"];
/*var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);*/
console.log (reverseArrayInPlace(['kathe','ama a','edwin']));
// → [5, 4, 3, 2, 1]

/*A list*/
// Your code here.
function arrayToList(arrayValue){
  var lgn = arrayValue.length;
  var list ={};
  for (i=0;i<lgn;i++){
    list.value = arrayValue[i]
    list.rest = arrayToList(arrayValue.slice(i+1));
   }
   return list;
 }

function listToArray(listValue){
  var arrValue= [];
 return helper(arrValue, listValue);
 }

function helper(arr,listValue){
  if(listValue.rest!=null){
  arr.push(listValue.value);
  return  helper(arr, listValue.rest);
   }
  else{
  return arr;
  }

 }

function prepend(arr, val){
  var newArr = [];
  newArr.push(val);
  for (i=0; i <arr.length ;i++){
    newArr.push(arr[i]);
  }
  return newArr;
}


console.log(arrayToList([10, 20,30]));

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend([10, 20, 30], 770));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));*/
// → 20
