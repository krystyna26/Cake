import React, { Component } from "react";
import Button from "../shared/NavButtons";
import { Table } from "react-bootstrap";
const styles = {
  navStyle: {
    padding: "52px"
    // backgroundImage: "src={require('../images/logo.png')}",
  },
  gridStyle: {
    display: "grid",
    // width: '360px',
    gridTemplateColumns: "fit-content(300px) fit-content(300px) 1fr",
    gridGap: "5px",
    boxSizing: "border-box",
    // height: '900px',
    minWidth: "1200px",
    width: "100%",
    backgroundColor: "pink",
    padding: "0 30px",
    gridGap: "45px",
    boxShadow: "0 0 40px 0 rgba(0, 0, 0, 0.2)"
  },
  titleStyle: {
    margin: "20px 0px"
  },
  tableStyle: {
    width: "350px"
  },
  descriptionStyle: {
    width: "100%",
    borderRadius: "2px",
    boxShadow:
      "0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)",
    padding: "10px"
  },
  logoStyle: {
    // color: "pink",
    width: "250px",
    margin: " 15px"
    // position: "absolute",
    // left: " 85px",
    // background: "pink",
    // borderRadius: "50%"
  },
  pStyle: {
    padding: "20px"
  }
};

class Custom extends Component {
  render() {
    return (
      // style={{backgroundImage: "url('../images/pasta.jpg')"}}
      <div style={styles.navStyle}>
        <p style={styles.descriptionStyle}>
          You may choose different flavors and fillings in each tier at no
          additional charge. Additional cost may include: shape od cake,
          detailed decoration, fresh or gum paste flowers, delivery*
        </p>

        <div style={styles.gridStyle}>
          <div>
            <h2 style={styles.titleStyle}>Final guest count</h2>
            <div style={{ display: "flex" }}>
              <div />
              <img
                style={styles.logoStyle}
                src={require("../images/customcake.png")}
              />
            </div>
          </div>
          <div>
            <h2 style={styles.titleStyle}>Cake flavors</h2>
            {/* // add icon maybe */}
            <table className="table table-sm" style={styles.tableStyle}>
              <tr />
              <tr>
                <td>Vanilla</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Chocolate</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Tuxedo</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Carrot</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Spice</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Poppyseed</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Red Velvet</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Banana</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Lemon</td>
                <td>$20.00</td>
              </tr>
            </table>
          </div>
          <div>
            <h2 style={styles.titleStyle}>Fillings</h2>
            <table className="table table-sm" style={styles.tableStyle}>
              <tr />
              <tr>
                <td>Custard</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Bavarian</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Mocha</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Fudge</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <th>JAMS</th>
              </tr>
              <tr>
                <td>Strawberry</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Raspberry</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Lemon</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Pineapple</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <th>MOUSSES</th>
              </tr>
              <tr>
                <td>Chocolate</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Raspberry</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Lemon</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Strawberry</td>
                <td>$20.00</td>
              </tr>
            </table>
          </div>
          <div>
            <h2 style={styles.titleStyle}>Specialty Fillings</h2>
            <p>($5 - $40 add'l per tier)</p>
            <table className="table table-sm" style={styles.tableStyle}>
              <tr />
              <tr>
                <td>Piccaso</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Chocolate Truffle</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>German Chocolate</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Cappuccino</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Apple</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Fresh Banana</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Strawberries and Creme</td>
                <td>$15.00</td>
              </tr>

              <tr>
                <td>Bailey's and Creme</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Kahlua</td>
                <td>$10.00</td>
              </tr>

              <tr>
                <td>Cream Cheese</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Hazelnut</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Amaretto Creme</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Grand Marnier</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Tiramisu</td>
                <td>$15.00</td>
              </tr>
              <tr>
                <td>Mango</td>
                <td>$15.00</td>
              </tr>
            </table>
          </div>
          <div>
            <h2 style={styles.titleStyle}>Specialty cakes</h2>
            <p>(Starting at $175 add'l per serving)</p>
            <table className="table table-sm" style={styles.tableStyle}>
              <tr />
              <tr>
                <td>White Chocolate Wrap</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Rolled Fondant</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Chocolate Ganache</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Spiral Cake</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Castle Cake</td>
                <td>$10.00</td>
              </tr>
              <tr>
                <td>Fountain of Love**</td>
                <td>$300.00</td>
              </tr>
            </table>
          </div>
        </div>
        <p style={{ marginTop: "10px" }}>
          *Additional charges may include: Shape of Cake, Detailed Decorations,
          Fresh or Gum Paste Flowers or Delivery
        </p>
        <p>**includes flowers and pick up</p>
      </div>
    );
  }
}

export default Custom;
