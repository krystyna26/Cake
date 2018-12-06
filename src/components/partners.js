import React, { Component } from "react";
import styled from "styled-components";

const StyledDescription = styled.h4`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin: 0px 12px 20px;
  min-width: 1177px;
  white-space: no-wrap;
  text-align: center;
`;

const StyledName = styled.h3`
  margin-top: -66px;
  background-color: white;
  opacity: 0.7;
  height: 56px;
  padding: 10px;
`;

const StyledDetails = styled.h5`
  padding: 14px 25px;
  margin: auto;
`;

const StyledDiv = styled.div`
  background-color: white;
  height: 200px;
  margin-top: -10px;
`;

const StyledImage = styled.img`
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledGrid = styled.div`
  padding: 10px;
  grid-template-columns: fit-content(150px) fit-content(960px);
  min-width: 400px;
`;

const StyledInnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
`;

const StyledContact = styled.p`
  font-size: 16px;
  margin: auto;
  padding: 2px 25px;
`;

const StyledInfoDiv = styled.div`
  background-color: white;
  border-top: 2px solid #dedede;
  margin: 20px -52px -52px -52px;
  height: fit-content;
`;

const StyledP = styled.p`
  font-weight: bold;
  text-align: center;
  padding-top: 27px;
`;

const StyledMyContact = styled.div`
  margin: 0px 212px;
  text-align: center;
`;

class Partners extends Component {
  render() {
    return (
      <div>
        <StyledDescription>Our Partners</StyledDescription>
        <StyledInnerGrid>
          <StyledGrid>
            <StyledImage src={require("../images/bakery.jpg")} />
            <StyledName>MORGAN HILL BAKERY</StyledName>
            <StyledDiv>
              <StyledDetails />
              <StyledContact>www.morganhillbakery.com</StyledContact>
              <StyledContact># 408-776-9890</StyledContact>
              <StyledContact>debbie@morganhillbakery.com</StyledContact>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid>
            <StyledImage src={require("../images/consultant.jpg")} />
            <StyledName>A JOYOUS OCCASION</StyledName>
            <StyledDiv>
              <StyledDetails>
                Event Planning, Certified Wedding Consultant
              </StyledDetails>
              <StyledContact>Marcia Ajo</StyledContact>
              <StyledContact>www.ajoyousoccasion.net</StyledContact>
              <StyledContact># 408-267-0773</StyledContact>
              <StyledContact>marciaajo@aol.com</StyledContact>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid>
            <StyledImage src={require("../images/floral.jpg")} />
            <StyledName>MICHI'S FLORAL</StyledName>
            <StyledDiv>
              <StyledDetails>
                Wedding anniversary, Birthdays, Holidays, Bussines and
                Residential Party
              </StyledDetails>
              <StyledContact># 408-778-0523</StyledContact>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid>
            <StyledImage src={require("../images/bakery.jpg")} />
            <StyledName>MORGAN HILL BAKERY</StyledName>
            <StyledDiv>
              <StyledContact>www.morganhillbakery.com</StyledContact>
              <StyledContact># 408-776-9890</StyledContact>
              <StyledContact>debbie@morganhillbakery.com</StyledContact>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid>
            <StyledImage src={require("../images/consultant.jpg")} />
            <StyledName>A JOYOUS OCCASION</StyledName>
            <StyledDiv>
              <StyledDetails>
                Event Planning, Certified Wedding Consultant
              </StyledDetails>
              <StyledContact>Marcia Ajo</StyledContact>
              <StyledContact>www.ajoyousoccasion.net</StyledContact>
              <StyledContact># 408-267-0773</StyledContact>
              <StyledContact>marciaajo@aol.com</StyledContact>
            </StyledDiv>
          </StyledGrid>

          <StyledGrid>
            <StyledImage src={require("../images/floral.jpg")} />
            <StyledName>MICHI'S FLORAL</StyledName>
            <StyledDiv>
              <StyledDetails>
                Wedding anniversary, Birthdays, Holidays, Bussines and
                Residential Party
              </StyledDetails>
              <StyledContact># 408-778-0523</StyledContact>
            </StyledDiv>
          </StyledGrid>
        </StyledInnerGrid>

        <StyledInfoDiv>
          <StyledP>Call or email today to schedule your appointment!</StyledP>
          <StyledMyContact>
            <p>
              380 Tennant Avenue | Morgan Hill | # 408-776-9890 |
              debbie@idoweddingcakes.biz
            </p>
          </StyledMyContact>
        </StyledInfoDiv>
      </div>
    );
  }
}

export default Partners;
