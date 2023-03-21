import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserData {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  avatar_url: string
}

interface issuesGitDataProps {
  id: number
  items: []
  title: string
  body: string
  total_count: number
}

interface IssueItemsProps {
  number: number
  id: number
  title: string
  body: string
  created_at: Date
}

interface SelectedIssueProps {
  title: string
  user: {
    login: string
  }
  created_at: Date
  comments: number
  body: string
  html_url: string
}

interface HomeContextType {
  // issues: IssuesProps[]
  githubData: UserData
  issuesArray: IssueItemsProps[]
  selectedIssue: SelectedIssueProps
  fetchIssuesGit: (query?: string) => Promise<void>
  fetchSelectedIssue: (query?: string) => Promise<void>
}

interface HomeProviderProps {
  children: ReactNode
}
export const HomeContext = createContext({} as HomeContextType)

export function HomeProvider({ children }: HomeProviderProps) {
  const [githubData, setGithubData] = useState({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    followers: 0,
    company: '',
  })

  const fetchGithubData = useCallback(async (query?: string) => {
    const response = await api.get('/users/caioscatolino', {})

    setGithubData(response.data)
  }, [])

  useEffect(() => {
    fetchGithubData()
  }, [fetchGithubData])

  const [issuesGitData, setIssuesGitData] = useState<issuesGitDataProps>({
    id: 0,
    items: [],
    title: '',
    body: '',
    total_count: 0,
  })

  const issuesArray: IssueItemsProps[] = issuesGitData.items

  async function fetchIssuesGit(query?: string) {
    const response = await api.get(
      `search/issues?q=${query}%20repo:caioscatolino/github-blog`,
    )
    setIssuesGitData(response.data)
  }
  useEffect(() => {
    fetchIssuesGit('')
  }, [])

  const [selectedIssue, setSelectedIssue] = useState<SelectedIssueProps>({
    title: '',
    user: {
      login: '',
    },
    created_at: new Date(),
    comments: 0,
    body: '',
    html_url: '',
  })

  async function fetchSelectedIssue(query?: string) {
    const response = await api.get(
      `/repos/caioscatolino/github-blog/issues/${query}`,
    )
    setSelectedIssue(response.data)
  }

  return (
    <HomeContext.Provider
      value={{
        githubData,
        fetchIssuesGit,
        issuesArray,
        selectedIssue,
        fetchSelectedIssue,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}
