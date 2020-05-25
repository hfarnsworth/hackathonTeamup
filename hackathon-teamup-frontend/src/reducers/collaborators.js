export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_COLLABORATORS":
      return action.collaborators
    case "ADD_COLLABORATOR":
      return state.concat(action.collaborator)
    case "DELETE_COLLABORATOR":
      return state.filter(collaborator => collaborator !== action.collaborator)
    default:
      return state
  }
}