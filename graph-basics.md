
# Introduction to Graphs

Graphs are a fundamental abstract data type in computer science, used to represent and analyse relationships between pairs of objects. Unlike linear data structures like arrays or linked lists, graphs consist of nodes (also called vertices) and edges (the connections between nodes), making them versatile for modelling complex structures like networks, maps, and more.

* Key Concepts:

1. Graph Definition:
    • A graph is a collection of nodes (vertices) connected by edges
    • Graphs can represent a variety of real-world structures such as street maps, social networks, the internet, and more..

2. Types of Graphs:
    • Directed vs. Undirected:
        - Directed Graph (Digraph): edges have a direction, represented by arrows. Example: Twitter followers
        - Undirected Graph: edges have no direction, representing mutual relationships. Example: Facebook friends

    • Cyclic vs. Acyclic:
        - Cyclic Graph: contains at least one cycle (a path where the start and end node are the same)
        - Acyclic Graph: no cycles present. A tree is a specific type of acyclic graph

    • Weighted vs. Unweighted:
        - Weighted Graph: Edges have weights representing costs, distances, or other values
        - Unweighted Graph: All edges are treated equally, with a default weight of 1

3. Graph Representations in Code:

    • Adjacency List:
        - The most common way to represent graphs. Each node is a key in a dictionary or object, and its value is a list or set of nodes it connects to
        - Example:

        ```js
        const graph = {
            A: ['B', 'C'],
            B: ['A', 'D'],
            C: ['A'],
            D: ['B']
        }
        ```

    • Adjacency Set:
        - Similar to an adjacency list but uses sets for faster lookups (O(1))
        - Example:

        ```js
        const graph = {
            A: new Set(['B', 'C']),
            B: new Set(['A', 'D']),
            C: new Set(['A']),
            D: new Set(['B'])
        }
        ```

* Key Terminology:
    • Vertex (Node): a fundamental unit in a graph representing an object or a value
    • Edge: a connection between two vertices
    • Directed Edge: a one-way connection from one vertex to another
    • Undirected Edge: a two-way connection, allowing traversal in both directions
    • Bidirectional Edge: another term for an undirected edge
    • Edge Weight: a value associated with an edge, often representing cost or distance
    • Cycle: a path in a graph where the first and last nodes are the same
    • Adjacency List: a representation of a graph where each node is a key, and its value is a list of connected nodes

* Applications of Graphs:
Graphs are used in a variety of real-world applications, including:
    • Routing algorithms (finding the shortest path on a map)
    • Social networks (friend recommendations based on shared connections)
    • Web crawlers (indexing web pages)
    • AI for games (decision-making based on game states)



# Breadth-First Traversal (BFT) of Graphs

Breadth-First Traversal (BFT) is a fundamental graph traversal algorithm that explores nodes level by level, starting from a given node and visiting all its neighbours before moving onto their neighbours. This traversal technique is particularly useful for finding the shortest path in unweighted graphs.

* Key Concepts:

    1. Breadth-First Traversal Overview:
        • Traversal Order: BFT visits nodes in order of their distance from the starting node, meaning it first explores nodes that are 1 step away, then 2 steps away, and so on
        • Use Case: BFT is ideal for scenarios where you need to find the shortest path between two nodes or explore nodes by their proximity

    2. BFT Algorithm Steps:

        1. Initialise:
            • Create a queue and enqueue the starting node
            • Create a set to store visited nodes

        2. Traversal:
            • While the queue is not empty:
                1. Dequeue the first node from the queue (current node)
                2. Perform the required action on the current node (e.g. print it, check for a condition)
                3. For each unvisited neighbour of the current node:
                    - Mark it as visited
                    - Enqueue it to the queue

    3. BFT Example with Adjacency List:
        • Graph Representation:
        ```js
        const adjList = {
            1: [2, 5],
            2: [1, 3, 5],
            3: [2, 4],
            4: [3, 5, 6],
            5: [1, 2, 4],
            6: [4]
        }
        ```
        • Initialisation:
            - `queue = [1]` (starting node is 1)
            - `visited = {1}` (node 1 is marked as visited)

    4. BFT Execution:

        • First Iteration:
            - Dequeue `1`. Current node is `1`
            - Enqueue its unvisited neighbours: `2` and `5`
            - `queue = [2, 5]`
            - `visited = {1, 2, 5}`

        • Second Iteration:
            - Dequeue `2`. Current node is `2`
            - Enqueue its unvisited neighbour: `3`
            - `queue = [5, 3]`
            - `visited = {1, 2, 3, 5}`

        • Third Iteration:
            - Dequeue `5`. Current node is `5`
            - Enqueue its unvisited neighbour: `4`
            - `queue = [3, 4]`
            - `visited = {1, 2, 3, 4, 5}`

        • Fourth Iteration:
            - Dequeue `3`. Current node is `3`
            - No unvisited neighbours
            - `queue = [4]`

        • Fifth Iteration:
            - Dequeue `4`. Current node is `4`
            - Enqueue its unvisited neighbour: `6`
            - `queue = [6]`
            - `visited = {1, 2, 3, 4, 5, 6}`

        • Sixth Iteration:
            - Dequeue `6`. Current node is `6`
            - No unvisited neighbours
            - `queue = []`

    5. BFT Conclusion:
        • The traversal ends when the queue is empty
        • All nodes have been visited exactly once, ensuring complete coverage of the graph

    6. Key Takeaways:
        • Queue: BFT uses a queue to maintain the order of node exploration, ensuring nodes are visited level by level
        • Visited Set: keeps track of nodes that have already been explored to avoid infinite loops, especially in cyclic graphs
        • Order independence: the order of elements in the `visited` set is not guaranteed and may vary depending on the language and implementation

* Applications of Breadth-First Traversal:
    • Finding Shortest Paths: BFT is the basis for algorithms like Dijkstra's when edge weights are uniform
    • Web Crawlers: to explore all pages connected by links
    • Social Networking: finding the shortest connection path between two users



# Depth-First Traversal (DFT) of Graphs

Depth-First Traversal (DFT) is a fundamental graph traversal algorithm that explores as far down one path as possible before backtracking to explore other paths. This approach contrasts with Breadth-first Traversal (BFT), which explores all neighbours at the present depth before moving on to nodes at the next depth level

* Key Concepts:

    1. Depth-First Traversal Overview:
        • Traversal Order: DFT visits nodes by diving deep into one branch of the graph first. It continues along that path until it cannot go any further (i.e. reaches a node with no unvisited neighbours), then it backtracks to explore other branches
        • Ude Case: DFT is useful for exploring all possible paths from a node, solving puzzles, and tasks like topological sorting, where you need to visit nodes in a specific sequence

    2. DFT Algorithm Steps:

        1. Initialise:
            • Create a stack and push the starting node onto it
            • Create a set to store visited nodes

        2. DFT Algorithm Steps:
            1. Initialise
                • Create a stack and push the starting node onto it
                • Create a set to store visited nodes

            2. Traversal:
                • While the stack is not empty:
                    1. Pop the node on the top of the stack (current node)
                    2. Perform the require action on the current node (e.g. print it, add it to a list)
                    3. For each unvisited neighbour of the current node:
                        - Mark it as visited
                        - Push it onto the stack

    3. DFT Example with Adjacency List:
        • Graph Representation:
        ```js
        const adjList = {
            1: [2, 5],
            2: [1, 3, 5],
            3: [2, 4],
            4: [3, 5, 6],
            5: [1, 2, 4],
            6: [4]
        }
        ```
        • Initialisation:
            - `stack = [1]` (starting node is 1)
            - `visited = {1}` (node 1 is marked as visited)

    4. DFT Execution:

        • First Iteration:
            - Pop `1`. Current node is `1`
            - Push its unvisited neighbours: `2` and `5`
            - `stack = [2, 5]`
            - `visited = {1, 2, 5}`

        • Second Iteration:
            - Pop `5`. Current node is `5`
            - Push its unvisited neighbour: `4`
            - `stack = [2, 4]`
            - `visited = {1, 2, 4, 5}`

        • Third Iteration:
            - Pop `4`. Current node is `4`
            - Push its unvisited neighbours: `3` and `6`
            - `stack = [2, 3, 6]`
            - `visited = {1, 2, 3, 4, 5, 6}`

        • Fourth Iteration:
            - Pop `6`. Current node is `6`
            - No unvisited neighbours
            - `stack = [2, 3]`

        • Fifth Iteration:
            - Pop `3`. Current node is `3`
            - No univisited neighbours
            - `stack = [2]`

        • Sixth Iteration:
            - Pop `2`. Current node is `2`
            - No unvisited neighbours
            - `stack = []`

    5. DFT Conclusion:
        • The traversal ends when the stack is empty
        • All nodes have been visited exactly once, ensuring complete coverage of the graph

    6. Key Differences Between DFT and BFT:
        • Stack vs. Queue: DFT uses a stack (last-in, first-out) to manage traversal order, while BFT uses a queue (first-in, first-out)
        • Traversal Order: DFT goes deep along one path before backtracking, while BFT explores all nodes at the current depth before moving deeper

* Applications of Depth-First Traversal:
    • Solving Mazes or Puzzles: DFT can explore all possible paths in a decision tree
    • Pathfinding: it is used in algorithms like DFS (Depth-First Search) for exploring all possible routes
    • Topological Sorting: DFT is useful in tasks where nodes need to be visited in a specific order, such as task scheduling

* Summary:
    • Depth-First Traversal is an algorithm that explores all the way down one branch before backtracking. It is implemented using a stack to keep track of the nodes to visit next, and a set to track visited nodes, ensuring each node is visited only once. This traversal method is essential in solving problems where deep exploration of paths is needed, and it contrasts with Breadth-First Traversal, which explores nodes layer by layer.


# Breadth-First Search (BFS) in Graphs

* Key Concepts:
    • Search vs. Traversal:
        - Traversal: visit all nodes in a graph
        - Search: visit nodes to find a specific target node

* Breadth-First Search (BFS) Overview:
    • Objective: explore nodes level by level from a starting node
    • Primary Data Structures:
        - Queue: to track nodes to be explored next
        - Set: to track visited nodes and avoid revisiting

* BFS Algorithm Steps:
    1. Initialise:
        • Queue: enqueue the starting node
        • Visited Set: add the starting node to the set

    2. While Queue is Not Empty:
        • Dequeue the first node (currentNode)
        • Check: if `currentNode` is the target, return the result
        • For each unvisited neighbour of `currentNode`:
            - Add it to the visited set
            - Enqueue it to the queue

    3. End Condition:
        • If the queue is empty and the target hasn't been found, return `false`

* BFS Example Implementation:

    • Graph Representation (Adjacency List):
    ```py
    adjList = {
        1: [2, 5],
        2: [1, 3, 5],
        3: [2, 4],
        4: [3, 5],
        5: [1, 2, 4],
        6: []
    }
    ```
    Goal: determine if node `3` is reachable from node `1`
    Initial State:
        - `queue = [1]`
        - `visited = {1}`

    • First Loop:
        - Dequeue `1`, enqueue its neigbours `2` and `5`
        - `queue = [2, 5]`, `visited = {1, 2, 5, 3}`

    • Second Loop:
        - Dequeue `2`, enqueue neighbour `3`,
        - `queue = [5, 3]`, `visited = {1, 2, 5, 3}`

    • Third Loop:
        - Dequeue `5`, enqueue neighbour `4`
        - `queue = [3, 4]`, `visited = {1, 2, 5, 3, 4}`

    • Fourth Loop:
        - Dequeue `3`, which matches the target
        - Result: `3` is reachable from `1`, return `true`

* Summary:
    • BFS is effective for finding the shortest path in unweighted graphs or determining reachability between nodes
    • The algorithm ensures all nodes at the current depth are explored before moving deeper into the graph


# Finding A Shortest Path (BFS)

* Key Concept
    • Breadth-First Search (BFS) is commonly used to find A shortest path between two nodes in an unweighted graph. The emphasis is on "A" because there may be multiple valid shortest paths.

* BFS for Shortest Path: Overview
    1. Graph Representation: Use an adjacency list to represent the graph
        • Example:
        ```py
        adjList = {
            1: [2, 5],
            2: [1, 3, 5],
            3: [2, 4],
            4: [3, 5],
            5: [1, 2, 4],
            6: []
        }
        ```

    2. Algorithm Steps:

        1. Initialise Queue and Visited Set:
            • Start with the node you want to find a path from (e.g. node '1')
            • Enqueue a list containing just the start node, representing the path
            • Initialise a set to track visited nodes
            • Example:
            ```py
            queue = [[1]]
            visited = {1}
            target = 3
            ```

        2. Loop Until Queue is Empty:
            • Dequeue the first path in the queue
            • Check if the last node in the path is the target. If yes, return the path
            • Otherwise, for each unvisited neighbour of the last node:
                - Add the neighbour to the visited set
                - Copy the current path and append the neighbour
                - Enqueue this new path
            • Continue this process until the queue is empty or the target is found

        3. Process Detail:
            • Example Path Finding from 1 to 3
                - Start with path `[1]`. Dequeue and check the last node (`1`)
                - Add neighbours `2` and `5` to visited and enqueue paths `[1, 2]` and `[1, 5]`
                - Continue this for subsequent paths until the target node is found
                - Example queue states:

                ```py
                queue = [[1, 2], [1, 5]]
                queue = [[1, 2], [1, 2, 3]] # found the target in this path
                ```

        4. End Condition:
            • When the target node is reached, return the current path as the shortest path
            • If the queue empties without finding the target, return a failure message


* Key Takeaways
    • BFS is effective for finding the shortest path in an unweighted graph because it explores all possible paths level by level, ensuring the first time it reaches the target node, it's via the shortest path
    • Visited Set is crucial to prevent revisiting nodes and thus avoiding cycles, which keeps the algorithm efficient
    • Path Tracking: By enqueueing entire paths rather than individual nodes, BFS can return the exact sequence of nodes forming a shortest path


# Solving Graph Problems

* Overview
    • Graph problems can be diverse, but most can be simplified to three main steps:
        1. Identify and Define the Type of Graph
        2. Implement the `getNeighbours` Function
        3. Traverse the Graph
    • These steps align with a systematic approach to problem-solving, similar to the Polya problem-solving framework

* Step 1: Identify and Define the Type of Graph
    • Understand the Problem:
        - Nodes: identify what the nodes represent (e.g. people, locations, etc.)
        - Edges: determine the connections or relationships between nodes

    • Graph Characteristics:
        - Directed or Undirected: does the relationship flow one way (directed) or both ways (undirected)
        - Weighted or Unweighted: are there weights or costs associated with the edges?
        - Cyclic or Acyclic: can you encounter cycles in the graph, or is it acyclic?

    • Example:
        - Social Network: nodes are people, and edges represent friendships. Typically, this is an undirected, unweighted graph.


* Step 2: Implement the `getNeighbours` Function
    • Purpose: this function retreives the adjacent nodes (neighbours) for a given node
    • Implementation Varies: depending on the graph representation
        - Adjacency List: simply return the list of nodes connected to the given node
        - Other representations: you might need to compute or extract neighbours differently
    • Example:
    ```js
    function getNeighbours(node, graph) {
        return graph[node];
    }
    ```

* Step 3: Traverse the Graph
    • Choose the Appropriate Traversal:
        - Bread-First Search (BFS): Ideal for finding the shortest path or all nodes within a certain degree of separation
        - Depth-First Search (DFS): Useful for exploring all paths or finding a path when cycles or exhaustive search are involved

    • BFS Algorithm Steps:
        1. Initialise: create a queue with the starting node's path and a set for visited nodes
        2. Loop: while the queue is not empty:
            - Dequeue the first path
            - Get the last node in this path
            - If not visited, mark it as visited
            - For each neighbour, copy the current path, append the neighbour, and enqueue this new path
        3. End Condition: the loop continues until the queue is empty, or a target is found

    • Example:
    ```js
    function socialConnection(name, degrees, graph) {
        const queue = [[name]];
        const visited = new Set();
        const friends = [];

        while (queue.length > 0) {
            let path = queue.shift();
            let currentNode = path[path.length - 1];

            if (!visited.has(currentNode)) {
                visited.add(currentNode);

                if (path.length > 1 && path.length <= degrees + 1) {
                    friends.push(currentNode);
                }

                let neighbours = getNeighbours(currentNode, graph);
                for (let neighbour of neighbours) {
                    let newPath = [...path, neighbour];
                    queue.push(newPath);
                }
            }
        }

        return friends;
    }
    ```


# Solving Matrix Graph Problems

* Overview
    When solving graph problems using a matrix, the approach is similar to solving problems with an adjacency list, but with key differences due to the structure of a matrix. The three essential steps remain the same:
        1. Identify and Define the Type of Graph
        2. Implement the `getNeighbours` function
        3. Traverse the Graph


1. Identify and Define the Type of Graph
    • Matrix Definition: a matrix is a two-dimensional array representing a graph, where:
        - Nodes are elements in the matrix
        - Edges are represented by adjacency between nodes
    • Key Questions:
        - What is the problem asking you to do? (search, traversal, etc.)
        - What does the matrix represent? (nodes, edges and their relationships)
        - What are valid neighbours? (adjacent nodes, possibly including diagonals)
        - Is the problem a search or a traversal? (depth-first or breadth-first)
    • Example Matrix:
    ```js
    const matrix = [
        [ 0, 1, 0, 0, 1 ],
        [ 1, 0, 0, 0, 1 ],
        [ 1, 1, 0, 1, 1 ],
        [ 0, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0 ]
    ];
    ```

2. Implement the `getNeighbours` Function
    • Purpose: returns all valid neighbours of a given node in the matrix
    • Neighbours:
        - Direct: nodes directly above, below, left, or right
        - Diagonal: nodes diagonally adjacent (optional depending on the problem)
    • Implementation Example:
    ```js
    function getNeighbours(node, matrix) {
        const [row, col] = node;
        const neighbours = [];

        // check up
        if (row > 0) neighbours.push([row - 1, col]);
        // check down
        if (row < matrix.length - 1) neighbours.push([row + 1, col]);
        // check left
        if (col > 0) neighbours.push([row, col - 1]);
        // check right
        if (col < matrix[0].length - 1) neighbours.push([row, col + 1]);

        return neighbours;
    }
    ```
    • Edge Cases: handle cases where nodes are on the edges or corners of the matrix


3. Traverse the Graph
    • Approach: similar to adjacency list traversal but adapted for matrix coordinates
    • Steps:
        1. Initialise a queue with the starting node
        2. Create a visited set to track visited nodes, converting node coordinates to strings (e.g. `'row,col'`)
        3. While the queue is not empty
            - dequeue a node
            - mark it as visited
            - add its neighbours to the queue
        • Example:

        ```js
        function traverseMatrix(matrix, startNode) {
            const queue = [startNode];
            const visited = new Set([startNode.toString()]);

            while (queue.length > 0) {
                const [row, col] = queue.shift();
                // process the current node (row, col)

                for (let neighbour of getNeighbours([row, col], matrix)) {
                    const neighbourStr = neighbour.toString();
                    if (!visited.has(neighbourStr)) {
                        visited.add(neighbourStr);
                        queue.push(neighbour);
                    }
                }
            }
        }
        ```
        • Search Implementation: similar to traversal but stops when a specific condition or node is found

* Key Points:
    • Matrix vs. Adjacency List: the main difference lies in how you access and represent neighbours and how you manage node identification (using coordinates in a matrix)
    • Visited Set: always convert matrix coordinates to a string when adding to or checking in the visited set to ensure proper comparison
    • Problem-Specific Neighbours: define what constitutes a valid neighbour based on the problem's requirements (e.g. direct vs. diagonal neighbours)

* Conclusion
While the structure of a matrix differs from an adjacency list, the fundamental steps to solve graph problems remain the same: identify the graph type, implement a `getNeighbours` function, and traverse or search the graph.
