// _rfc
import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "components/HighlightCode";
import { urlFor } from "lib/api";
// const serializers = {
//   types: {
//     code: () => {
//       return <h1>Code Block will be here</h1>;
//     },
//   },
// };
const serializers = {
  types: {
    // code: (props) => (
    //   <pre data-language={props.node.language}>
    //     <code>{props.node.code}</code>
    //     <p>{props.node.filename}</p>
    //   </pre>
    // ),
    code: ({ node: { language, code, filename } }) => {
      // debugger
      return (
        <HighlightCode language={language}>
          {code}
          <div className='code-filename'>{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position } }) => {
      // debugger
      return (
        <div className='blog-image'>
          <img src={urlFor(asset).height(300).fit("max").url()} />
          <div className='image-alt'>{alt}</div>
        </div>
      );
    },
  },
};

export default function BlogContent({ content }) {
  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
      // imageOptions={{ w: 320, h: 240, fit: "max" }}
    />
  );
}
