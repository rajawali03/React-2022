import React from "react";

class Button extends React.Component {
  //   constructor({ className, name }) {
  //     this.name = name;
  //     this.className = className;
  //   }
  render() {
    return <button className={this.props.className}>{this.props.name}</button>;
  }
}
export default Button;
