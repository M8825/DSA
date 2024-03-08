class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        if (this.stack.length === 0) {
            this.stack.push({ val: val, min: val });
        } else {
            const min = Math.min(val, this.getMin());
            this.stack.push({ val: val, min: min });
        }
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1].val;
    }

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}


// Test case 1
const minStack1 = new MinStack();
minStack1.push(-2);
minStack1.push(0);
minStack1.push(-3);
console.log(minStack1.getMin()); // Expected output: -3
minStack1.pop();
console.log(minStack1.top());    // Expected output: 0
console.log(minStack1.getMin()); // Expected output: -2

// Test case 2
const minStack2 = new MinStack();
minStack2.push(1);
minStack2.push(2);
console.log(minStack2.top());    // Expected output: 2
console.log(minStack2.getMin()); // Expected output: 1
minStack2.pop();
console.log(minStack2.getMin()); // Expected output: 1
