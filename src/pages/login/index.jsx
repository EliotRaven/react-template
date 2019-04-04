import React from 'react';
import { connect } from 'react-redux';
import authAction from '../../modules/auth/actions';
import PropTypes from 'prop-types';

class Login extends React.Component {
  login = (e) => {
    e.preventDefault();
    this.props.dispatch(
      authAction.login({
        email: this.email.value,
        password: this.password.value,
      }),
    );
    this.email = '';
    this.password = '';
  };

  render() {
    const { auth } = this.props;
    return (
      <div className="login mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <form onSubmit={this.login}>
                <div className="form-group">
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="email"
                    ref={input => this.email = input}
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    ref={input => this.password = input}
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  type="submit"
                  disabled={auth && auth.loading}
                  className="btn btn-success"
                >
                  Submit
                </button>

                {auth && auth.error && (
                  <div className="alert alert-danger mt-2">{auth.error}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
    email: '',
    password: '',
};

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
};

const mapStateToProps = ({ auth }) => auth;

export default connect(mapStateToProps)(Login);
