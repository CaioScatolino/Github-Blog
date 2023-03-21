import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: -6rem;
  width: 100%;
  height: 13rem;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.875rem;
`
export const ProfileImg = styled.div`
  display: flex;
  flex-direction: row;

  img {
    max-width: 148px;
    margin: 2rem;
    border-radius: 8px;
    margin-left: 2.5rem;
  }
`
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
  margin: 2rem 0;
  justify-content: space-between;
`

export const CardSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.2rem;
`

export const CardIcons = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  color: red;
  background-color: ${(props) => props.theme['base-label']};
  border-radius: 999px;
  padding: 0.1rem;
`

export const SocialDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`
