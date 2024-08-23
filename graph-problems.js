// 1. Breadth-First Traversal
const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // create a queue and enqueue the starting node
    const queue = [start];

    // create a set to store visited nodes
    const visited = new Set();

    // mark the start node as visited
    visited.add(start);

    // while the queue is not empty
    while (queue.length > 0) {
        // dequeue the first node
        const currentNode = queue.shift();

        // print the current node
        console.log(currentNode);

        // for each neighbour of the current node
        for (let neighbour of adjList[currentNode]) {
            // if the neighbour hasn't been visited yet
            if (!visited.has(neighbour)) {
                // marke it as visited
                visited.add(neighbour)

                // enqueue the neighbour
                queue.push(neighbour);
            }
        }
    }
}

console.log("First Test:");
printBreadthFirst(3); // Expected output: 3, 2, 4, 1, 5, 6 (or similar order)
console.log("Second Test:");
printBreadthFirst(6); // Expected output: 6, 4, 3, 5, 2, 1 (or similar order)
console.log("Third Test:");
printBreadthFirst(4); // Expected output: 4, 3, 5, 6, 2, 1 (or similar order)



// 2. Depth-First Traversal
// refer to adjList^

function printDepthFirst(start) {
    const stack = [start]; // initialise the stack with the starting node
    const visited = new Set(); // set to track visited nodes

    visited.add(start);

    while (stack.length > 0) {
        const currentNode = stack.pop(); // for DFT, pop the last element
        console.log(currentNode);

        for (let neighbour of adjList[currentNode]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                stack.push(neighbour); // for DFT, push neighbours to the stack
            }
        }
    }
}

console.log("First Test:");
printDepthFirst(3); // Expected output: 3, 4, 6, 5, 1, 2 (or another valid DFT order)
console.log("Second Test:");
printDepthFirst(6); // Expected output: 6, 4, 5, 2, 1, 3 (or another valid DFT order)
console.log("Third Test:");
printDepthFirst(4); // Expected output: 4, 6, 5, 2, 1, 3 (or another valid DFT order)
