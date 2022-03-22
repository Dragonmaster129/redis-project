import React, { Component } from "react";

export default class AllLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkObj: {},
    };
  }

  componentDidMount() {
    let dofetch = async () => {
      fetch("http://localhost:3001/links", { method: "GET" })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log(res.error);
            throw error;
          }
        })
        .then((jsonObj) => {
          console.log(jsonObj);
        })
        .catch((err) => console.log(err));
    };

    dofetch();
  }

  render() {
    return (
      <div className="all-links-wrapper">
        <div className="link-wrapper">LINKS!</div>
        <div className="link-wrapper">LINKS!</div>
        <div className="link-wrapper">LINKS!</div>
      </div>
    );
  }
}
