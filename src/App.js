import React, { Component } from "react";
import { connect } from "react-redux";
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {
  setLogo,
  setLinks,
  setHomeBackImage,
  setAboutImage,
  setAboutPara,
  setSkillsBackImage,
  setContactBackImage,
  setContactData,
} from "./Redux/Actions/Actions";

import loading from "./Images/loading.jpg";

import LoadingScreen from "react-loading-screen";
import Home from "./Components/Home";
import Topbar from "./Components/Topbar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certification";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import { client } from "./sanity";

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    client.fetch(groq`*[_type in ["about", "images", "links", "contactInfo"]]`).then((data) => {
      const dataObject = data.reduce((acc, item) => {
        if (item._type) {
          acc[item._type] = item;
        }
        return acc;
      }, {});
      this.props.setAboutImage(urlFor(dataObject.about.image))
      this.props.setAboutPara(dataObject.about.bio[0].children[0].text)
      // Images
      this.props.setLogo(urlFor(dataObject.images.topbarlogo))
      this.props.setHomeBackImage(urlFor(dataObject.images.homeBackground));
      this.props.setSkillsBackImage(urlFor(dataObject.images.skillsBackground));
      this.props.setContactBackImage(urlFor(dataObject.images.contactBackground));
      // Links
      this.props.setLinks({
        githubLink: dataObject.links.github, 
        linkedInLink: dataObject.links.linkedin
      })
      // Contact Info
      this.props.setContactData({
        address: dataObject.contactInfo.address,
        phone: dataObject.contactInfo.phone,
        email: dataObject.contactInfo.email
      })
    })
    .catch(console.error)
    .finally(() => this.setState({ loaded: true }))
  }

  render() {
    return (
      <>
        {this.state.loaded && <Topbar />}
        <Home />
        <LoadingScreen
          loading={!this.state.loaded}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={loading}
          text="One who can master patience, can master anything!"
        />
        {this.state.loaded && (
          <>
            <About />
            <Experience />
            <Skills />
            <Certifications />
            <Project />
            <Contact />
            <Footer />
          </>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogo: (payload) => dispatch(setLogo(payload)),
  setLinks: (payload) => dispatch(setLinks(payload)),
  setHomeBackImage: (payload) => dispatch(setHomeBackImage(payload)),
  setAboutImage: (payload) => dispatch(setAboutImage(payload)),
  setAboutPara: (payload) => dispatch(setAboutPara(payload)),
  setSkillsBackImage: (payload) => dispatch(setSkillsBackImage(payload)),
  setContactBackImage: (payload) => dispatch(setContactBackImage(payload)),
  setContactData: (payload) => dispatch(setContactData(payload)),
});

export default connect(null, mapDispatchToProps)(App);
