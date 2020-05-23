import React from 'react'
import Team from '../components/Team.js'
import SideTeams from '../components/SideTeams.js'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

const TeamsContainer = ({ teams }) => {
    return (
      <div className="TeamsContainer">
        <SideTeams teams={teams} />

        <Switch>
          <Route exact path="/teams/:id" render={(routerProps)=> {
            const team = teams.find(team => team.id === parseInt(routerProps.match.params.id))
            return <Team {...routerProps} team={team}/>
          }}/>
        </Switch>

      </div>
    )
}

// long-hand way of writing mstp function:
// const mapStateToProps = state => {
//   return {
//     cars: state.cars
//   }
// }

// I could also use destructuring and arrow function implicit return:
const mapStateToProps = ({ teams }) => ({ teams })

export default connect(mapStateToProps)(TeamsContainer)