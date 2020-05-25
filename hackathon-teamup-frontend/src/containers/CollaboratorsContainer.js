import React from 'react';
import Collaborator from '../components/Collaborator.js';
import SideCollabos from '../components/SideCollabos.js';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { deleteCollaborator } from '../actions/collaborators';

class CollaboratorsContainer extends React.Component {
  render() {
    return (
      <div className="CollaboratorsContainer">
        <SideCollabos collaborators={this.props.collaborators} deleteCollaborator={this.props.deleteCollaborator} />

        <Switch>
          <Route exact path="/collaborators/:id" render={ routerProps => {
            const collaborator = this.props.collaborators.find(collaborator => collaborator.id === parseInt(routerProps.match.params.id))
            return <Collaborator {...routerProps} collaborator={collaborator}/>
          }}/>
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = ({ collaborators }) => ({ collaborators })

export default connect(mapStateToProps,{deleteCollaborator})(CollaboratorsContainer)