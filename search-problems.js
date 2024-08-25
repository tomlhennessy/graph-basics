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


// 2. A Shortest Path
// refer to adjList^
function aShortestPath(start, end) {
    // initialise the queue with the start path
    let queue = [[start]];
    // initialise the set of visited nodes
    let visited = new Set();
    visited.add(start);

    // BFS Loop
    while (queue.length > 0) {
        // dequeue the first path in the queue
        let currentPath = queue.shift();
        // get the last node in the current path
        let currentNode = currentPath[currentPath.length - 1]

        if (currentNode === end) {
            return currentPath;
        }

        let neighbours = adjList[currentNode];
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                let newPath = currentPath.concat([neighbour]);
                queue.push(newPath);
            }
        }
    }

    return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (one possible solition)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (one possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false


// 3. Degrees of Seperation

function degreesOfSeparation(start, end) {
    let queue = [[start]];
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        let currentPath = queue.shift();
        let currentNode = currentPath[currentPath.length - 1];

        if (currentNode === end) {
            return currentPath.length - 1;
        }

        let neighbours = adjList[currentNode];
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                let newPath = currentpath.concat([neighbour]);
                queue.push(newPath);
            }
        }
    }

    return -1; // return -1 if there's no path between start and end
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2 (1 -> 2 -> 3)

console.log("Second Test:");
console.log(degreesOfSeparation(4, 1)); // -> 2 (4 -> 5 -> 1)

console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> -1 (No connection)
