export const loadTeams = teams => ({ type: "LOAD_TEAMS", teams })

export const addTeam = team => ({ type: "ADD_TEAM", team })

export const fetchTeams = () => {
  return dispatch => {
    return fetch("http://localhost:3000/teams")
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

export const createTeam = (team) => {
  return dispatch => {
    const body = {
      team
    }
    return fetch("http://localhost:3000/teams", {
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
          dispatch(addTeam(newTeam))
        }
        return newTeam
      })
  }
}