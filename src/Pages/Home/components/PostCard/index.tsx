import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { PostCardContainer, PostCardTitle } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  title: string
  body: string
  date: any
}

export function PostCard(props: PostCardProps) {
  const convertBody = props.body.substring(0, 112).concat('...')
  return (
    <PostCardContainer>
      <PostCardTitle>
        <h3>{props.title}</h3>
        <span>
          {formatDistanceToNow(new Date(props.date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostCardTitle>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{convertBody}</ReactMarkdown>
    </PostCardContainer>
  )
}
