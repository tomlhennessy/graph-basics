
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
