import { useContext } from 'react'
import { HomeContext } from '../../../../contexts/HomeContext'
import {
  CardIcons,
  CardSocials,
  ProfileContainer,
  ProfileImg,
  ProfileInfo,
  SocialDetails,
} from './styles'
import github from '../../../../assets/icons/github.svg'
import buildingsolid from '../../../../assets/icons/building-solid.svg'
import usergroup from '../../../../assets/icons/user-group-solid.svg'

export function ProfileCard() {
  const { githubData } = useContext(HomeContext)
  return (
    <ProfileContainer>
      <ProfileImg>
        <img src={githubData.avatar_url} alt="" />
      </ProfileImg>
      <ProfileInfo>
        <h1>{githubData.name}</h1>
        <p>
          {githubData.bio}Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <CardSocials>
          <SocialDetails>
            <CardIcons src={github} />
            <p>{githubData.login}</p>
          </SocialDetails>
          <SocialDetails>
            <CardIcons src={buildingsolid} />
            <p>{githubData.company}</p>
          </SocialDetails>
          <SocialDetails>
            <CardIcons src={usergroup} />
            <p>{githubData.followers} seguidores</p>
          </SocialDetails>
        </CardSocials>
      </ProfileInfo>
    </ProfileContainer>
  )
}
