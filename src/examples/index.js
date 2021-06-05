const rig = require("../");

//default id
const id = rig();
console.log(id); //WrDxw27xyb_w@8UFTy_0TGfrR

//custom length
const id2 = rig({ length: 10 });
console.log(id2); //hh4-rRedj?

//no letters
const id3 = rig({ letters: "" });
console.log(id3); //!&0_5@978_

//no special chars
const id4 = rig({ specialChars: "" });
console.log(id4); //XAe7NSsz8p
