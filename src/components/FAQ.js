import React, { Component } from "react";
import styled from "styled-components";

const StyledDescription = styled.h4`
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 9px 6px 12px rgba(0, 0, 0, 0.04),
    0 10px 10px 0 rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin: 0px auto;
  min-width: 900px;
  text-align: center;
`;

const StyledDiv = styled.div`
  background-color: white;
  display: block;
  margin-top: 52px;
  min-width: 900px;
  padding: 25px;
`;

const StyledQADiv = styled.div`margin: 30px 0;`;

const StyledQuestion = styled.p`
  font-weight: bold;
  margin: 8px 0;
`;

const StyledInfoDiv = styled.div`
  background-color: white;
  margin: 52px -52px -52px -52px;
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

class FAQ extends Component {
  render() {
    return (
      <div>
        <StyledDescription>FREQUENTLY ASKED CAKE QUESTIONS</StyledDescription>
        <StyledDiv>
          <StyledQADiv>
            <StyledQuestion>Q: How big will be my Wedding Cake?</StyledQuestion>
            <p>
              A: Your Wedding Cake will be appropriately sized to feed everyone
              based on the final guest count you give us 10 days before the
              wedding, during your final meeting. Cake diagram in 'Custom' page
              is a sample of typical number of tiers per guest count, however,
              this can vary from bakery to bakery. Please discus tier
              specifications with your bakery directly.
            </p>
          </StyledQADiv>

          <StyledQADiv>
            <StyledQuestion>
              Q: Can we have different flavors for each of the tiers?
            </StyledQuestion>
            <p>
              A: Yes, the bakery is able to accommodate multiple flavors on
              tiered cakes. Please discus available flavors and filling with
              your bakery.
            </p>
          </StyledQADiv>

          <div>
            <StyledQuestion>Q: Are any flavors an upgrade?</StyledQuestion>
            <p>A:</p>
          </div>

          <div>
            <StyledQuestion>
              Q: Can we do cupcakes instead of a traditional wedding cake?
            </StyledQuestion>
            <p>A:</p>
          </div>

          <div>
            <StyledQuestion>
              Q: Can we save the top tier of our wedding for our 1 year
              anniversary?
            </StyledQuestion>
            <p>A:</p>
          </div>

          <div>
            <StyledQuestion>
              Q: Do you have gluten free or vegan options?
            </StyledQuestion>
            <p>A:</p>
          </div>
        </StyledDiv>
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

export default FAQ;
