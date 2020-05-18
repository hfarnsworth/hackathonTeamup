export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_TEAMS":
      return action.teams
    case "ADD_TEAM":
      return state.concat(action.team)
    default:
      return state
  }
}