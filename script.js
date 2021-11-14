"use strict";

const arr = [1,2,3,6,8];

arr[99] = 0;

console.log(arr.length);

console.log(arr);

//[Running] node "w:\КУРС ДЖАВА СКРИПТ\1\18 MASSIVI_PSEYDOMASSIVI\tempCodeRunnerFile.js"
//100
//[ 1, 2, 3, 6, 8, <94 empty items>, 0 ]



