class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100);
// console.log(n1);//Node { data: 100, next: null }

class LinkedList {
    constructor(){
        this.head = null;//if there's no first element then the list is empty
        this.size = 0;
    }
    // insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if it is empty, make it the head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // insert at an index
    insertAt(data, index) {
        // if index doesn't exist(out of range)
        if(index > 0 && index > this.size) {
            return;
        }
        // if first index
        if(index === 0){
            this.head =  new Node(data, this.head);
            return;
        }
        // the rest
        const node = new Node(data);
        let current, previous;

        // set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;// the node before the index we want to insert the data
            count++;
            current = current.next;// node after the index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;//means it is empty
    }

    // remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head
        let previous;
        let count = 0;
        // remove first
        if(index === 0) {
            this.head = current.next;
        }else {
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // clear the list
    clearList() {
        // the class only knows about the head so if you set it to null then there is no reference to the rest of the list
        this.head = null;
        this.size = 0;
    }

    // print the list data
    printListData(){
        let current = this.head;

        while (current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.insertFirst(100);

// console.log(list);//LinkedList { head: Node { data: 100, next: null }, size: 0 }

list.insertFirst(200);

// console.log(list);//LinkedList { head: Node { data: 200, next: Node { data: 100 next: null } }, size: 0}

list.insertFirst(300);
// list.printListData();//300 200 100

list.insertLast(400);

// list.printListData();//300 200 100 400

list.insertAt(500, 2); 

// list.printListData();//300 200 500 100 400

// console.log('get at an index')

// list.getAt(3);//100

// list.printListData();//300 200 500 100 400

list.removeAt(3);

// list.printListData();//300 200 500 400

list.clearList();

// list.printListData();//returns nothing