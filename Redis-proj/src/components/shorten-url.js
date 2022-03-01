import React, { Component } from "react";

export default class ShortenUrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log("submitted the link");
    // Fetch to redis service
  }

  render() {
    return (
      <div className="shorten-url-wrapper">
        <form className="shorten-url-form" onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="link"
            placeholder="Place the link here"
            value={this.state.link}
            onChange={this.handleChange}
            className="shorten-url-input"
          ></input>
          <button className="shorten-url-button">Shorten URL</button>
        </form>
      </div>
    );
  }
}
