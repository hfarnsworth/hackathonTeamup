import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact to="/home"> Teams </NavLink>
      <NavLink exact to="/teams/new"> New Team </NavLink>
      <NavLink exact to="/collaborators"> Collaborators </NavLink>
      <NavLink exact to="/collaborators/new"> New Collaborator </NavLink>
    </div>
  )
}

export default NavBar;