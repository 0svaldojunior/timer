import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logoTimer from '../../assets/logoTimer.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTimer} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
