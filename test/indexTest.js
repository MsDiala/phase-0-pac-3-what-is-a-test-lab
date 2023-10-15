require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeGreaterThan(0);  // Changed to beGreaterThan
      expect(height).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toContain(name);  // Changed to toContain
      expect(message).toContain(height);  // Changed to toContain
    });
  });
});
