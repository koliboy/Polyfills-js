 Array.prototype.fill = function ()  {
     var [val,start,end] = [  arguments[0],
          arguments[1] ?? 0, arguments[2] ??this.length];
         if(start < 0){
             let r = this.length;
             start = r+= start;
         }else if (end < 0){
             let r_2 = this.length;
             end = r_2 +=end;
         }
         for(let i = start; i < end; i++)
          this[i] =val;
         return this;
 }    
 
