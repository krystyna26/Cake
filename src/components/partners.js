import React, { Component } from "react";

const styles = {
  navStyle: {
    padding: '52px'
  },
  gridStyle: {
    width: "310px",
    height: "260px",
    padding: '40px',
    boxShadow: '0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)',
    gridTemplateColumns: "fit-content(150px) fit-content(960px)"
  },
  descriptionStyle:{
    width: '100%',
    borderRadius: '2px',
    boxShadow: '0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)',
    gridTemplateColumns: "fit-content(150px) fit-content(960px)",
    padding:'10px',
  }
};

class Partners extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
      <h4 style={styles.descriptionStyle}>Partners</h4>
        <div style={{ display: "grid",  gridTemplateColumns: "repeat(4, 2fr)" }}>
          
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
