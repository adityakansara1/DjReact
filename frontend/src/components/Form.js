import React from 'react';
import { Form, Input, Button } from 'antd';
import Axios from 'axios';

class CustomForm extends React.Component {

    handleFormSubmit = (e, requestType, articleID) => {
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;

        switch (requestType) {
            case 'post':
                Axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.err(err));
                this.forceUpdate();
                break;

            case 'put':
                Axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.err(err))
                this.forceUpdate();
        }
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmitCapture={(e) => this.handleFormSubmit(e, this.props.requestType, this.props.articleID)} >
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Enter Title" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter Content..." />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;