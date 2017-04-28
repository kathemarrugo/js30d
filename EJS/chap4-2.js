function deepEqual(val1, val2){
  var result=true;
  if(typeof(val1)!=typeof(val2)){
    result= false;
  }else{
    if (typeof(val1) ==='object'){
      var ob1=  Object.keys(val1);
      var ob2=  Object.keys(val2);
      if(ob1.length!=ob2.length){
        result= false;
      }else{
        for(var i in val1){
          var auxResult=false;
          for(var j in val2){
            if (i===j){
              auxResult = deepEqual(val1[i], val2[j]);
              //console.log(val1[i], val2[j]);
            }
          }
          if(auxResult===false){
            result=false;
            break;
          }
        }
      }
    }else{
      if(val1===val2){
        //console.log(val1, val2);
        result= true;
      }else{
        result= false;
      }

    }
  }
  return result;
}
