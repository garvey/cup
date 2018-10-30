import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTournament } from '../../store/actions/tournamentActions';
import { Redirect } from 'react-router-dom';

class CreateTournament extends Component {
  state = {
    name: '',
    buyIn: '',
    content: '',
    member: '',
    startDate: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createTournament(this.state);
    this.props.history.push('/dashboard');
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Tournament</h5>
          <div className="row">
            <div className="col s6">
              <div className="input-field">
                <label htmlFor="name">Tournament Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix">euro_symbol</i>
              <input
                id="buyIn"
                type="text"
                onChange={this.handleChange}
                className="validate"
                required
              />
              <label htmlFor="buyIn">Tournament Buy-in</label>
            </div>

            <div className="input-field col s12">
              <label htmlFor="content">Tournament Description</label>
              <textarea
                id="content"
                onChange={this.handleChange}
                className="materialize-textarea"
              />
            </div>
          </div>

          <div className="input-field col s12">
            <select
              value={this.state.value}
              onChange={this.handleChange}
              id="startDate"
              className="browser-default"
              required
            >
              <option value="" disabled selected>
                Choose Tournament start date
              </option>
              <option value="Gameweek 1">Gameweek 1</option>
              <option value="Gameweek 2">Gameweek 2</option>
              <option value="Gameweek 3">Gameweek 3</option>
            </select>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Create Tournament
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTournament: tournament => dispatch(createTournament(tournament))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTournament);
