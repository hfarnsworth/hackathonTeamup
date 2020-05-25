const API = "http://localhost:3000/"
const collaboratorsAPI = API + "collaborators/"

const loadCollaborators = collaborators => ({ type: "LOAD_COLLABORATORS", collaborators })

const addCollaborator = collaborator => ({ type: "ADD_COLLABORATOR", collaborator })

const removeCollaborator = collaborator => ({type: "DELETE_COLLABORATOR", collaborator })

export const fetchCollaborators = () => {
  return dispatch => {
    return fetch(collaboratorsAPI)
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
    return fetch(collaboratorsAPI, {
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

export const deleteCollaborator = (collaborator) => {
  return dispatch => {
    return fetch(collaboratorsAPI + collaborator.id, {
      method: "DELETE"
    })
      .then(dispatch(removeCollaborator(collaborator)))
  }
}