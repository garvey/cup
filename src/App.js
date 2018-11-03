import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateTournament from './components/tournaments/CreateTournament';
import TournamentDetails from './components/tournaments/TournamentDetails';
import ProfileDetails from './components/profile/ProfileDetails';
import FixtureDetails from './components/fixtures/FixtureDetails';
import Website from './components/website/Website';
import Payment from './components/payment/PaymentDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Website} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create-tournament" component={CreateTournament} />
            <Route path="/tournament/:id" component={TournamentDetails} />
            <Route path="/profile" component={ProfileDetails} />
            <Route path="/tournament/:id/fixtures" component={FixtureDetails} />
            <Route path="/payment" component={Payment} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
