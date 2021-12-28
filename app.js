let theNum = 0;
let add = () => {
   theNum = theNum + 1;
   document.getElementById("number").innerHTML = theNum;
   console.log(theNum);
}

let reset = () => {
   theNum = 0
   document.getElementById("number").innerHTML = theNum;
}
let reduce = () => {
   theNum = theNum - 1;
   document.getElementById("number").innerHTML = theNum;
   if (
      theNum < 0
      ) {
      document.getElementById("number").innerHTML = 0;
      alert("Can not go less than zero");
   }
}