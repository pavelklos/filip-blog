// _rfc
import { createRef, useEffect, useRef } from "react";
import { findDOMNode } from "react-dom";
// https://highlightjs.org/usage/
// import highlight from "highlight.js";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);

export default function HighlightCode({ children, language }) {
  const codeRef = createRef();

  useEffect(() => {
    hljs.highlightBlock(findDOMNode(codeRef.current));
  }, []); // ON INITIAL RENDER

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {children}
      </code>
    </pre>
  );
}
