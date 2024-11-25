import React, { Component } from "react";
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import styles from "./experience.module.css";
import { client } from "../../sanity";

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expData: [],
    };
  }

  componentDidMount() {
    client.fetch(groq`*[_type == "experience"]`).then((data) => {
      const formattedData = data?.map((i) => ({
        ...i,
        companyLogo: urlFor(i.companyLogo)
      }))
      this.setState({ expData: formattedData })
    })
    .catch(console.error)
  }

  render() {
    return (
      <div id="experience">
        <div id={styles.experience} className={styles.experienceDiv}>
          <p id={styles.experienceHeading}>Experience</p>
          <div id={styles.experienceCardWrapper}>
            {this.state.expData.length > 0 &&
              this.state.expData.map(
                (
                  {
                    companyLink,
                    companyLogo,
                    companyName,
                    companyDescription,
                    role,
                    workingDuration,
                    year,
                  },
                  index
                ) => (
                  <div className={styles.cardExperience} key={index}>
                    <a
                      href={companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.companyLogoDiv}
                    >
                      <img src={companyLogo} alt="" />
                    </a>
                    <div className={styles.companyDetailsDiv}>
                      <p className={styles.companyName}>
                        <span className={styles.headingsCompanyDetails}>
                          Company:{" "}
                        </span>
                        {companyName}
                      </p>
                      <p className={styles.companyAbout}>
                        <span className={styles.headingsCompanyDetails}>
                          Description:{" "}
                        </span>
                        {companyDescription}
                      </p>
                      <p className={styles.roleInCompany}>
                        <span className={styles.headingsCompanyDetails}>
                          Role:{" "}
                        </span>
                        {role}
                      </p>
                      <p className={styles.timeWorked}>
                        <span className={styles.headingsCompanyDetails}>
                          Duration:{" "}
                        </span>
                        {workingDuration}
                      </p>
                      <p className={styles.workedFromTo}>
                        <span className={styles.headingsCompanyDetails}>
                          Year:{" "}
                        </span>
                        {year}
                      </p>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
