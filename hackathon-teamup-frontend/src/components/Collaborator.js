import React from 'react'

const Team = ({ collaborator }) => {
  return (
    collaborator
      ? <div className="Collaborator">
          <h3>{collaborator.name}</h3>
          <p>Primary Role: {collaborator.role}</p>
          <p>Skills: {collaborator.skills}</p>
          <p><ul>{collaborator.teams.map ( team =>
            <li>
              {team.name}
            </li>
          )}</ul></p>
        </div>
      : <h3>...Still Loading...</h3>
  )
}

export default Team