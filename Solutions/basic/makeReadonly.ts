export function makeReadonly<T>(object: T): Readonly<T> {
    return Object.freeze({ ...object });
}

const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2; // should be OK

const readonlyPoint = makeReadonly(editablePoint);
readonlyPoint.x = 3; // should Error
