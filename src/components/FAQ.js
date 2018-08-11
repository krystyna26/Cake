import React, { Component } from "react";

const styles = {
  navStyle: {
    padding: "52px"
  },
  gridStyle: {
    width: "207px",
    height: "260px",
    padding: "40px",
    gridTemplateColumns: "fit-content(150px) fit-content(960px)"
  },
  descriptionStyle: {
    width: "100%",
    borderRadius: "2px",
    boxShadow:
      "0 9px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 10px 0 rgba(0, 0, 0, 0.05)",
    padding: "10px"
  }
};

class FAQ extends Component {
  render() {
    return (
      <div style={styles.navStyle}>
        <h4 style={styles.descriptionStyle}>FREQUENTLY ASKED CAKE QUESTIONS</h4>
        <div style={{ display: "block" }}>
          <div>
            <p style={{ fontWeight: "bold" }}>
              Q: How bug will be my Wedding Cake?
            </p>
            <p>
              A: Your Wedding Cake will be appropriately sized to feed everyone
              based on the final guest count you give us 10 days before the
              wedding, during your final meeting. Cake diagram in{" "}
              <a href="#custom">Custom</a> tab is a sample of typical number of
              tiers per guest count, however, this can vary from bakery to
              bakery. Please discus tier specifications with your bakery
              directly.
            </p>
          </div>

          <div>
            <p style={{ fontWeight: "bold" }}>
              Q: Can we have different flavors for each of the tiers?
            </p>
            <p>
              A: Yes, the bakery is able to accommodate multiple flavors on
              tiered cakes. Please discus available flavors and filling with
              your bakery.
            </p>
          </div>

          <div>
            <p style={{ fontWeight: "bold" }}>Q: Are any flavors an upgrade?</p>
            <p>A:</p>
          </div>

          <div>
            <p style={{ fontWeight: "bold" }}>
              Q: Can we do cupcakes instead of a traditional wedding cake?
            </p>
            <p>A:</p>
          </div>

          <div>
            <p style={{ fontWeight: "bold" }}>
              Q: Can we save the top tier of our wedding for our 1 year
              anniversary?
            </p>
            <p>A:</p>
          </div>

          <div>
            <p style={{ fontWeight: "bold" }}>
              Q: Do you have gluten free or vegan options?
            </p>
            <p>A:</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
