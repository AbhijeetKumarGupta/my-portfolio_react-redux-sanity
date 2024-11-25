import React, { Component } from "react";
import { connect } from "react-redux";
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { setCertifications } from "../../Redux/Actions/Actions";
import styles from "./certifications.module.css";
import { client } from "../../sanity";

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class Certifications extends Component {
  componentDidMount() {
    client.fetch(groq`*[_type == "certifications"]`).then((data) => {
      const formattedData = data.map((i) => ({
        ...i,
        instituteLogo: urlFor(i.instituteLogo), 
        certificateLink: i.certificateLink ?? urlFor(i.certificate) 
      }))
      this.props.setCertifications(formattedData)
    })
    .catch(console.error)
  }

  render() {
    return (
      <div id="certificates">
        <div id={styles.certification} className={styles.certificationDiv}>
          <div id={styles.certifictionHeading}>
            <span>Certification's</span>
          </div>
          <div id={styles.certificationCardsDiv}>
            {this.props.certData.length > 0 &&
              this.props.certData.map(
                (
                  { instituteLink, instituteLogo, certificateLink, certificateName, skillName },
                  index
                ) => (
                  <div className={styles.certCard} key={index}>
                    <a
                      href={instituteLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.certInstLogo}
                    >
                      <img src={instituteLogo} alt="" />
                    </a>
                    <a
                      href={certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.certDetails}
                    >
                      <p className={styles.certName}>{certificateName}</p>
                      <p className={styles.keySkillName}>
                        Key Skill: <span>{skillName}</span>
                      </p>
                    </a>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  certData: state.certifications,
});

const mapDispatchToProps = (dispatch) => ({
  setCertifications: (payload) => dispatch(setCertifications(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Certifications);
