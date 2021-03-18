const { reduce } = require('collection-ops');

function toHaveValues(iterable, expectedValues) {
    const expectedValuesNotFound = new Set(expectedValues);
    for (const value of iterable) {
        expectedValuesNotFound.delete(value);
    }
    if (expectedValuesNotFound.size > 0) {
        return {
            message: () => `${expectedValuesNotFound} were not found in ${iterable}`,
            pass: false
        };
    } else {
        return {
            message: () => 'all expected values were found',
            pass: true
        };
    }
}

function toNotHaveValues(iterable, expectedValues) {
    const doesContainValues = reduce(expectedValues.includes)(iterable);
    if (doesContainValues) {
        return {
            message: '',
            pass: false
        }
    } else {
        return {
            message: '',
            pass: true
        }
    }
}

module.exports = function(iterable, ...expectedValues) {
    if (this.isNot) {
        return toNotHaveValues(iterable, expectedValues);
    } else {
        return toHaveValues(iterable, expectedValues);
    }
}