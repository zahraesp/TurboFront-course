let obj = require("./data");
console.log(obj);

function findKey(object, path) {
  var props = [];

  for (let key in object) {
    if (
      object[key] === null ||
      object[key] === undefined
      //   typeof object[key] === "object")
    ) {
      props.push(path + ' ---> ' + key);
      console.log(key);
    }
    
    else if (object[key] instanceof Object) {
      props.push.apply(props, findKey(object[key], path + ' ---> ' + key ));
    }
   
  }
  return props;
}
var path = findKey(obj, 'KEYS: ');
console.log(path);
