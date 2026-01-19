import BaseNode from "./BaseNode";

export default function LLMNode() {
  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <div style={{ fontSize: 12, color: "#555" }}>
        Language Model Node
      </div>
    </BaseNode>
  );
}