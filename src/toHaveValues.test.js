require('jest-iterables');

describe('toHaveValues', () => {
    it('should pass when the iterable contains all of the expected values', () => {
        expect(() => expect([1, 2, 3, 4, 5]).toHaveValues(1, 3, 5)).not.toThrow();
    });

    it('should fail when the iterable does not contain one of the expected values', () => {
        expect(() => expect([1, 2, 3, 4, 5]).toHaveValues(1, 2, 6)).toThrow();
    });
});