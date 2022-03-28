// utils - start
export const getSuffix = () => Math.random() < 0.5 ? "" : null;
export const forExample = getSuffix;
// utils - end



let suffix: string | null = getSuffix();
if (suffix != null) {
    const localSuffix = suffix;
    let exampleOne: string = 'jane' + localSuffix.toUpperCase();
    ['jane', 'john'].forEach(name => {
        let exampleTwo: string = name + localSuffix.toUpperCase();
    })
}

let example: string | null = forExample();
if (example != null) {
    const localExample = example;
    setTimeout(() => {
        console.log(localExample.toUpperCase());
    });
}
example = null;
