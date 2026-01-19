import BaseNode from "./BaseNode";

export default function OutputNode() {
  return (
    <BaseNode title="Output" inputs={["in"]}>
      <div style={{ fontSize: 12, color: "#555" }}>
        Output Node
      </div>
    </BaseNode>
  );
}