import React, { Component } from "react";

export default class AllLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkObj: {},
    };
    this.linkItems = this.linkItems.bind(this);
  }

  componentDidMount() {
    let dofetch = async () => {
      fetch("http://localhost:3001/links", {
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
        <div className={i} key={i}>
          <h2>
            <a href={this.state.linkObj[key]}>http://localhost:3000/{key}</a>
          </h2>
        </div>
      );
    });
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
