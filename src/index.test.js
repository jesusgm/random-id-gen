const rig = require("./");

describe("Random-Identifier-Generator", () => {
  test("Add prefix al begining", () => {
    const id = rig({ prefix: "prefix" });
    const regex = /^prefix-.*$/;
    expect(id).toMatch(regex);
  });

  test("Add sufix at the end", () => {
    const id = rig({ sufix: "sufix" });
    const regex = /^.*-sufix$/;
    expect(id).toMatch(regex);
  });

  test("Generate id with custom length", () => {
    const id = rig({ length: 3 });
    const id2 = rig({ length: 15 });
    const id3 = rig({ length: 40 });

    expect(id.length).toBe(3);
    expect(id2.length).toBe(15);
    expect(id3.length).toBe(40);
  });

  test("Generate id with only letters", () => {
    const id = rig({ length: 40, numbers: "", specialChars: "" });
    const regex = /^[a-zA-Z]*$/;
    expect(id).toMatch(regex);
  });

  test("Generate id with only numbers", () => {
    const id = rig({ length: 40, letters: "", specialChars: "" });
    const regex = /^[0-9]*$/;
    expect(id).toMatch(regex);
  });

  test("Generate id with special chars", () => {
    const id = rig({ length: 40, letters: "", numbers: "" });
    const regex = /^[-_+!&@%=¿?¡!]*$/;
    expect(id).toMatch(regex);
  });
});
