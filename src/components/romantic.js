import React, { Component } from "react";
import styled from "styled-components";

const StyledDescription = styled.h4`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin: 0px 42px 20px;
  min-width: 1049px;
`;

const StyledPicturesGrid = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(4, 2fr);
  margin-bottom: 20px;
`;

const StyledSpan = styled.span`
  margin: 0 auto;
  padding: 10px;
`;

const StyledGrid = styled.img`
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
  grid-template-columns: fit-content(150px) fit-content(960px);
`;

const StyledInfoDiv = styled.div`
  background-color: white;
  border-top: 2px solid #dedede;
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

class Romantic extends Component {
  render() {
    return (
      <div>
        <StyledDescription>
          Short description of romantic cakes
        </StyledDescription>

        <StyledPicturesGrid>
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
        </StyledPicturesGrid>

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

export default Romantic;
