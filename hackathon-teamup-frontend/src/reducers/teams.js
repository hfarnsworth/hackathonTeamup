export default (state=[], action) => {
  let idx;
  switch (action.type) {
    case "LOAD_TEAMS":
      return action.teams
    case "ADD_TEAM":
      return state.concat(action.team)
    case "DELETE_TEAM":
      idx = state.findIndex(team => team.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default:
      return state
  }
}