import { describe, expect, test } from "@jest/globals";

import { clearInvalidInput } from "../helpers";

describe("clearInvalidInput", () => {
    test("should return the same string if the last character is numeric", () => {
        const input = "1234";
        const result = clearInvalidInput(input);
        expect(result).toBe("1234");
    });

    test("should remove the last character if it is non-numeric", () => {
        const input = "1234a";
        const result = clearInvalidInput(input);
        expect(result).toBe("1234");
    });

    test("should return an empty string if the input is a single non-numeric character", () => {
        const input = "a";
        const result = clearInvalidInput(input);
        expect(result).toBe("");
    });

    test("should return an empty string if the input is empty", () => {
        const input = "";
        const result = clearInvalidInput(input);
        expect(result).toBe("");
    });

    test("should handle multiple non-numeric characters at the end by removing only the last one", () => {
        const input = "1234abc";
        const result = clearInvalidInput(input);
        expect(result).toBe("1234ab");
    });

    test("should return the same string if all characters are numeric", () => {
        const input = "9876543210";
        const result = clearInvalidInput(input);
        expect(result).toBe("9876543210");
    });

    test("should correctly handle a string with special characters at the end", () => {
        const input = "1234#";
        const result = clearInvalidInput(input);
        expect(result).toBe("1234");
    });

    test("should correctly handle a string with spaces at the end", () => {
        const input = "1234 ";
        const result = clearInvalidInput(input);
        expect(result).toBe("1234");
    });
});
