import { HomeContainer, IssueContainer } from './styles'

import { ProfileCard } from './components/Profile'
import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'
import { PostCard } from './components/PostCard'

export function Home() {
  const { issuesArray /* fetchIssuesGit */ } = useContext(HomeContext)
  return (
    <HomeContainer>
      <ProfileCard />
      <IssueContainer>
        {issuesArray.map((issue) => {
          return (
            <PostCard
              key={issue.id}
              title={issue.title}
              body={issue.body}
              date={issue.created_at}
            />
          )
        })}
      </IssueContainer>
    </HomeContainer>
  )
}
