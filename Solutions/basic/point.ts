// type Point = { x: number, y: number };
// type PartialPoint = Partial<Point>; // same as `{ x?: number, y?: number }`

class State<T> {
    constructor(public current: T) {}
    // Only need to pass in the properties you want to be changed
    update(next: Partial<T>) {
        return new State({ ...this.current, ...next });
    }
}

export default State;

// Usage
const state = new State({ x: 0, y: 0 });
state.update({ y: 123 }); // Partial. No need to provide `x`.
console.log(state.current); // Update successful: { x: 0, y: 123 }
