// utils - start
export const getSuffix = () => Math.random() < 0.5 ? "" : null;
export const forExample = getSuffix;
// utils - end



let suffix = getSuffix();
if (suffix != null) {
    let exampleOne = 'jane' + suffix.toUpperCase();
    ['jane', 'john'].forEach(name => {
        let exampleTwo = name + suffix.toUpperCase();
    })
}

let example = forExample();
if (example != null) {
    setTimeout(() => {
        console.log(example.toUpperCase());
    });
}
example = null;
