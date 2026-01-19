import BaseNode from "./BaseNode";

export default function InputNode() {
  return (
    <BaseNode title="Input" outputs={["output"]}>
      <div>Input Value</div>
    </BaseNode>
  );
}