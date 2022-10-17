class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        var node = new Node(data);

        node.previous = this.top;
        this.top = node;
        this.size += 1;
        return this.top;
    }
    pop() {
        temp = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return temp;
    }
}

var Node = function(data){
  this.data = data;
  this.previous = null;
};

let stack = new Stack()

stack.push("a")
stack.push("b")
stack.push("c")

console.log(stack)

