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
    // padding: '40px',
    margin: '25px',
    gridTemplateColumns: "fit-content(150px) fit-content(960px)",
    // borderRadius: '5px'
    boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.2)',
  },
  descriptionStyle:{
    width: '50%',
    borderRadius: '2px',
    boxShadow: '0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)',
    padding:'5px',
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <div style={{ display: "grid",  gridTemplateColumns: "repeat(4, 2fr)"  }}>
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
        
        <h4 style={styles.descriptionStyle}>Short description of business</h4>
        <p>street</p>
        <p>city</p>
        <p>email@gmail.com</p>
        <p>#123-123-1234</p>
      </div>
    );
  }
}

export default Home;
