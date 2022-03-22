import React, { Component } from "react";
import Remove from "./remove";

export default class AllLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkObj: {},
    };
    this.linkItems = this.linkItems.bind(this);
    this.removeLink = this.removeLink.bind(this);
  }

  componentDidMount() {
    let dofetch = async () => {
      await fetch("http://localhost:3001/links", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log(res.error);
            throw error;
          }
        })
        .then((jsonObj) => {
          this.setState({ linkObj: jsonObj });
        })
        .catch((err) => console.log(err));
    };

    dofetch();
  }

  linkItems() {
    return Object.keys(this.state.linkObj).map((key, i) => {
      return (
        <div className="link" key={i}>
          <h2>
            <a href={this.state.linkObj[key]}>http://localhost:3000/{key}</a>
          </h2>
          <Remove removeLink={this.removeLink} keyToLink={key} />
        </div>
      );
    });
  }

  removeLink(key) {
    // event.preventDefault();
    console.log(key);
  }

  render() {
    return (
      <div className="all-links-wrapper">
        <div className="link-header-wrapper">
          <h1>LINKS!</h1>
        </div>
        <div className="links-wrapper">{this.linkItems()}</div>
      </div>
    );
  }
}
