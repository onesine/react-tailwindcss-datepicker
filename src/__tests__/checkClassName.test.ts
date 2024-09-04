import { describe, expect, test, jest } from "@jest/globals";

import { checkClassName } from "../helpers";

describe("checkClassName", () => {
    const defaultClassName = "default-class";

    test("should return result of toggleClassName function when it is a function", () => {
        const toggleFunction = jest.fn(() => "custom-class");
        const result = checkClassName(defaultClassName, toggleFunction);
        expect(result).toBe("custom-class");
        expect(toggleFunction).toHaveBeenCalledWith(defaultClassName);
    });

    test("should return toggleClassName when it is a non-empty string", () => {
        const result = checkClassName(defaultClassName, "custom-class");
        expect(result).toBe("custom-class");
    });

    test("should return defaultToggleClassName when toggleClassName is an empty string", () => {
        const result = checkClassName(defaultClassName, "");
        expect(result).toBe(defaultClassName);
    });

    test("should return defaultToggleClassName when toggleClassName is null", () => {
        const result = checkClassName(defaultClassName, null);
        expect(result).toBe(defaultClassName);
    });

    test("should return defaultToggleClassName when toggleClassName is undefined", () => {
        const result = checkClassName(defaultClassName, undefined);
        expect(result).toBe(defaultClassName);
    });
});
