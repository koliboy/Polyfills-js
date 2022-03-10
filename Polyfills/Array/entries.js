    
 Array.prototype.entries = function ()   {
     ENTRIES = [];
       for(let i =0; i < this.length; i++)
        ENTRIES.push([i,this[i]])
        return ENTRIES[Symbol.iterator]();
 }




/*  !Symbol Use This  code */
 Array.prototype.entries = function ()   {
     ENTRIES = [];
       for(let i =0; i < this.length; i++)
        ENTRIES.push([i,this[i]])
        return ENTRIES;
 }
/* for(enties of array) */
