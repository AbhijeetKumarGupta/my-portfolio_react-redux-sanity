const initialState = {
  logo: "",
  links: [],
  homeBackImage: "",
  aboutImage: "",
  aboutPara: "",
  skillsBackImage: "",
  skills: [],
  certifications: [],
  projects: [],
  projCurSel: 0,
  projDesc: [],
  projUrl: "",
  viewFrame: "0",
  contactBackImage: "",
  contactData: [],
};

const setState = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOGO":
      return { ...state, logo: payload };
    case "SET_LINKS":
      return { ...state, links: payload };
    case "SET_HOME_BACK_IMAGE":
      return { ...state, homeBackImage: payload };
    case "SET_ABOUT_IMAGE":
      return { ...state, aboutImage: payload };
    case "SET_ABOUT_PARA":
      return { ...state, aboutPara: payload };
    case "SET_SKILLS_BACK_IMAGE":
      return { ...state, skillsBackImage: payload };
    case "SET_SKILLS":
      return { ...state, skills: payload };
    case "SET_CERTIFICATIONS":
      return { ...state, certifications: payload };
    case "SET_PROJECTS":
      return { ...state, projects: payload };
    case "SET_PROJECT_CUR_SEL":
      return { ...state, projCurSel: payload };
    case "SET_PROJECT_DESC":
      return { ...state, projDesc: payload };
    case "SET_PROJECT_URL":
      return { ...state, projUrl: payload };
    case "SET_VIEW_FRAME":
      return { ...state, viewFrame: payload };
    case "SET_CONTACT_BACK_IMAGE":
      return { ...state, contactBackImage: payload };
    case "SET_CONTACT_DATA":
      return { ...state, contactData: payload };

    default:
      return state;
  }
};

export default setState;
