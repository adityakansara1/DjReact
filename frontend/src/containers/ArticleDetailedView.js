import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
import CustomForm from "../components/Form";

class ArticleDetailedList extends React.Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios
      .get(`http://127.0.0.1:8000/api/${articleID}`)
      .then((res) => {
        this.setState({
          article: res.data,
        });
      })
      .catch((res) => {
        console.log(res);
      });
  }

  handleDelete = () => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
    this.props.history.push('/');
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <br />
        <CustomForm requestType="put" articleID={this.props.match.params.articleID} btnText="PUT" />
        <form onSubmitCapture={this.handleDelete}>
          <Button type="danger" htmlType="submit">DELETE</Button>
        </form>
      </>
    );
  }
}

export default ArticleDetailedList;
