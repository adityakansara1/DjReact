import React from 'react';

import { Form, Input, Button, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

import * as actions from '../store/actions/auth'
import { connect } from 'react-redux';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;



class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }
    onFinish(values) {
        this.props.onAuth(values.username, values.email, values.password, values.confirmpassword)
        this.props.history.push('/');
    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?

                        <Spin indicator={antIcon} />

                        :

                        <Form name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name='email'
                                rules={[
                                    {
                                        type: 'email',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Confirm Password"
                                name="confirmpassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password again!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                                    Signup
                        </Button>
                        or
                        <NavLink
                                    style={{ marginRight: '10px' }}
                                    to="/login/"> Login
                        </NavLink>
                            </Form.Item>
                        </Form >
                }
            </div>
        );
    }
};


const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password, confirmpassword) => dispatch(actions.authSignup(username, email, password, confirmpassword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);