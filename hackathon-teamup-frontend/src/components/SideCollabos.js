import React from 'react';
import { Link } from 'react-router-dom'

const SideCollabos = ({ teams }) => {
  const teamLinks = teams.map ( team => (
    <Link key={team.id} to={`/teams/${team.id}`}>{team.name}</Link>
  ))
  return(
    <div className="SideBar">
    <h4>Team List </h4>
      {teamLinks}
    </div>
  )
}


export default SideCollabos