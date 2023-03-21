import styled from 'styled-components'

export const PostInfoCard = styled.div`
  margin-top: -6rem;
  width: 100%;
  height: 13rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.875rem;
  padding: 2rem;
  justify-content: space-between;
`

export const PostLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`
