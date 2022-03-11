Array.from = function(array,fun,arg){
      var new_JOB = [];
         if(array[Symbol.iterator]){
             for(let i = 0 ; i < array.length;i++){
                 if(fun instanceof Function){
                    new_JOB.push(fun.call(arg,array[i],i,array))
                 } else {
                     new_JOB.push(array[i])
                 }
             }
         }
         return new_JOB;
}
