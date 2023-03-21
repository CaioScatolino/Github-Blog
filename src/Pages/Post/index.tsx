import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'

export function Post() {
  const { selectedIssue } = useContext(HomeContext)
  console.log(selectedIssue)

  return <h1>Post</h1>
}
