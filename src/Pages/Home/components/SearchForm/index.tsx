import { useContext } from 'react'
import { HomeContext } from '../../../../contexts/HomeContext'
import { FormContainer, FormInfo, FormInput } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssuesGit, issuesGitData } = useContext(HomeContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchForm(data: SearchFormInputs) {
    const query = `${data.query}`
    fetchIssuesGit(query)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchForm)}>
      <FormInfo>
        <h2>Plubicações</h2>
        <span>{issuesGitData.total_count} publicações</span>
      </FormInfo>
      <FormInput
        type="text"
        placeholder="Buscar Conteúdo"
        {...register('query')}
      />
    </FormContainer>
  )
}
