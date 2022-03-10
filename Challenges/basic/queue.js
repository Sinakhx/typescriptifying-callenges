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
