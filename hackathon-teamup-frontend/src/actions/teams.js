const API = "http://localhost:3000/"
const teamsAPI = API + "teams/"

const loadTeams = teams => ({ type: "LOAD_TEAMS", teams })

const addTeam = team => ({ type: "ADD_TEAM", team })

const removeTeam = team => ({ type: "DELETE_TEAM", team })

export const fetchTeams = () => {
  return dispatch => {
    return fetch(teamsAPI)
      .then(resp => resp.json())
      .then(teams => {
        if (teams.error) {
          alert(teams.error)
        } else {
          console.log(teams)
          dispatch(loadTeams(teams))
        }
      })
  }
}

export const createTeam = team => {
  return dispatch => {
    const body = {
      team
    }
    return fetch(teamsAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newTeam => {
        if (newTeam.error) {
          alert(newTeam.error)
        } else {
          dispatch(addTeam({
            ...newTeam,
            collaborators: []
          }))
        }
      })
  }
}

export const deleteTeam = team => {
  return dispatch => {
    return fetch(teamsAPI + team.id, {
      method: "DELETE"
    })
    .then(dispatch(removeTeam(team)))
  }
}