/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [[Infinity, Infinity]];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let minVal = this.stack[this.stack.length - 1][1];
    minVal = Math.min(minVal, x);
    this.stack.push([x, minVal]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length === 1) {
        return null
    }
    return this.stack.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 1) {
        return null
    }
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length === 1) {
        return null
    }
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */