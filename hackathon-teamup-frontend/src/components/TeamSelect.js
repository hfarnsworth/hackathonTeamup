import React from 'react';
import { connect } from 'react-redux';
import { createTeamMember } from '../actions/teamMembers';

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {team: this.props.availableTeams[0]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //props are collaborator and availableTeams

  handleChange(e) {
    this.setState({team: this.props.availableTeams[e.target.value]});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTeamMember(this.props.collaborator,this.state.team)
  }

  render() {
    return (
      this.props.availableTeams.length
        ?
          <div className="TeamSelect">
            <form value={this.state.value} onSubmit={this.handleSubmit}>
              <label>
                Select a Team:
                <select onChange={this.handleChange}>
                  {this.props.availableTeams.map( (team,index) =>
                    <option key={index} value={index}>
                      {team.name}
                    </option>
                  )}
                </select>
              </label>
              <input type="submit" value="Join Team" />
            </form>
          </div>
        :
        <div>You're on all the teams</div>
    )
  }
}

export default connect(null,{createTeamMember})(TeamSelect)