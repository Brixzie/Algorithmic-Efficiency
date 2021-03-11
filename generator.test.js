const { countElements, simpleSort, factorial, factorialRecursive, factorialSimple, meanValue, probability } = require("./generator")

test("Should count number of elements in array", () => {
    numbers = [1, 5, 10];
    expect(countElements(numbers)).toBe(3);
    expect(countElements([])).toBe(0);
})

//Unit test
test("Check that sorts works correctly", () => {
    numbers = [8, 2, 7, 1, 1, 0, 0, -5];
    expect(simpleSort(numbers)).toStrictEqual([-5, 0, 0, 1, 1, 2, 7, 8]);
})

test("test", () => {
    expect(factorialSimple(4)).toBe(24);
})

test("test", () => {
    numbers = [4, 4, 4, 4];
    expect(meanValue(numbers)).toBe(4);
})

test("testProb", () => {
    expect(probability(0.5, 1)).toBe(0.5);
})

//Integration test


/*
//Unit test recursive factorial()
test("Check that factorial works"), () => {
    const number = 4;
    expect(factorialRecursive(number)).toBe(24);
}
*/