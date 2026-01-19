import { Handle, Position } from "reactflow";
import "../styles/BaseNode.css";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 220,
}) {
  return (
    <div className="base-node" style={{ width }}>
      <div className="node-title" style={{ fontWeight: "bold", marginBottom: 8 }}>
        {title}
      </div>

      {/* Input handles */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: 40 + index * 24 }}
        />
      ))}

      {/* Output handles */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: 40 + index * 24 }}
        />
      ))}

      <div className="node-content">{children}</div>
    </div>
  );
}