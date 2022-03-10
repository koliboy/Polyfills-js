Array.prototype.filter = function (fun,arg){
     if(!(typeof fun == "function" || fun instanceof Function)){
            throw TypeError;    
          }
         FILTER = [];
       for(let i =0; i < this.length; i++){
        if(fun.call(arg,this[i],i,this)){
             FILTER.push(this[i])
        } 
       }
        return FILTER;
}
