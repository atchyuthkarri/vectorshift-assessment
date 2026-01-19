import axios from "axios";
import { useStore } from "./store";

export async function submitPipeline() {
  const { nodes, edges } = useStore.getState();

  const simpleNodes = nodes.map((n) => ({ id: n.id }));
  const simpleEdges = edges.map((e) => ({
    source: e.source,
    target: e.target,
  }));

  try {
    const res = await axios.post("http://127.0.0.1:8000/pipelines/parse", {
      nodes: simpleNodes,
      edges: simpleEdges,
    });

    const { num_nodes, num_edges, is_dag } = res.data;

    alert(
      `Pipeline Info\n\nNodes: ${num_nodes}\nEdges: ${num_edges}\nIs DAG: ${is_dag}`
    );
  } catch (err) {
    console.error(err);
    alert("Failed to submit pipeline. Check console.");
  }
}