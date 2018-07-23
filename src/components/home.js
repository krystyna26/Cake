import React, { Component } from "react";
import Button from "../shared/NavButtons";

const styles = {
  navStyle: {
    display: "block",
    border: "2px solid red"
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <h1>I can see Home component</h1>
      </div>
    );
  }
}

export default Home;
