import React from 'react'

const Team = ({ team }) => {
  return (
    team
      ? <div className="Team">
          <h3>{team.name}</h3>
          <p>Project Description: {team.description}</p>
          <p><ul>{team.collaborators.map ( collaborator =>
            <li>
              {collaborator.name}
            </li>
          )}</ul></p>
        </div>
      : <h3>...Still Loading...</h3>
  )
}

export default Team