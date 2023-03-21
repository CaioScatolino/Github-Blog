import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { HomeContext } from '../../contexts/HomeContext'
import {
  CardIcons,
  CardSocials,
  SocialDetails,
} from '../Home/components/Profile/styles'
import { HomeContainer } from '../Home/styles'
import { PostInfoCard, PostLinks } from './styles'
import github from '../../assets/icons/github.svg'
import {
  CalendarBlank,
  ChatsCircle,
  CaretLeft,
  ArrowUpRight,
} from 'phosphor-react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post() {
  const { selectedIssue, githubData } = useContext(HomeContext)
  console.log(selectedIssue)

  return (
    <HomeContainer>
      <PostInfoCard>
        <PostLinks>
          <NavLink to={'/'}>
            <CaretLeft size={16} />
            Voltar
          </NavLink>
          <NavLink to={selectedIssue.html_url}>
            Ir para o Github
            <ArrowUpRight size={16} />
          </NavLink>
        </PostLinks>
        <h1>{selectedIssue.title}</h1>
        <CardSocials>
          <SocialDetails>
            <CardIcons src={github} />
            <p>{githubData.login}</p>
          </SocialDetails>
          <SocialDetails>
            <CalendarBlank size={16} color="#3A536B" />
            <p>
              {' '}
              {formatDistanceToNow(new Date(selectedIssue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </p>
          </SocialDetails>
          <SocialDetails>
            <ChatsCircle size={16} color="#3A536B" />
            <p>{selectedIssue.comments} comentários</p>
          </SocialDetails>
        </CardSocials>
      </PostInfoCard>
    </HomeContainer>
  )
}
