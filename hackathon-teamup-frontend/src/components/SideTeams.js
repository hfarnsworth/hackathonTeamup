import React from 'react';
import { Link } from 'react-router-dom'

const SideTeams = ({ teams }) => {
  const teamLinks = teams.map ( team => (
    <li key={team.id}><Link key={team.id} to={`/teams/${team.id}`}>{team.name}</Link></li>
  ))
  return(
    <div className="SideBar">
    <h4>List of Teams </h4>
      <ul>{teamLinks}</ul>
    </div>
  )
}


export default SideTeams