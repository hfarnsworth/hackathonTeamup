import React, { Component } from 'react';
import NavBar from './components/NavBar';
import NewTeam from './components/NewTeam';
import TeamsContainer from './containers/TeamsContainer';
import CollaboratorsContainer from './containers/CollaboratorsContainer';
import { connect } from 'react-redux';
import { fetchCollaborators } from './actions/collaborators';
import { fetchTeams } from './actions/teams';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchCollaborators()
    this.props.fetchTeams()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hackathon Teamup</h1>
        </header>
        <NavBar />
        <Switch>
          <Route exact path="/teams/new" component={NewTeam}/>
          <Route exact path="/collaborators" component={CollaboratorsContainer}/>
          <Route path="/" component={TeamsContainer}/>
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     team: state.team,
//     collaborator: state.collaborator
//   }
// }
 
export default connect(null, { fetchCollaborators, fetchTeams })(App)