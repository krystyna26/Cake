import React, { Component } from "react";
import styled from "styled-components";

import Custom from "./custom";
import FAQ from "./FAQ";
import Fun from "./fun";
import Home from "./home";
import img from "../images/food.jpg";
import Partners from "./partners";
import Romantic from "./romantic";
import Traditional from "./traditional";

import Button from "../shared/NavButtons";

const StyledContainer = styled.div`
  font-family: Comic Sans MS;
  margin: -8px;
`;

const StyledNavBar = styled.div`
  border-bottom: 2px solid #dedede;
  box-sizing: border-box;
  color: pink;
  grid-template-columns: fit-content(150px) fit-content(960px);
  height: 87px;
  list-style-type: none;
  text-align: center;
  width: 101%;
  position: fixed;
  background-color: white;
  z-index: 1;
`;

const StyledLogo = styled.img`
  background: pink;
  border-radius: 50%;
  color: pink;
  left: 85px;
  margin: 15px;
  position: absolute;
  width: 67px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 95px;
  margin-left: 200px;
  width: 70%;
`;

const StyledListItems = styled.div`
  display: inline-block;
  height: 3.25em;
  margin: 10px;
  padding-top: 20px;
  transition: 0.3s background-color;
`;

const StyledMainImage = styled.div`
  background-image: url(${img});
  background-attachment: fixed;
  float: left;
  height: 352px;
  margin-top: 87px;
  width: 100%;
  z-index: -1;
`;

const StyledBackground = styled.div`
  background-color: black;
  height: inherit;
  opacity: 0.5;
  z-index: 1;
`;

const StyledIDO = styled.h1`
  color: white;
  font-family: Comic Sans MS;
  font-size: 75px;
  padding: 133px;
  text-align: center;
  white-space: no-wrap;
`;

const StyledPageContent = styled.div`
  background-image: linear-gradient(
    to bottom right,
    rgb(255, 204, 212),
    rgb(255, 179, 190),
    rgb(255, 153, 168),
    rgb(255, 128, 147),
    rgb(255, 102, 125)
  );
  left: 0;
  position: absolute;
  top: 431px;
  width: 100%;
  padding: 52px;
`;

class Nav extends Component {
  state = { showContent: "Home", mounted: false };

  componentDidMount = () => {
    this.setState({ mounted: true });
  };

  buttonClicked = (e, buttonName, mounted) => {
    e.preventDefault();
    e.stopPropagation();
    let currentState = this.state[mounted];
    this.setState({ [mounted]: currentState ? false : true });

    switch (buttonName) {
      case "Home":
        this.setState({
          showContent: "Home"
        });
        return;
      case "Traditional":
        this.setState({
          showContent: "Traditional"
        });
        return;
      case "Romantic":
        this.setState({
          showContent: "Romantic"
        });
        return;
      case "Fun":
        this.setState({ showContent: "Fun" });
        return;
      case "Custom":
        this.setState({ showContent: "Custom" });
        return;
      case "Partners":
        this.setState({ showContent: "Partners" });
        return;
      case "FAQ":
        this.setState({ showContent: "FAQ" });
        return;
      default:
        this.setState({ showContent: "Custom" });
        return;
    }
  };

  renderPage = () => {
    if (this.state.showContent === "Home") {
      return <Home />;
    }
    if (this.state.showContent === "Traditional") {
      return <Traditional />;
    }
    if (this.state.showContent === "Romantic") {
      return <Romantic />;
    }
    if (this.state.showContent === "Fun") {
      return <Fun />;
    }
    if (this.state.showContent === "Custom") {
      return <Custom />;
    }
    if (this.state.showContent === "Partners") {
      return <Partners />;
    }
    if (this.state.showContent === "FAQ") {
      return <FAQ />;
    }
  };

  render() {
    return (
      <StyledContainer>
        <StyledNavBar>
          <div>
            <StyledLogo src={require("../images/iconNav.png")} />
          </div>

          <StyledGrid>
            <StyledListItems onClick={e => this.buttonClicked(e, "Home")}>
              <Button>HOME</Button>
            </StyledListItems>
            <StyledListItems
              onClick={e => this.buttonClicked(e, "Traditional")}
            >
              <Button>TRADITIONAL</Button>
            </StyledListItems>
            <StyledListItems onClick={e => this.buttonClicked(e, "Romantic")}>
              <Button>ROMANTIC</Button>
            </StyledListItems>
            <StyledListItems onClick={e => this.buttonClicked(e, "Fun")}>
              <Button>FUN</Button>
            </StyledListItems>
            <StyledListItems onClick={e => this.buttonClicked(e, "Custom")}>
              <Button>CUSTOM</Button>
            </StyledListItems>
            <StyledListItems onClick={e => this.buttonClicked(e, "Partners")}>
              <Button>PARTNERS</Button>
            </StyledListItems>
            <StyledListItems onClick={e => this.buttonClicked(e, "FAQ")}>
              <Button>FAQ</Button>
            </StyledListItems>
          </StyledGrid>
        </StyledNavBar>

        <StyledMainImage>
          <StyledBackground>
            <StyledIDO>'I Do' Wedding Cakes</StyledIDO>
          </StyledBackground>
        </StyledMainImage>

        <StyledPageContent>{this.renderPage()}</StyledPageContent>
      </StyledContainer>
    );
  }
}

export default Nav;
