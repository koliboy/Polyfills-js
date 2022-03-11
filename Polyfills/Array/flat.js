var b= [0,1,[1,2,3,3],[1,2,3,4,4,5]
    ];
 for(let i = 0; i !=1;i++){
      cutter()
 }
   
function cutter(){
   let  New_JOb = [];
     for(a of b){
       if(a instanceof Array){
           a.forEach(function(el){
               New_JOb.push(el)
           })
       }else {
         New_JOb.push(a)  
       }
     }
     b = New_JOb;
}
 
