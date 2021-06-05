# random-id-gen

Generate a random id with customizable prefix, sufix, length and chars

## Instalation

```bash
    npm install random-id-gen --save
```

## Use

```javascript
const id = rig(config);
```

Config is a object with the next default values:

```json
{
  "prefix": "",
  "sufix": "",
  "length": 25,
  "letters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "numbers": "0123456789",
  "specialChars": "-_+!&@%=¿?¡!"
}
```

You can combine as you want

## Examples of use

```javascript
import rig from "random-id-gen";

//default id
const id = rig();
console.log(id); //WrDxw27xyb_w@8UFTy_0TGfrR

//custom length
const id = rig({ length: 10 });
console.log(id); //hh4-rRedj?

//no letters
const id = rig({ letters: "" });
console.log(id); //!&0_5@978_

//no special chars
const id = rig({ specialChars: "" });
console.log(id); //XAe7NSsz8p
```
