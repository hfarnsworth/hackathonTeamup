import React from 'react'
import Collaborator from '../components/Collaborator.js'
import SideCollabos from '../components/SideCollabos.js'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

const CollaboratorsContainer = ({ collaborators }) => {
    return (
      <div className="CollaboratorsContainer">
        <SideCollabos collaborators={collaborators} />

        <Switch>
          <Route exact path="/collaborator/:id" render={(routerProps)=> {
            const collaborator = collaborators.find(collaborator => collaborator.id === parseInt(routerProps.match.params.id))
            return <Collaborator {...routerProps} collaborator={collaborator}/>
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
const mapStateToProps = ({ collaborators }) => ({ collaborators })

export default connect(mapStateToProps)(CollaboratorsContainer)