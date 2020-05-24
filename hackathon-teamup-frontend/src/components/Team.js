import React from 'react'

const Team = ({ team }) => {
  return (
    team
      ? <div className="Team">
          <h3>{team.name}</h3>
          <p>Project Description: {team.description}</p>
          <ul>{team.collaborators.map ( collaborator =>
            <li key={collaborator.id}>
              {collaborator.name}
            </li>
          )}</ul>
        </div>
      : <h3>...No Team Here...</h3>
  )
}

export default Team