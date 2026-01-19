from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

# Initialize app
app = FastAPI()

# Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# Test root
@app.get("/")
def read_root():
    return {"Ping": "Pong"}

# Main pipeline parse endpoint
@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build graph for DAG check
    graph = {node.id: [] for node in nodes}
    for edge in edges:
        graph[edge.source].append(edge.target)

    visited = {}
    rec_stack = {}

    def is_cyclic(v):
        visited[v] = True
        rec_stack[v] = True
        for neighbor in graph[v]:
            if not visited.get(neighbor, False):
                if is_cyclic(neighbor):
                    return True
            elif rec_stack.get(neighbor, False):
                return True
        rec_stack[v] = False
        return False

    has_cycle = any(is_cyclic(node.id) for node in nodes if not visited.get(node.id, False))

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": not has_cycle
    }