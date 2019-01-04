var xx = require("./numberText");
var count = require("./count");

xx.readtext("231");
var yy = count.coins("1811");

console.log(yy);

yy.forEach((itm)=>{
    console.log('เหรียญ ' + itm.val + ' ได้ ' + itm.qty + ' เหรียญ');
})