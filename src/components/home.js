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
    padding: "52px"
  },
  gridStyle: {
    width: "207px",
    height: "260px",
    margin: "25px",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)",
    boxShadow: "0 0 40px 0 rgba(0, 0, 0, 0.2)"
    // padding: '40px',
    // borderRadius: "6px",
  },
  descriptionStyle: {
    minWidth: "200px",
    // maxWidth: "1000px",
    borderRadius: "2px",
    boxShadow:
      "0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)",
    padding: "5px",
    margin: "0 30px"
  },
  pStyle: {
    padding: "20px",
    fontSize: "19px",
    textAlign: "justify"
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 2fr)" }}>
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
            />
          </span>
        </div>

        <div style={styles.descriptionStyle}>
          <p style={styles.pStyle}>
            At 'I Do' Wedding Cakes we are committed to quality work and
            excellent service. We create your wedding cake with the finest
            ingredients, a custom design and the greatest care. At your personal
            consultation and cake tasting, you can customize your cake by
            choosing the flavor of cake, filling and icing. Choose the style and
            design and we will create a beautiful centerpiece for one of the
            most important celebrations of your life - Your Wedding Day!
          </p>
          <p style={styles.pStyle}>
            Call or email today to schedule your appointment!
          </p>
          <p
            style={{
              margin: "20px",
              textAlign: "center",
              paddingTop: "10px",
              borderTop: "1px solid black"
            }}
          >
            380 Tennant Avenue | Morgan Hill | debbie@idoweddingcakes.biz | #
            408-776-9890
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
