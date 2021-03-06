import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);
    //aproch1
    this.inputRef = React.createRef();
    //aproch2
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //aproch1
    this.inputRef.current.focus();
    //aproch2
    if (this.cbRef) {
      this.cbRef.focus();
    }
    }
    
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        Refs
        <input type="text" ref={this.inputRef} /> <br />
        Ref with state
        <input type="text" ref={this.setCbRef} />{" "}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
