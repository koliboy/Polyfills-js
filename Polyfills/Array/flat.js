function flat (arry)  {
   
  for( let  i = 0;
       i < 1; i++
      
){
  for(c of arry){
     if(c instanceof Array){
        if(count > 0) { document.console = count > 0
            count--
            flat(c)
        }else{
          b.push(c)  
        }  
     }else {
        b.push(c)
     }
  }
 }
}  
