import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./contact.module.css";

class Contact extends Component {
  render() {
    const style = {
      backgroundImage: `linear-gradient(360deg,rgba(255, 255, 255, 0) 100%,rgba(255, 255, 255, 0) 100%),url(${this.props.image})`,
    };
    return (
      <div id="contact">
        <div id={styles.contact} className={styles.contactDiv} style={style}>
          <div id={styles.contactHeading}>
            <span>Contact Info</span>
          </div>
          <div id={styles.contactOptionsDiv}>
            <div id={styles.contactAddress}>
              <div>
                <i
                  className={`fas fa-map-marked-alt ${styles.addressLine}`}
                  aria-hidden="true"
                >
                  {" "}
                  <span>
                    Address: <span>{this.props.contactData.address}</span>
                  </span>
                </i>
                <i
                  className={`fas fa-phone-alt ${styles.addressLine}`}
                  aria-hidden="true"
                >
                  {" "}
                  <span>
                    Phone: <span>{this.props.contactData.phone}</span>
                  </span>
                </i>
                <i
                  className={`fas fa-envelope ${styles.addressLine}`}
                  aria-hidden="true"
                >
                  {" "}
                  <span>
                    Email: <span>{this.props.contactData.email}</span>
                  </span>
                </i>
                <i
                  className={`fa fa-linkedin ${styles.addressLine}`}
                  aria-hidden="true"
                >
                  {" "}
                  <span>Linked-In:</span>
                  <a
                    id={styles.profileLinkContact}
                    href={this.props.links.linkedInLink}
                  >
                    {" "}
                    GO
                  </a>
                </i>
              </div>
            </div>
            <div id={styles.contactForm}></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: state.contactBackImage,
  contactData: state.contactData,
  links: state.links,
});

export default connect(mapStateToProps, null)(Contact);
