function uniquebrands(results) {
    const arr = results.map((result) => {
        return result.department;
    });
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

export { uniquebrands };
