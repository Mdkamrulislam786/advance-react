import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
import MemoComp from "../Memo";

export default class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kamrul",
    };
  }
  //UNCOMMENT AND SEE CONSOLE
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Kamrul",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component");

    return (
      <div>
        <p>See console, comp dosent re-render after 2sec as the state is same</p>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

/*
TRY REMOVING THE PURECOMPONET AND REPLACE WITH COMPONENT, 
THEN SEE CONSOLE TO OBSERVE THE FUNC WITOUT PURECOMPONENT,
NEVER MUTATE THE STATE, ALWAYS RETURN A NEW OBJECT THAT REFLECTS THE NEW STATE
PC implements THE shouldComponentUpdate lifecycle method and shallow compare the state and props of the comp
if thers no difference,it dosent re-render--performance boost
good idea to make child comp PC too
*/
