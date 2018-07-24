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
    padding: '52px'
  },
  gridStyle: {
    width: "207px",
    height: "260px",
    padding: '40px',
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
        
        <h4>Short description of business</h4>
        <p>street</p>
        <p>city</p>
        <p>email@gmail.com</p>
        <p>#123-123-1234</p>
      </div>
    );
  }
}

export default Home;
