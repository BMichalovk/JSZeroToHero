"use strict";

//Chapter 3-32  Stict mode
// Chapter 3-33 functions

function logger(logCode1, logCode2) {
  let logText = `This is logger code: ${logCode1} ${logCode2}`;
  return logText;
}
let logTextOut = logger("MCL", "KTT");
console.log(logTextOut);
