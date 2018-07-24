import React, { Component } from "react";
import Button from "../shared/NavButtons";

const styles = {
  navStyle: {
    // display: "block",
    // border: "2px solid red",
    // // float: 'left'
    // boxSizing: "border-box",
    // position: "relative",
    // top: "340px"
  },
  gridStyle: {
    width: "200px",
    height: "260px",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)"
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <div style={{ display: "" }}>
          <span>
            <img
              style={styles.gridStyle}
              src={require("../images/needcake.jpeg")}
            />
          </span>
          <span>
            <img
              style={styles.gridStyle}
              src={require("../images/needcake.jpeg")}
            />{" "}
          </span>
          <span>
            <img
              style={styles.gridStyle}
              src={require("../images/needcake.jpeg")}
            />
          </span>
          <span>
            <img
              style={styles.gridStyle}
              src={require("../images/needcake.jpeg")}
            />
          </span>
        </div>
        <p>Some pictures</p>
        <p>Short description</p>
        <p>Address</p>
      </div>
    );
  }
}

export default Home;
