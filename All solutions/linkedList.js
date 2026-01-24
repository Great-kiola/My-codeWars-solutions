class Node{
    constructor(data){
        this.data = data
        this.head = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }

    append(data){
        const node = new Node(data)
        if (this.head == null) this.head = node
        else{
            let current = this.head
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    isEmpty(){
        return this.length === 0
    }
}


const list = new LinkedList()
console.log(list)
console.log(list.isEmpty())