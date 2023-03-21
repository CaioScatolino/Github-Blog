import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostCardProps {
  title: string
  body: string
  date: any
}

export function PostCard(props: PostCardProps) {
  const convertBody = props.body.substring(0, 112).concat('...')
  return (
    <div>
      <span>{props.title}</span>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{convertBody}</ReactMarkdown>
    </div>
  )
}
