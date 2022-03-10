 Array.prototype.at = function (index){
          if((isNaN(index)))
          return 1;
          else if( 0 < index) return this[index];
         else {
             var len = this.length;
             var this_resver=   len  += index; 
             return   this[this_resver]
         }
    }
