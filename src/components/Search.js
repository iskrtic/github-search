import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Search extends React.Component {
  state = { uneseno: "" };

  handleChange = (event) => {
    const trenutno = event.target.value;
    this.setState({ uneseno: trenutno });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.setUser(this.state.uneseno);
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label style={{ textAlign: "left" }}>
            GitHub username:
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='e.g. facebook'
            name='vozac'
            onChange={this.handleChange}
            value={this.state.uneseno}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          onClick={(event) => this.handleSubmit(event)}
          style={{ marginTop: "20px", width: "100%" }}>
          GO!
        </Button>
      </Form>
    );
  }
}

Search.propTypes = {
  setUser: PropTypes.func,
};
