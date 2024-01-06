import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  className?: string;
  children?: React.ReactNode;
};
export const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  children = "",
}) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match && match[1] ? match[1] : "";
  const code = String(children).replace(/\n$/, "");

  return (
    <SyntaxHighlighter language={language} style={nightOwl}>
      {code}
    </SyntaxHighlighter>
  );
};
