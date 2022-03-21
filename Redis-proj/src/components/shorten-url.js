import React, { Component, isValidElement } from "react";

export default class ShortenUrl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: "",
      shortenedUrl: "",
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
    console.log(this.state.link);
    let dofetch = async () => {
      const bodyData = "[" + JSON.stringify(this.state.link) + "]";
      fetch("http://localhost:3001/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: bodyData,
      })
        .then((res) => {
          console.log("123");
          if (res.ok) {
            console.log(res);
            return res.text();
          } else {
            console.log(res.error); // may have to await
            throw error;
          }
        })
        .then((text) => {
          console.log(text);
        })
        .catch((error) => {
          console.log(error);
        });

      // if (response.ok) {
      //   let json = await response.json();
      // } else {
      //   alert("HTTP-Error: " + response.status);
      // }
    };
    dofetch();
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
        <div className="shortened-url">
          <h1>Your shortened URL is:</h1>
          <h1>{this.state.shortenedUrl}</h1>
        </div>
      </div>
    );
  }
}
