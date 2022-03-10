/** A FIFO (First In First Out) collection */
export default class Queue<T> {
    data: Array<T> = [];
    push(item: T): void {
        this.data.push(item);
    }
    pop(): T {
        return this.data.shift();
    }
}

const queue = new Queue<number>();
queue.push(123);
queue.push("Hello World");

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
