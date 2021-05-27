const { expect } = require("@jest/globals")
const reverse = require("../Recursive/Reverse")
const isPalindrome = require("../Recursive/isPalindrome")

test('Testing reverse method', () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse(1)).toBe(false);
    expect(reverse("world")).toBe("dlrow")
    expect(reverse("")).toBe(false)
})



test("Testing isPalindrome method", () => {
    expect(isPalindrome("awesome")).toBe(false);
    expect(isPalindrome("foobar")).toBe(false);
    expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
    expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false);
})