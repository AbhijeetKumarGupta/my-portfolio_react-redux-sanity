import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./footer.module.css";

class Footer extends Component {
  scrollTo = (val) => {
    window.scrollTo({
      top: val,
      behavior: "smooth",
      sel: 0,
    });
  };

  render() {
    return (
      <div className={styles.footerDiv}>
        <a
          href={this.props.links.linkedInLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
        <span onClick={() => this.scrollTo(0)}>
          <img src={this.props.logo} alt="" />
        </span>
        <a href={this.props.links.githubLink} target="_blank" rel="noreferrer">
          <i className="fa fa-github" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logo: state.logo,
  links: state.links,
});

export default connect(mapStateToProps, null)(Footer);
