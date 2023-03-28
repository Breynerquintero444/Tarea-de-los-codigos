function sumArray(array, n) {
    let arrayB = array.sort(() => Math.random() - 0.5)
    let result = [];
    for (let index = 0; index < arrayB.length; index++) {
     var arrayb = arrayB[index];
    }
  
    for(let i = 0; i < array.length; i++){
      if(array[i] === arrayb){
        return false;
      }else{
        result[i] = parseint(array[i])+parseint(arrayb);
      }
    }
    for (let e = 0; e < result.length; e++) {
      if(result[e] === n){
        return true;
      }else{
        return false;
      } 
    }
  };
  