const theCallback = (theArray, limit)=>{
  const check = theArray.length <= limit;
  return theArray.length;
}

const createLimtedArray = (arrayLength)=>{
  const limtedArray = [];
  addPushEventListener(limtedArray, theCallback, arrayLength);
  return limtedArray;
}

function addPushEventListener(theArray, theCallback, limit){
  // change the push method
  theArray.push = (e)=> { 
  // call the normal push method and give it the item
  // apply something callback on array before push
  //if (theArray.length <= limit){return false;}
  Array.prototype.push.call(theArray, e);
  const arrLength = theCallback(theArray, e, limit);
  const acceptPush = (arrLength <= limit);
  if (!acceptPush){
    console.log("sorry array only accept " + limit + " items");
    theArray.pop();
  }
  // apply push or 
  };
}

let x = createLimtedArray(1);
console.log("---------------Array X----------------");
console.log("");
x.push("New X Item 1");
x.push("New X Item 2");
console.log(x);
console.log("--------------------------------------");
console.log("");

console.log("---------------Array Y----------------");
console.log("");
let y = createLimtedArray(3);
y.push("New Y Item 1");
y.push("New Y Item 2");
y.push("New Y Item 3");
y.push("New Y Item 4");
console.log(y);
console.log("--------------------------------------");
console.log("");
