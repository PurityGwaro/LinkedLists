const node1 = {
    data: 100
}

const node2 = {
    data: 200
}

// add a reference node2 from node1
node1.next = node2;

console.log(node1);//{ data: 100, next: { data: 200 } }

const node3 = {
    data: 300
}

node2.next = node3;

console.log(node1);//{ data: 100, next: { data: 200, next: { data: 300 } } }