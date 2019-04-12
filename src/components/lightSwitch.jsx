import React from "react";

class LightSwitch extends React.Component {

  state = {
    active: false
  };

  toggleClass() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div className="container text-center">
        <br /> <br />
        <button className={this.state.active ? "btn btn-danger" : "btn btn-success"} onClick={this.toggleClass.bind(this)}>
          {this.state.active ? "Dark Mode" : "Light Mode"}
        </button>
        <div className={this.state.active ? "bgLight light-on" : "bgLight light-off"} />
      </div>
    );
  }

}

export default LightSwitch;
