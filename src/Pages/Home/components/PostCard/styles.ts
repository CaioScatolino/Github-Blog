import styled from 'styled-components'

export const PostCardContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-height: 16.25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  gap: 1rem;
  border-radius: 1rem;
`
export const PostCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.9rem;
  }
`
