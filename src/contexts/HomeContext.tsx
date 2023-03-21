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

interface HomeContextType {
  // issues: IssuesProps[]
  githubData: UserData
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

  return (
    <HomeContext.Provider value={{ githubData }}>
      {children}
    </HomeContext.Provider>
  )
}
