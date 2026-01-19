import { useState, useEffect, useRef } from "react";
import BaseNode from "./BaseNode";

export default function TextNode() {
  const [text, setText] = useState("");
  const [vars, setVars] = useState([]);
  const textareaRef = useRef(null);

  // Detect variables in {{variable}} format
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const found = new Set();
    let match;
    while ((match = regex.exec(text))) {
      found.add(match[1]);
    }
    setVars([...found]);
  }, [text]);

  // Auto-resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <BaseNode title="Text" inputs={vars} outputs={["output"]} width={300}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text with {{variables}}"
        style={{
          width: "100%",
          resize: "none",
          border: "1px solid #ccc",
          borderRadius: 4,
          padding: 4,
          background: "transparent",
          color: "#000",
          outline: "none",
        }}
      />
    </BaseNode>
  );
}