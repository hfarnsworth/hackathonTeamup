export const loadCollaborators = collaborators => ({ type: "LOAD_COLLABORATORS", collaborators })

export const addCollaborator = collaborator => ({ type: "ADD_COLLABORATOR", collaborator })

export const fetchCollaborators = () => {
  return dispatch => {
    return fetch("http://localhost:3000/collaborators")
      .then(resp => resp.json())
      .then(collaborators => {
        if (collaborators.error) {
          alert(collaborators.error)
        } else {
          console.log(collaborators)
          dispatch(loadCollaborators(collaborators))
        }
      })
  }
}

export const createCollaborator = (collaborator) => {
  return dispatch => {
    const body = {
      collaborator
    }
    return fetch("http://localhost:3000/collaborators", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newCollaborator => {
        if (newCollaborator.error) {
          alert(newCollaborator.error)
        } else {
          dispatch(addCollaborator(newCollaborator))
        }
        return newCollaborator
      })
  }
}