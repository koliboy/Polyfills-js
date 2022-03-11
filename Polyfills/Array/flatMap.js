Array.prototype.flatMap = function(fun,arg){
    if(!(typeof fun == "function" || fun instanceof Function)){
            throw TypeError;    
          }
    var flat_M = this,new_JOb = []; 
     for(let i =0; i  < flat_M.length;i++){
         new_JOb.push(fun.call(arg,this[i],i,this));
         }      
     return new_JOb.flat();
}
