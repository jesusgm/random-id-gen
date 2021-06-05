const configuration = {
  prefix: "",
  sufix: "",
  length: 25,
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChars: "-_+!&@%=¿?¡!",
};

const generateId = ({
  prefix = configuration.prefix,
  sufix = configuration.sufix,
  length = 10,
  letters = configuration.letters,
  numbers = configuration.numbers,
  specialChars = configuration.specialChars,
} = configuration) => {
  const allChars = `${letters}${numbers}${specialChars}`.split("");

  const newId = [];

  for (i = 0; i < length; i++) {
    const rndInt = Math.floor(Math.random() * allChars.length);
    newId.push(allChars[rndInt]);
  }

  return `${prefix ? prefix + "-" : ""}${newId.join("")}${
    sufix ? "-" + sufix : ""
  }`;
};

module.exports = generateId;
