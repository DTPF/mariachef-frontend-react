import { memo } from 'react'
import './menuBottom.scss'
import { IoHomeSharp } from "react-icons/io5";
import { MdFilterNone } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaBookOpen, FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { routes } from 'router/paths';
import Tooltip from 'views/components/UI/tooltip/Tooltip';

function MenuBottom() {
  return (
    <div className='menu-bottom-mobile'>
      <NavLink key={routes.home} to={routes.home} className='menu-bottom-mobile__item'>
        <Tooltip title="Inicio">
          <IoHomeSharp className='menu-bottom-mobile__item--icon' />
        </Tooltip>
      </NavLink>
      <NavLink key={routes.categories} to={routes.categories} className='menu-bottom-mobile__item'>
        <Tooltip title="Categorías">
          <MdFilterNone className='menu-bottom-mobile__item--icon' />
        </Tooltip>
      </NavLink>
      <NavLink key={routes.favorites} to={routes.favorites} className='menu-bottom-mobile__item'>
        <Tooltip title="Favoritos">
          <FaStar className='menu-bottom-mobile__item--icon' />
        </Tooltip>
      </NavLink>
      <NavLink key={routes.myRecipes} to={routes.myRecipes} className='menu-bottom-mobile__item'>
        <Tooltip title="Mis Recetas">
          <FaBookOpen className='menu-bottom-mobile__item--icon' />
        </Tooltip>
      </NavLink>
      <NavLink key={routes.search} to={routes.search} className='menu-bottom-mobile__item'>
        <Tooltip title="Buscador">
          <FaSearch className='menu-bottom-mobile__item--icon' />
        </Tooltip>
      </NavLink>
    </div>
  )
}

export default memo(MenuBottom)