import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function MarkdownPage({ file }) {
  const [content, setContent] = useState("")

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [file])

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <article className="prose prose-slate lg:prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>
    </div>
  )
}

export default MarkdownPage