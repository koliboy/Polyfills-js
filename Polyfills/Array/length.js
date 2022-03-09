Object.defineProperty(Array.prototype,"len",{
       get(){
            var step = 0;
         for(count of this)
            step++
            return step;
      },
    set(length){
          if(!isNaN(length)){
            var new_array = [];
            for(let  i = 0; i < length; i++){
                new_array.push(this[i]);           // old value
            }
              var childThis = []
          for(postion  of Object.keys( globalThis)){
            if(globalThis[postion] == this){        // foo == foo LIke
                 childThis.push(postion)}}           // LIke Other  global This global  other Example  a = foo; b ==  a;-> [foo,a,b] ;
          globalThis[childThis[0]] = new_array;  // foo Postion Change = []
          for(other_thisGlobals of childThis.slice(1)){
              globalThis[other_thisGlobals] =   globalThis[childThis[0]];  // Again Global  postion set   after ( a = foo , b = foo )New Postion Global Value
          }
        }
       
        
      }
     
 })  



 set(length){
          if(!isNaN(length)){
             
            for(let i =0; i < length; i++){
            for(postion  of Object.keys( globalThis)){
            if(globalThis[postion] == this){
                 
                globalThis[postion].slice(0,3)
            }
            
           }
          }
          
        }
       
        
      }


 var childThis = []
          for(postion  of Object.keys( globalThis)){
            if(globalThis[postion] == this){        // foo == foo LIke
                 childThis.push(postion)}}          // LIke Other  global This global  other Example  a = foo; b ==  a;-> [foo,a,b] ;
          globalThis[childThis[0]] = [1,2,,3,3,36];  // foo Postion Change = []
          for(other_thisGlobals of childThis.slice(1)){
              globalThis[other_thisGlobals] =   globalThis[childThis[0]];  // Again Global  postion set   after Example ( a = foo , b = foo )New Postion Global Value
          }
