import React, { Component } from "react";
import styled from "styled-components";

const PicturesContainer = styled.div`
  grid-column-gap: 5px;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
`;

const StyledGrid = styled.img`
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
  grid-template-columns: fit-content(150px) fit-content(960px);
`;

const StyledDescription = styled.div`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 9px 6px 12px rgba(0, 0, 0, 0.04),
    0 10px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 5px;
  margin: 40px 30px;
  min-width: 200px;
`;

const StyledSpan = styled.span`margin: 0 auto;`;

const StyledText = styled.p`
  font-size: 19px;
  padding: 20px;
  text-align: justify;
`;

const StyledInfoDiv = styled.div`
  background-color: white;
  margin: 0px -52px -52px -52px;
  height: fit-content;
`;

const StyledP = styled.p`
  font-weight: bold;
  text-align: center;
  padding-top: 27px;
`;

const StyledContact = styled.div`
  margin: 0px 212px;
  text-align: center;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <PicturesContainer>
          <StyledSpan>
            <StyledGrid src={require("../images/needcake.jpeg")} />
          </StyledSpan>
          <StyledSpan>
            <StyledGrid src={require("../images/needcake.jpeg")} />
          </StyledSpan>
          <StyledSpan>
            <StyledGrid src={require("../images/needcake.jpeg")} />
          </StyledSpan>
          <StyledSpan>
            <StyledGrid src={require("../images/needcake.jpeg")} />
          </StyledSpan>
        </PicturesContainer>

        <StyledDescription>
          <StyledText>
            At 'I Do' Wedding Cakes we are committed to quality work and
            excellent service. We create your wedding cake with the finest
            ingredients, a custom design and the greatest care. At your personal
            consultation and cake tasting, you can customize your cake by
            choosing the flavor of cake, filling and icing. Choose the style and
            design and we will create a beautiful centerpiece for one of the
            most important celebrations of your life - Your Wedding Day!
          </StyledText>
        </StyledDescription>

        <StyledInfoDiv>
          <StyledP>Call or email today to schedule your appointment!</StyledP>
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

export default Home;
