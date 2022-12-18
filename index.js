function myEach(collection, callback) {

    if (Array.isArray(collection)) {
      
      for (let i = 0; i < collection.length; i++) {
    
        callback(collection[i]);
      }
    } else if (typeof collection === "object") {
      
      const values = Object.values(collection);
      
      for (let i = 0; i < values.length; i++) {
        
        callback(values[i]);
      }
    }
    
    return collection;
  }
  function myMap(collection, callback) {
    const mapped = [];
    
    if (Array.isArray(collection)) {
      
      for (let i = 0; i < collection.length; i++) {
        
        mapped.push(callback(collection[i]));
      }
    } else if (typeof collection === "object") {
     
      const values = Object.values(collection);
      
      for (let i = 0; i < values.length; i++) {
    
        mapped.push(callback(values[i]));
      }
    }
    
    return mapped;
  }
 
  function myReduce(collection, callback, initialValue) {

    if (Array.isArray(collection)) {
     
      for (let i = 0; i < collection.length; i++) {
  
        if (initialValue) {
          initialValue = callback(initialValue, collection[i]);
        } else {
     
          initialValue = callback(collection[i], collection[i + 1]);
         
          i++;
        }
      }
    } else if (typeof collection === "object") {
      
      const values = Object.values(collection);
      
      for (let i = 0; i < values.length; i++) {
        
        if (initialValue) {
          initialValue = callback(initialValue, values[i]);
        } else {
         
          initialValue = callback(values[i], values[i + 1]);
        
          i++;
        }
      }
    }
  
    return initialValue;
  }
  



  function myFilter(collection, callback) {
   
    const filtered = [];
   
    if (Array.isArray(collection)) {

      for (let i = 0; i < collection.length; i++) {
  
        if (callback(collection[i])) {
          filtered.push(collection[i]);
        }
      }
    } else if (typeof collection === "object") {
     
      const values = Object.values(collection);
     
      for (let i = 0; i < values.length; i++) {
     
        if (callback(values[i])) {
          filtered.push(values[i]);
        }
      }
    }
   
    return filtered;
  }

  

  function myFind(collection, callback) {
    
    
    if (Array.isArray(collection)) {
      
      for (let i = 0; i < collection.length; i++) {
        
        if (callback(collection[i])) {
    
        return collection[i];
      }
    }
    
    }
    else if (typeof collection === "object") {
     
        const values = Object.values(collection);
    
        for (let i = 0; i < values.length; i++) {
         
          if (callback(values[i])) {
            return values[i];
          }
        }
      }
      
      return undefined;
    
  }
  
function myFirst(array, n) {
  
    if (n === undefined) {
      return array[0];
    }

    return array.slice(0, n);
  }
  
  function myLast(array, n) {
    
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }

  function myKeys(collection) {
   
    if (Array.isArray(collection)) {
      
      return undefined;
    } else if (typeof collection === "object") {

      const keys = Object.keys(collection);
      
      return keys;
    }
   
    return undefined;
  }
  function myValues(collection) {
    
    if (Array.isArray(collection)) {
      
      return undefined;
    } else if (typeof collection === "object") {
     
      const values = Object.values(collection);
      
      return values;
    }
    
    return undefined;
  }

  function mySize(collection) {
   
    if (Array.isArray(collection)) {
   
      return collection.length;
    } else if (typeof collection === "object") {
     
      const values = Object.values(collection);
    
      return values.length;
    }
   
    return undefined;
  }