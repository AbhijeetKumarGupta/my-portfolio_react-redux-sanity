import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./topbar.module.css";

class Topbar extends Component {
  scrollTo = (val) => {
    window.scrollTo({
      top: window.innerHeight * val,
      behavior: "smooth",
      sel: 0,
    });
  };

  render() {
    return (
      <div className={styles.topbarDiv}>
        <span id={styles.logoDiv} onClick={() => this.scrollTo(0)}>
          <img className={styles.userLogo} src={this.props.logo} alt="" />
        </span>
        <div id={styles.publicProfileLinksDiv}>
          <a
            href={this.props.links.linkedInLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
          <a
            href={this.props.links.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </div>
        <div id={styles.navMenuDiv}>
          <span className={styles.navMenuItem} onClick={() => this.scrollTo(0)}>
            Home
          </span>

          <a
            href="#about"
            className={styles.navMenuItem}
            // onClick={() => this.scrollTo(0.935)}
          >
            About
          </a>

          <a
            href="#experience"
            className={styles.navMenuItem}
            // onClick={() => this.scrollTo(1.845)}
          >
            Experience
          </a>

          <a
            href="#skills"
            className={styles.navMenuItem}
            // onClick={() => this.scrollTo(2.75)}
          >
            Skills
          </a>

          <a
            href="#certificates"
            className={styles.navMenuItem}
            // onClick={() => this.scrollTo(3.66)}
          >
            Certification
          </a>

          <a
            href="#projects"
            className={styles.navMenuItem}
            // onClick={() => this.scrollTo(4.55)}
          >
            Projects
          </a>

          <a
            href="#contact"
            className={styles.navMenuItem}
            // onClick={() => this.scrollTo(5.55)}
          >
            Contact
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logo: state.logo,
  links: state.links,
});

export default connect(mapStateToProps, null)(Topbar);
