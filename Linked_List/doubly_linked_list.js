class Node {
    constructor(val){
        this.val = val
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        length++;
        return this
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.tail
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.prev;
            this.tail.next = null;
            current.prev = null;
        }
        length--;
        return current
    }

    shift(){
        if(!this.head) return undefined
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next
            this.head.prev = null;
            oldHead.next = null;
        }
        length--;
        return oldHead;
    }
    unshift(val){
        newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        length++;
        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let midList = this.length / 2
        let count, current
        if(index <= midList){
            count = 0
            current = this.head
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current = current.prev
                count--;
            }
        }

        return current;
    }

    set(val, index){
        let validNode = this.get(index)
        if(validNode){
            validNode.val = val;
            return true
        }
        return false;
    }

    insert(val, index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        let newNode = new Node(val)

        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        afterNode.prev = newNode;

        this.length++
        return true;

    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removeNode = this.get(index);
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}