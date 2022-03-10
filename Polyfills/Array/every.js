
Array.prototype.every = function (fun,argun)   {
         if(!(typeof fun == "function" || fun instanceof Function)){
            throw TypeError;    
          }
        var boll = [];
       for(let i =0; i < this.length; i++)
         boll.push(fun.call(argun,this[i],i,this))
        return boll.includes(false)?false:true;
 }
