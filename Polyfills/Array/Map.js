
 if( Array.prototype.map === undefined){
Array.prototype.map  = function(fun_,argu){
      
  
if(!(typeof fun_  == 'function' ||fun_ instanceof Function)){
            throw TypeError;
       }
         
     var mapping = [];
      for(let i = 0; i < this.length; i++){
     mapping.push(fun_.call(argu,this[i],i))  
       
      }
      
      return  mapping
   }
}
