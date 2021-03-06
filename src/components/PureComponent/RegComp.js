import React, { Component } from "react";

export default class RegComp extends Component {
  render() {
    console.log("Reg Component");
    return <div>Regular Component: {this.props.name}</div>;
  }
}
