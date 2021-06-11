// _rfc
import { createRef, useEffect, useRef } from "react";
import { findDOMNode } from "react-dom";
import highlight from "highlight.js";

export default function HighlightCode({ children, language }) {
  const codeRef = createRef();

  useEffect(() => {
    highlight.highlightBlock(findDOMNode(codeRef.current));
  }, []); // ON INITIAL RENDER

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {children}
      </code>
    </pre>
  );
}
