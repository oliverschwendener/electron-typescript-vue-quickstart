import { add } from "./core";

describe(add.name, () => {
    it("should add two numbers", () => expect(add(1, 2)).toBe(3));
});
