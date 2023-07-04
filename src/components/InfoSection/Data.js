export const AcaciaHostel = {
  id: "project_06",
  toLink: "#project_05",
  forwardLinkText:"Next project",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "Acacia Hostel webpage",
  headLine: "Hostel booking web application",
  description:
    "Co-worked on the Acacia Hostel's responsive web application. Implemented optimal layouts for diverse screens, fixed layouts, handled scrolling.",
  buttonLabel1: "View online",
  
  dark: false,
  primary: false,
  darkText: true,

  imgStart: true,
  img: require("../../images/acacia_hostel.png"),
  alt: "Acacia Hostel webpage",
  projectUrl1: new URL("https://www.acacia-hostel.com/"),
  projectUrl2: "",
};

export const CivilRadioArchive = {
  id: "project_05",
  toLink: "#project_04",
  forwardLinkText:"Next project",
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "The Civil Radio Archive Page (work in progress)",
  headLine: "Radio Archive app's UI design & web development",
  description:
    "I contribute to Radioship's ongoing open source project on speech-to-text and searchable sound archives. I'm co-working on the implementation of the Civil Radio Archive web application. I designed the user interface in Figma and got involved in the development using React, NextJs, Tailwid and Typescript.",

  buttonLabel1: "View Figma prototype",
  buttonLabel2: "The project on Github",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/civil_radio_archivum.png"),
  alt: "The Civil Radio Archive Page",
  projectUrl1: new URL("https://www.figma.com/proto/Toh7HoOPWO4u8NMvZwApXD/CivilRadioArchive_IuLa_23_version_03?page-id=38%3A365&type=design&node-id=210-186&viewport=-12229%2C595%2C1&t=Etua9H5oz3zWWLBP-8&scaling=scale-down-width&starting-point-node-id=408%3A6647&hide-ui=1"),
  // projectUrl2: new URL("https://civil-archive-ui-template.vercel.app/...."),
  projectUrl2: new URL ("https://github.com/Koffair")
};

export const PortfolioPage = {
  id: "project_04",
  toLink: "#project_03",
  forwardLinkText:"Next project",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "My Portfolio Page",
  headLine: "Portfolio page made from scratch, design & code",
  description:
    "This is my first fully responsive portfolio developed useing ReactJs (I have made others years before, with pure HTML & CSS). Utilized styled components for a more modular approach.",

  buttonLabel1: "View Github repo",
  buttonLabel2: "Plese, look around!",
  dark: false,
  primary: false,
  darkText: true,

  imgStart: true,
  img: require("../../images/portfolio_iula.png"),
  alt: "Iuga Laura's Portfolio Page",
  projectUrl2: new URL("https://lauraiu.github.io/portfolio/"),
  projectUrl1: new URL("https://github.com/LauraIu/portfolio"),
};

export const BookTable = {
  id: "project_03",
  toLink: "#project_02",
  forwardLinkText:"Next project",
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "Book a Table",
  headLine: "Pizzeria Website with Booking Calendar, design & code",
  description:
    "Landing page buildt from scratch, developed with ReactJs and created responsive layout using styled components. Implemented a booking form with date and time selection, handled booking events, DatePicker, and scrollings.",

  buttonLabel2: "View Github repo",
  buttonLabel1: "View online",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/Book_a_Table.png"),
  alt: "Book a Table site",
  projectUrl2: new URL("https://github.com/LauraIu/book-a-table"),
  projectUrl1: new URL("https://lauraiu.github.io/book-a-table/"),
};

export const SocialMediaDashboard = {
  id: "project_02",
  toLink: "#project_01",
  forwardLinkText:"Next project",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "Social Media Dashboard",
  headLine: "Responsive theme switcher coding challenge",
  description:
    "Utilized HTML, CSS, and JavaScript, implemented optimal layouts for diverse screens. Created a theme-changing functionality.",

  buttonLabel2: "View Github repo",
  buttonLabel1: "View online",
  dark: false,
  primary: false,
  darkText: true,

  imgStart: true,
  img: require("../../images/Social_Media_Dashboard_desktop1440w_dark_theme.png"),
  alt: "Social_Media_Dashboard",
  projectUrl2: new URL("https://github.com/LauraIu/social-media-dashboard"),
  projectUrl1: new URL("https://lauraiu.github.io/social-media-dashboard/"),
};

export const InteractiveRatingComponent = {
  id: "project_01",
  toLink: "#home",
  forwardLinkText:"Back to home",
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "Interactive Rating Component",
  headLine: "Tiny responsive component build after design",
  description:
    'This codeing challenge was a good exersise to "remake" the visual and handle the states.',

  buttonLabel2: "View Github repo",
  buttonLabel1: "View online",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/interactive_rating_component.png"),
  alt: "Interactive Rating Component",
  projectUrl2: new URL("https://github.com/LauraIu/interactive-rating-component"
  ),
  projectUrl1: new URL("https://lauraiu.github.io/interactive-rating-component/"
  ),
};
