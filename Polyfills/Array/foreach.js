Array.prototype.forEach = function(fun,arg){
    if(!(typeof fun == "function" || fun instanceof Function)){
            throw TypeError;    
          }
   for(let i =0; i  < this.length; i++){
       fun.call(arg,this[i],i,this);
   }
}
