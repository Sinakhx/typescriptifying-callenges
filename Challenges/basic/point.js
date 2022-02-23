class State {
    constructor(current) {
        this.current = current;
    }
    // Only need to pass in the properties you want to be changed
    update(next) {
        return new State({ ...this.current, ...next });
    }
}

export default State;

// Usage
const state = new State({ x: 0, y: 0 });
state.update({ y: 123 }); // No need to provide `x`.
console.log(state.current); // Update successful: { x: 0, y: 123 }
