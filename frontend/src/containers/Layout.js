import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

import * as actions from '../store/actions/auth'
import { connect } from 'react-redux';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {

  render() {
    return (
      <Layout className="layout" >
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>

            <Menu.Item key="1">
              <Link to="/">Posts</Link>
            </Menu.Item>

            {this.props.isAuthenticated ?

              <Menu.Item key="2" onClick={this.props.logout}>
                Logout
            </Menu.Item>

              :

              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
            }

          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">List</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
      </Footer>
      </Layout>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));

