// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //take in different types of objects and return them as strings
  //take in a number and return it as a string
  if (typeof obj === 'number'){
    return obj.toString();
  }
  if(obj === null){
    return 'null';
  }
  if(obj === true){
    return obj.toString();
  }
  if(obj === false){
    return obj.toString();;
  }
  if (typeof obj === 'string'){
    return '"'+obj+'"';
  }
  if (Array.isArray(obj)){
    var results = [];
    for(var i = 0; i < obj.length; i++){
      results.push(stringifyJSON(obj[i]));
    }
    return '['+results.join(',')+']'; //recursion inside of it
  }
  if (typeof obj === 'object'){
    var results = [];
     //if statement

        //=== function & keys undefined
    for(var key in obj){
      if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){
        return '{}';
      }
      stringifyJSON(key);
      stringifyJSON(obj[key]);
      results.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
    }
    return '{'+results.join(',')+'}'; //recursion inside of it
  }
};
