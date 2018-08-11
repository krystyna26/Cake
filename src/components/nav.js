import React, { Component } from "react";
import Home from "./home";
import Traditional from "./traditional";
import Romantic from "./romantic";
import Fun from "./fun";
import Custom from "./custom";
import Partners from "./partners";
import FAQ from "./FAQ";

import Button from "../shared/NavButtons";
// import logo from "images/logo.png";

const styles = {
  navBar: {
    listStyleType: "none",
    // backgroundColor: "rgb(107, 50, 17)",
    textAlign: "center",
    color: "pink",
    height: "95px",
    boxSizing: "border-box",
    width: "100%",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)"
    // display: "grid",
    // display: "inline",
    // backgroundColor: "rgb(66,34,24)",
  },
  liStyle: {
    display: "inline-block",
    // width: "8em",
    height: "3.25em",
    margin: "10px",
    paddingTop: "20px",
    transition: ".3s background-color"
  },
  logoStyle: {
    color: "pink",
    width: "67px",
    margin: " 15px",
    position: "absolute",
    left: " 85px",
    background: "pink",
    borderRadius: "50%"
  },
  imageStyle: {
    width: "100%",
    // position: "relative",
    // top: "-260px",
    zIndex: "-1",
    // height: "600px",
    float: "left",
    height: "345px",
    // background: 'fixed center'
    backgroundImage: "url(" + require("../images/pasta.jpg") + ")",
    backgroundAttachment: "fixed"
  },
  contentStyle: {
    border: "1px solid green",
    // display: "block"
    position: "absolute",
    top: "431px",
    left: "0",
    width: "100%"
    // height: "800px",
  },
  gridStyle: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    width: "70%",
    height: "95px",
    marginLeft: "200px"
  },
  idoStyles: {
    fontSize: "75px",
    margin: "116px 400px",
    backgroundColor: "seashell",
    padding: "30px",
    opacity: "0.7",
    textAlign: "center",
    whiteSpace: "nowrap"
    // color: 'gold'
  }
};

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
        this.setState({ showContent: "Home" });
        return;
      case "Traditional":
        this.setState({ showContent: "Traditional" });
        return;
      case "Romantic":
        this.setState({ showContent: "Romantic" });
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
      <div style={{ margin: "-8px", fontFamily: "Comic Sans MS" }}>
        <div style={styles.navBar}>
          <div>
            <img
              style={styles.logoStyle}
              src={require("../images/keepcalm.jpg")}
            />
          </div>

          <div style={styles.gridStyle}>
            <div
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "Home")}
            >
              <Button>HOME</Button>
            </div>
            <span
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "Traditional")}
            >
              <Button>TRADITIONAL</Button>
            </span>
            <span
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "Romantic")}
            >
              <Button>ROMANTIC</Button>
            </span>
            <span
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "Fun")}
            >
              <Button>FUN</Button>
            </span>
            <span
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "Custom")}
            >
              <Button>CUSTOM</Button>
            </span>
            <span
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "Partners")}
            >
              <Button>PARTNERS</Button>
            </span>
            <span
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "FAQ")}
            >
              <Button>FAQ</Button>
            </span>
          </div>
        </div>

        <div style={styles.imageStyle}>
          <h1 style={styles.idoStyles}>"I Do" Wedding Cakes</h1>
        </div>

        <div style={styles.contentStyle}>{this.renderPage()}</div>
      </div>
    );
  }
}

export default Nav;
