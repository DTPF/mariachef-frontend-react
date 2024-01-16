import { NavLink } from "react-router-dom"
import MenuTopMain from 'views/components/basic/layout/menuTop/MenuTopMain'
import Search from 'views/components/basic/layout/search'
import LoginIcon from 'views/components/basic/layout/loginIcon'
import Logo from 'assets/img/Logo-MSR.png'
import './HeaderMain.scss'
import useWindowSizeReport from "hooks/useWindowSizeReport"
import { routes } from "router/paths"
import { memo } from "react"

function HeaderMain() {
  const [isMobile] = useWindowSizeReport()
  return (
    <header className='header-main'>
      <NavLink to={routes.home} >
        <img src={Logo} className="header-main__logo" alt='Recetas MRS`s' />
      </NavLink>
      {!isMobile && <MenuTopMain />}
      <LoginIcon />
    </header>
  )
}

export default memo(HeaderMain)