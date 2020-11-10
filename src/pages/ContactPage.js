import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: "",
      emailSent: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      disable: true,
      emailSent: true,
    });
  };

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label className="" htmlFor="full-name">
                Full Name
              </Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="" htmlFor="message">
                Message
              </Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="4"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Submit
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline-block success-msg"> Email Sent </p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline-block err-msg"> Email NOT Sent </p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
