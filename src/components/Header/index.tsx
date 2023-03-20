import { HeaderContainer } from './style'
import cover from '../../assets/cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={cover} alt="" />
    </HeaderContainer>
  )
}
