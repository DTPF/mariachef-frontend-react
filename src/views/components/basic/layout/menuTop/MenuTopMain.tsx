import { NavLink } from "react-router-dom"
import './MenuTopMain.scss'
import { memo, useContext } from "react"
import UserContext from "context/user/UserContext"
import { adminRole } from "context/user/constants"
import { routes } from "router/paths"

function MenuTop() {
  const { user } = useContext(UserContext)
  return (
    <div className='menu-top'>
      <NavLink key={routes.myRecipes} to={routes.myRecipes}>
        Mis Recetas
      </NavLink>
      <NavLink key={routes.favorites} to={routes.favorites}>
        Favoritos
      </NavLink>
      <NavLink key={routes.categories} to={routes.categories}>
        Categorías
      </NavLink>
      <NavLink key={routes.search} to={routes.search}>
        Buscador
      </NavLink>
      {user.role === adminRole && (
        <NavLink key={adminRole} to={routes.adminHome}>
          Admin
        </NavLink>
      )}
    </div>
  )
}
export default memo(MenuTop)