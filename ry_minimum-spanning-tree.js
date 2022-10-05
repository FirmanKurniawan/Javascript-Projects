// Number of vertices in the graph 
let V = 5;

// A utility function to find the vertex with 
// minimum key value, from the set of vertices 
// not yet included in MST 
function minKey(key, mstSet) 
{ 
    // Initialize min value 
    let min = Number.MAX_VALUE, min_index; 

    for (let v = 0; v < V; v++) 
        if (mstSet[v] == false && key[v] < min) 
            min = key[v], min_index = v; 

    return min_index; 
} 

// A utility function to print the 
// constructed MST stored in parent[] 
function printMST(parent, graph) 
{ 
    console.log("Edge Weight"); 
    for (let i = 1; i < V; i++) 
        console.log(parent[i] + i + "  " + graph[i][parent[i]]); 
} 

// Function to construct and print MST for 
// a graph represented using adjacency 
// matrix representation 
function primMST(graph) 
{ 
    // Array to store constructed MST 
    let parent = []; 
    
    // Key values used to pick minimum weight edge in cut 
    let key = []; 
    
    // To represent set of vertices included in MST 
    let mstSet = []; 

    // Initialize all keys as INFINITE 
    for (let i = 0; i < V; i++) 
        key[i] = Number.MAX_VALUE, mstSet[i] = false; 

    // Always include first 1st vertex in MST. 
    // Make key 0 so that this vertex is picked as first vertex. 
    key[0] = 0; 
    parent[0] = -1; // First node is always root of MST 

    // The MST will have V vertices 
    for (let count = 0; count < V - 1; count++)
    { 
        // Pick the minimum key vertex from the 
        // set of vertices not yet included in MST 
        let u = minKey(key, mstSet); 

        // Add the picked vertex to the MST Set 
        mstSet[u] = true; 

        // Update key value and parent index of 
        // the adjacent vertices of the picked vertex. 
        // Consider only those vertices which are not 
        // yet included in MST 
        for (let v = 0; v < V; v++) 

            // graph[u][v] is non zero only for adjacent vertices of m 
            // mstSet[v] is false for vertices not yet included in MST 
            // Update the key only if graph[u][v] is smaller than key[v] 
            if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]) 
                parent[v] = u, key[v] = graph[u][v]; 
    } 

    // print the constructed MST 
    printMST(parent, graph); 
} 

// Driver code

/* Let us create the following graph 
    2 3 
    (0)--(1)--(2) 
    | / \ | 
    6| 8/ \5 |7 
    | / \ | 
    (3)-------(4) 
    9     */
    
let graph = [ [ 0, 2, 0, 6, 0 ], 
[ 2, 0, 3, 8, 5 ], 
[ 0, 3, 0, 0, 7 ], 
[ 6, 8, 0, 0, 9 ], 
[ 0, 5, 7, 9, 0 ] ]; 

// Print the solution 
primMST(graph); 


// This code is contributed by Dharanendra L V.
