function toHaveValuesInOrder(iterable, ...expectedValues) {
    const iterator = iterable[Symbol.iterator]();

    let currentStep;
    for(let i = 0; i < expectedValues.length; i++) {
        currentStep = iterator.next();
        const value = currentStep.value;
        if (currentStep.done) {
            return {
                message: () => `expected ${value} but the iterator was finished`,
                pass: false
            };
        } else {
            if (value !== expectedValues[i]) {
                return {
                    message: () => `expected the value at index ${i} to be ${expectedValues[i]} but received ${value}`,
                    pass: false
                };
            }
        }
    }

    currentStep = iterator.next();

    if (currentStep.done) {
        return {
            message: () => 'The iterable matched the expected values',
            pass: true
        };
    } else {
        return {
            message: () => 'The iterable contained more values than expected',
            pass: false
        };
    }
}