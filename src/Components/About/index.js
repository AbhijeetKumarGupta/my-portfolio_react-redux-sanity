import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./about.module.css";

class About extends Component {
  render() {
    return (
      <div id="about">
        <div id={styles.about} className={styles.aboutDiv}>
          <div id={styles.aboutLeftDiv}>
            <img src={this.props.image} alt="" />
          </div>
          <div id={styles.aboutRightDiv}>
            <p id={styles.aboutHeading}>About Me</p>
            <p id={styles.aboutDescription}>{this.props.aboutPara}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: state.aboutImage,
  aboutPara: state.aboutPara,
});

export default connect(mapStateToProps, null)(About);
