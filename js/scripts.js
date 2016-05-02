function pFunk(feelIt) {
  var str = document.getElementById("input").value;
  var str1 = str.replace(/new float\[(\w+)]/g, "new Array($1)")
  .replace(/new float \[(\w+)]/g, "new Array($1)")
  .replace(/new int\[(\w+)]/g, "new Array($1)")
  .replace(/new int \[(\w+)]/g, "new Array($1)")
  .replace(/new PImage\[(\w+)]/g, "new Array($1)")
  .replace(/new PImage \[(\w+)]/g, "new Array($1)")
  .replace(/new boolean\[(\w+)]/g, "new Array($1)")
  .replace(/new boolean \[(\w+)]/g, "new Array($1)")
  .replace(/new PVector\((\w+,.\w+)\)/g, "createVector($1)")
  .replace(/new PVector \((\w+,.\w+)\)/g, "createVector($1)")
  .replace(/(int|float|PImage|boolean) ?\[\]/g, "var")
  .replace(/int|float|boolean|String|Char|PImage|long|PVector/g, "var")
  .replace(/size/g, "createCanvas")
  .replace(/void/g, "function")
  .replace(/(push)Matrix|(pop)Matrix/g, "$1$2")
  .replace(/(push)Style|(pop)Style/g, "$1$2")
  .replace(/mousePressed/g, "mouseIsPressed")
  .replace(/mouseIsPressed\(\)/g, "mousePressed()")
  .replace(/frameRate/g, "frameRate()")
  .replace(/myVar/g, "mothership_connection")
  ;
  str1 += "\n//Free your mind and your ass will follow - George Clinton";

  document.getElementById("output").value = str1;
}


function clipboard()
{
  output.select();
}
