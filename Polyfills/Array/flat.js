Array.prototype.flat = function(depth){
    var b = this, depth_ = depth ?? 1;      
        
let i = 0;
do{
  i++
  cutter();
}while( i !=depth_);

function cutter(){
   let  New_JOb = [];
for(
     a of b
){
       if(a instanceof Array){
           a.forEach(function(el){
               New_JOb.push(el)
           });
       }else if(!( typeof  a == 'undefined')) {
         New_JOb.push(a)  
       }
     }
     b = New_JOb;
}    
 return b       
}
 
 
