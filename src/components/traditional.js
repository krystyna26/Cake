import React, { Component } from "react";
import Button from "../shared/NavButtons";

const styles = {
  navStyle: {
    padding: "52px"
  },
  cakeDiv: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 2fr)"
  },
  gridStyle: {
    width: "207px",
    height: "260px",
    margin: "25px",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)",
    boxShadow: "0 0 40px 0 rgba(0, 0, 0, 0.2)"
  },
  descriptionStyle: {
    width: "1100px",
    borderRadius: "2px",
    boxShadow:
      "0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)",
    padding: "10px",
    whiteSpace: "nowrap"
  }
};

class Traditional extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <h4 style={styles.descriptionStyle}>
          Standard wedding cakes are decorated with delicious Buttercream or
          creamy Chantilly icing
        </h4>
        <div style={styles.cakeDiv}>
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

export default Traditional;
