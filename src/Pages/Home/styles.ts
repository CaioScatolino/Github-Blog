import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const IssueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 3rem;

  a {
    text-decoration: none;
    transition: 0.2s;
    border: 2px solid transparent;
    border-radius: 1rem;

    &:hover {
      border: 2px solid ${(props) => props.theme['base-label']};
    }
  }
`
