import React, { Component } from "react";

const styles = {
  navStyle: {
    padding: "52px"
  },
  gridStyle: {
    boxShadow:
      "0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)",
    marginBottom: "25px",
    minWidth: "400px",
    padding: "40px"
  },
  descriptionStyle: {
    borderRadius: "2px",
    boxShadow:
      "0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)",
    marginBottom: "25px",
    minWidth: "1240px",
    padding: "10px",
    textAlign: "center"
  },
  picStyle: {
    height: "200px",
    objectFit: "cover",
    marginBottom: "10px",
    width: "100%"
  }
};

class Partners extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <h4 style={styles.descriptionStyle}>Our Partners</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 2fr)" }}>
          <div style={styles.gridStyle}>
            <h3>MORGAN HILL BAKERY</h3>
            <img
              style={styles.picStyle}
              src={require("../images/bakery.jpg")}
            />
            <h5>www.morganhillbakery.com</h5>
            <h5># 408-776-9890</h5>
            <h5>debbie@morganhillbakery.com</h5>
          </div>
          <div style={styles.gridStyle}>
            <h3>A JOYOUS OCCASION</h3>
            <img
              style={styles.picStyle}
              src={require("../images/consultant.jpg")}
            />
            <h5>Event Planning, Certified Wedding Consultant</h5>
            <h5>Marcia Ajo</h5>
            <h5>www.ajoyousoccasion.net</h5>
            <h5># 408-267-0773</h5>
            <h5>marciaajo@aol.com</h5>
          </div>
          <div style={styles.gridStyle}>
            <h3>MICHI'S FLORAL</h3>
            <img
              style={styles.picStyle}
              src={require("../images/floral.jpg")}
            />
            <h5>
              Wedding anniversary, Birthdays, Holidays, Bussines and Residential
              Party
            </h5>
            <h5># 408-778-0523</h5>
          </div>
          <div style={styles.gridStyle}>
            <h3>Partner_4</h3>
            <h5>www.wearepartners.com</h5>
            <h5># 123-456-7890</h5>
            <h5>findme@gmail.com</h5>
          </div>
          <div style={styles.gridStyle}>
            <h3>Partner_1</h3>
            <h5>www.wearepartners.com</h5>
            <h5># 123-456-7890</h5>
            <h5>findme@gmail.com</h5>
          </div>
          <div style={styles.gridStyle}>
            <h3>Partner_2</h3>
            <h5>www.wearepartners.com</h5>
            <h5># 123-456-7890</h5>
            <h5>findme@gmail.com</h5>
          </div>
          <div style={styles.gridStyle}>
            <h3>Partner_3</h3>
            <h5>www.wearepartners.com</h5>
            <h5># 123-456-7890</h5>
            <h5>findme@gmail.com</h5>
          </div>
          <div style={styles.gridStyle}>
            <h3>Partner_4</h3>
            <h5>www.wearepartners.com</h5>
            <h5># 123-456-7890</h5>
            <h5>findme@gmail.com</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
