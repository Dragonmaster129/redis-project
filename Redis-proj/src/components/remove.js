import React, { Component } from "react";

export default class Remove extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="remove">
        <button onClick={() => this.props.removeLink(this.props.keyToLink)}>
          <h4>Remove</h4>
        </button>
      </div>
    );
  }
}
