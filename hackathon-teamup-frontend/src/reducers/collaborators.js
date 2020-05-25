export default (state=[], action) => {
  let idx;
  switch (action.type) {
    case "LOAD_COLLABORATORS":
      return action.collaborators
    case "ADD_COLLABORATOR":
      return state.concat(action.collaborator)
    case "DELETE_COLLABORATOR":
      idx = state.findIndex(collaborator => collaborator.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default:
      return state
  }
}