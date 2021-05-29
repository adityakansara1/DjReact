import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import CustomLayout from "./containers/Layout";
import React, { Component } from "react";

import * as actions from './store/actions/auth';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);