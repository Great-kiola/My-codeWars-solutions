class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }

    append(data){
        const node = new Node(data)
        if (!this.head){
            this.head = node
        }else{
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

    print(){
        let current = this.head;
        let output = "";

        while(current){
            output += current.data + " -> ";
            current = current.next
        }

        output += "null";
        console.log(output)
    }

}


const list = new LinkedList()
list.append(20)
list.append(25)
list.append(50)
list.print()


console.log(list.isEmpty())