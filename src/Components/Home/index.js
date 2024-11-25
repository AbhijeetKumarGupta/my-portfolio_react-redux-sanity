import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./home.module.css";

class Home extends Component {
  render() {
    const style = {
      backgroundImage: `linear-gradient(25deg,rgba(30, 41, 49, 0.83) 50%,rgba(193, 195, 204, 0.28) 100%),url(${this.props.image})`,
    };
    return (
      <div id={styles.home} className={styles.homeDiv} style={style}>
        <div id={styles.parent}>
          <span id={styles.helloPara}>Hello!</span>
          <p id={styles.namePara}>
            I'm, <span>Abhijeet Kumar Gupta</span>
          </p>
          <span id={styles.welcomeParaContainer}>
            <span id={styles.welcomePara}>
              <span>MERN</span> Stack Developer
            </span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: state.homeBackImage,
});
export default connect(mapStateToProps, null)(Home);
