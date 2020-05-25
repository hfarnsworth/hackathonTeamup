export default (state=[], action) => {
  let idx;
  let collaborators = [];
  switch (action.type) {
    case "LOAD_TEAMS":
      return action.teams
    case "ADD_TEAM":
      return state.concat(action.team)
    case "DELETE_TEAM":
      return state.filter(team => team !== action.team)
    case "ADD_COLLABORATOR_TO_TEAM":
      idx = state.findIndex(team => team.id  === action.teamID);
      collaborators = state[idx].collaborators;
      return [
        ...state.slice(0, idx),
        {
           ...state[idx],
           collaborators: [...collaborators, action.collaborator],
        },
        ...state.slice(idx + 1),
     ]
    default:
      return state
  }
}