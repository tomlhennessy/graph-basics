
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
