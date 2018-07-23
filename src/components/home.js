import React, { Component } from "react";
import Button from "../shared/NavButtons";

const styles = {
  navStyle: {
    display: "block",
    border: "2px solid red",
    // float: 'left'
    boxSizing: 'border-box',
    
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <h1>I can see Home component</h1>
        <p>Some pictures</p>
        <p>Short description</p>
        <p>Address</p>
      </div>
    );
  }
}

export default Home;
