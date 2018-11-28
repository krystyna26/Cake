import React, { Component } from "react";
import styled from "styled-components";

const StyledDescription = styled.h4`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 9px 6px 12px rgba(0, 0, 0, 0.04),
    0 10px 10px 0 rgba(0, 0, 0, 0.05);
  font-size: 20px;
  padding: 17px;
  margin: 0px auto;
  min-width: 1000px;
`;

const StyledGrid = styled.div`
  background-color: white;
  box-shadow: 0 9px 6px 12px rgba(0, 0, 0, 0.04),
    0 10px 10px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 45px;
  margin: 52px 0;
  min-width: 1000px;
  padding: 0 30px;
  width: 100%;
`;

const StyledCakeIcon = styled.img`
  margin: 15px;
  width: 250px;
`;

const StyledTableTitle = styled.h2`margin: 20px 0;`;

const StyledP = styled.p`
  margin: 15px 0px;
  font-size: 15px;
`;

const StyledInfoDiv = styled.div`
  background-color: white;
  margin: 52px -52px -52px -52px;
  height: fit-content;
`;

const StyledPP = styled.p`
  font-weight: bold;
  text-align: center;
  padding-top: 27px;
`;

const StyledContact = styled.div`
  margin: 0px 212px;
  text-align: center;
`;

const styles = {
  tableStyle: {
    width: "350px"
  }
};

class Custom extends Component {
  render() {
    return (
      <div>
        <StyledDescription>
          You may choose different flavors and fillings in each tier at no
          additional charge. Additional cost may include: shape od cake,
          detailed decoration, fresh or gum paste flowers, delivery
        </StyledDescription>

        <StyledGrid>
          <div>
            <StyledTableTitle>Final guest count</StyledTableTitle>
            <StyledCakeIcon src={require("../images/customWhite.png")} />
          </div>

          <div>
            <StyledTableTitle>Cake flavors</StyledTableTitle>
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
            <StyledTableTitle>Fillings</StyledTableTitle>
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
            <StyledTableTitle>Specialty Fillings</StyledTableTitle>
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
            <StyledTableTitle>Specialty cakes</StyledTableTitle>
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
        </StyledGrid>

        <StyledDescription>
          <StyledP>
            *Additional charges may include: Shape of Cake, Detailed
            Decorations, Fresh or Gum Paste Flowers or Delivery
          </StyledP>
          <StyledP>**includes flowers and pick up</StyledP>
        </StyledDescription>

        <StyledInfoDiv>
          <StyledPP>Call or email today to schedule your appointment!</StyledPP>
          <StyledContact>
            <p>
              380 Tennant Avenue | Morgan Hill | # 408-776-9890 |
              debbie@idoweddingcakes.biz
            </p>
          </StyledContact>
        </StyledInfoDiv>
      </div>
    );
  }
}

export default Custom;
