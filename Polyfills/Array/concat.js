 Array.prototype.concat = function (){
       
        for(con_add of  Array.from(arguments)){
            if(con_add instanceof Array){
                for(c_2  of con_add)
                 this.push(c_2)
            }else this.push(con_add);
             
        }
        
         return this
   }
