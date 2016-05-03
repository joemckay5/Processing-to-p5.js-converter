/*
PtoP5JS is (C) 2016, Joseph McKay

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

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
