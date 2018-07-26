import React, { Component } from "react";
import Button from "../shared/NavButtons";
import { Table } from "react-bootstrap";
const styles = {
  navStyle: {
    padding: "52px"
  }
};

class Custom extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <p>
          You may choose different flavors and fillings in each tier if you wish
          at no additional charge*
        </p>
        <div style={{ display: "" }}>
          <h2>Cake flavors</h2>
          <Table striped bordered condensed hover>
            <tr>
              <th />
            </tr>
            <tr>
              <td>Vanilla</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Chocolate</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Tuxedo</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Carrot</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Spice</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Poppyseed</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Red Velvet</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Banana</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Lemon</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
          </Table>
          <h2>Fillings</h2>
          <table>
            <tr>
              <th />
              <th />
              <th />
              <th />
            </tr>
            <tr>
              <td>Custard</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Bavarian</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Mocha</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Fudge</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <th>JAMS</th>
            </tr>
            <tr>
              <td>Strawberry</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Raspberry</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Lemon</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Pineapple</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <th>MOUSSES</th>
            </tr>
            <tr>
              <td>Chocolate</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Raspberry</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Lemon</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Strawberry</td>
              <td>$20.00</td>
              <input type="checkbox" />
            </tr>
          </table>
          <h2>SPECIALTY FILLINGS</h2>
          <table>
            <tr>
              <th />
              <th />
              <th />
              <th>Price</th>
            </tr>
            <tr>
              <td>Piccaso</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Chocolate Truffle</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>German Chocolate</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Cappuccino</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Apple</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Fresh Banana</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Strawberries and Creme</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>

            <tr>
              <td>Bailey's and Creme</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Kahlua</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>

            <tr>
              <td>Cream Cheese</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Hazelnut</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Amaretto and Creme</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Grand Marnier</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Tiramisu</td>
              <td>$15.00</td>
              <input type="checkbox" />
            </tr>
          </table>
          <h2>Specialty cakes</h2>
          <table>
            <tr>
              <th />
              <th />
              <th />
              <th />
            </tr>
            <tr>
              <td>White Chocolate Wrap</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Rolled Fondant</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Chocolate Ganuche</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Spiral Cake</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Castle Cake</td>
              <td>$10.00</td>
              <input type="checkbox" />
            </tr>
            <tr>
              <td>Fountain of Love**</td>
              <td>$300.00</td>
              <input type="checkbox" />
            </tr>
          </table>
          <p>**includes flowers and pick up</p>
        </div>
        <p>
          *Additional charges may include: Shape of Cake, Detailed Decorations,
          Fresh or Gum Paste Flowers or Delivery
        </p>
      </div>
    );
  }
}

export default Custom;
