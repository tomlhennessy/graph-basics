// 1. Breadth-First Search
const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
    // edge case: if start is the same as end
    if (start === end) return true;

    const queue = [start]; // initialise queue with the start node
    const visited = new Set(); // initialise the visited set
    visited.add(start); // mark the start node as visited

    while (queue.length > 0) {
        const currentNode = queue.shift(); // dequeue the first node

        // check if this node is the target node
        if (currentNode === end) {
            return true;
        }

        // enqueue all unvisited neighbours
        for (const neighbour of adjList[currentNode]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour); // mark neighbour as visited
                queue.push(neighbour); // enqueue neighbour
            }
        }
    }

    // if we exhaust the queue without finding the end node
    return false;
}

// testing the function
console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> False
