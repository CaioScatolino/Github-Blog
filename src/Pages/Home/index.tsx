import {
  CardIcons,
  CardSocials,
  HomeContainer,
  ProfileCard,
  ProfileImg,
  ProfileInfo,
  SocialDetails,
} from './styles'

import github from '../../assets/icons/github.svg'
import buildingsolid from '../../assets/icons/building-solid.svg'
import usergroup from '../../assets/icons/user-group-solid.svg'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard>
        <ProfileImg>
          <img src="https://github.com/caioscatolino.png" alt="" />
        </ProfileImg>
        <ProfileInfo>
          <h1>Caio Scatolino</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <CardSocials>
            <SocialDetails>
              <CardIcons src={github} />
              <p>caioscatolino</p>
            </SocialDetails>
            <SocialDetails>
              <CardIcons src={buildingsolid} />
              <p>Aptiv</p>
            </SocialDetails>
            <SocialDetails>
              <CardIcons src={usergroup} />
              <p>32 seguidores</p>
            </SocialDetails>
          </CardSocials>
        </ProfileInfo>
      </ProfileCard>
    </HomeContainer>
  )
}
