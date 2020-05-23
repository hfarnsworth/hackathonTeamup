import React from 'react'

const Collaborator = ({ collaborator }) => {
  return (
    collaborator
      ? <div className="Collaborator">
          <h3>{collaborator.name}</h3>
          <p>Primary Role: {collaborator.role}</p>
          <p>Skills: {collaborator.skills}</p>
          <ul>{collaborator.teams.map ( team =>
            <li key={team.id}>
              {team.name}
            </li>
          )}</ul>
        </div>
      : <h3>...Still Loading...</h3>
  )
}

export default Collaborator