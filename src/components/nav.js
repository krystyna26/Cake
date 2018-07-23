import React, { Component } from "react";
import Home from "./home";
import Traditional from "./traditional";
import Romantic from "./romantic";
import Fun from "./fun";
import Custom from "./custom";
import Partners from "./partners";

import Button from "../shared/NavButtons";
// import logo from "images/logo.png";

const styles = {
  navBar: {
    listStyleType: "none",
    // backgroundColor: "rgb(66,34,24)",
    backgroundColor: "rgb(107, 50, 17)",
    textAlign: "center",
    color: "pink",
    height: "95px",
    // display: "grid",
    // display: "inline",
    boxSizing: "border-box",
    width: "100%",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)"
  },
  liStyle: {
    display: "inline-block",
    width: "10em",
    height: "3.25em",
    margin: "21px",
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
    position: "absolute",
    top: "-260px",
    zIndex: "-1"
  }
};

class Nav extends Component {
  state = {
    showContent: "Home"
  };

  buttonClicked = (e, buttonName) => {
    e.preventDefault();
    e.stopPropagation();

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
      default:
        console.log("Default case");
        this.setState({ showContent: "Home" });
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
  };

  render() {
    return (
      <div style={{ margin: "-8px" }}>
        <div style={styles.navBar}>
          <div>
            <img style={styles.logoStyle} src={require("../images/logo.png")} />
          </div>

          <div>
            <span
              style={styles.liStyle}
              onClick={e => this.buttonClicked(e, "Home")}
            >
              <Button>HOME</Button>
            </span>
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
          </div>
        </div>

        <div>
          <div style={{}}>
            <div style={{ display: "block" }}>
              <img
                style={styles.imageStyle}
                src={require("../images/panocake.jpg")}
              />
            </div>
            <div style={{ display: "block" }}>{this.renderPage()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
