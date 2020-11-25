export function getValidationErrors(error) {
    const validationErrors = error.inner.reduce((x, y) => {
        x[y.path] = y.message;
        return x;
    }, {});
    return validationErrors;
}