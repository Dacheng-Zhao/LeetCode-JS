/**
 * @param {number} capacity
 */
class DLLNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.map = {};
    this.capacity = capacity;
    this.head = new DLLNode(0, 0);
    this.tail = new DLLNode(0, 0);
    this.head.next = this.tail;
    this.tail.pre = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key] === undefined) {
        return -1
    } else {
        let tempNode = this.map[key];
        this.deleteNodeFromDLL(tempNode);
        this.addNodeToDLL(tempNode);
        return tempNode.val;
    } 
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let newNode = new DLLNode(key, value);
    if (this.map[key]) {
        this.deleteNodeFromDLL(this.map[key]);
        this.map[key] = newNode;
        this.addNodeToDLL(newNode);
    } else {
        this.map[key] = newNode;
        this.addNodeToDLL(newNode);
        if (Object.keys(this.map).length > this.capacity) {
            let nextNode = this.head.next;
            this.deleteNodeFromDLL(nextNode);
            delete this.map[nextNode.key];
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
LRUCache.prototype.deleteNodeFromDLL = function(node) {
    if (node.pre === null || node.next === null) {
        return
    }
    node.next.pre = node.pre;
    node.pre.next = node.next;
}

LRUCache.prototype.addNodeToDLL = function(node) {
    let lastNode = this.tail.pre;
    lastNode.next = node;
    node.pre = lastNode;
    node.next = this.tail;
    this.tail.pre = node;
}
