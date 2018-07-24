import React, { Component } from "react";

const styles = {
  navStyle: {
    padding: '52px'
  },
  gridStyle: {
    width: "207px",
    height: "260px",
    padding: '40px',
    gridTemplateColumns: "fit-content(150px) fit-content(960px)"
  }
};

class Fun extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
      <h4>Short description of fun cakes</h4>
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
        
      </div>
    );
  }
}

export default Fun;
