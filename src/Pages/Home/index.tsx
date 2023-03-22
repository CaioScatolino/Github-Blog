import { HomeContainer, IssueContainer } from './styles'

import { ProfileCard } from './components/Profile'
import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'
import { PostCard } from './components/PostCard'
import { NavLink } from 'react-router-dom'
import { SearchForm } from './components/SearchForm'

export function Home() {
  const { issuesArray, fetchSelectedIssue } = useContext(HomeContext)

  function handleEnterPost(number: number) {
    fetchSelectedIssue(String(number))
  }
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchForm />
      <IssueContainer>
        {issuesArray.map((issue) => {
          return (
            <NavLink
              to="/post"
              onClick={() => handleEnterPost(issue.number)}
              title="Post"
              key={issue.number}
            >
              <PostCard
                key={issue.id}
                title={issue.title}
                body={issue.body}
                date={issue.created_at}
              />
            </NavLink>
          )
        })}
      </IssueContainer>
    </HomeContainer>
  )
}
