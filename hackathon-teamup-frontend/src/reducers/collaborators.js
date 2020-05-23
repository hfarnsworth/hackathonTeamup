export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_COLLABORATORS":
      return action.collaborators
    case "ADD_COLLABORATOR":
      return state.concat(action.collaborator)
    default:
      return state
  }
}