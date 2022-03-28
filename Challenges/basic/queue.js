/** A FIFO (First In First Out) collection */
export default class Queue {
    data = [];
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}

const queue = new Queue();
queue.push(123);
queue.push("Hello World");

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));