 Array.prototype.findIndex = function (fun,arg){
     if(!(typeof fun == "function" || fun instanceof Function)){
            throw TypeError;    
          }
      
       for(let i =0; i < this.length; i++){
        if(fun.call(arg,this[i],i,this)){
            return i
        } 
       }
        
}


