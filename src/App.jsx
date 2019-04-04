import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from './helpers/history';
import authAction from './modules/auth/actions';
import Login from './pages/login';

class App extends Component {
  componentWillMount() {
      this.props.dispatch(authAction.checkAuth())
  }

  logout = () => {
    this.props.dispatch(authAction.logout())
  }

  render() {
    const { isAuth } = this.props.state.auth;

    return (
      <Router history={history}>
        <Route render={() => (
          <div className="App">
            {isAuth ? <button className='btn btn-danger' onClick={this.logout}>logout</button> : <Login />}
          </div>
        )
      } />
      </Router>
    );
  }
}

App.propTypes = {
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(App);
