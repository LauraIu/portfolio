// https://www.freeformatter.com/json-escape.html#before-output
// https://www.knowledgehut.com/blog/web-development/react-dangerouslysetinnerhtml

// To do - Json-escape or Json stringify or dangerouslysetinnerhtml!!!?

export const PortfolioPage = {
  id: "projects",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "My Portfolio Page",
  headLine: "Landing portfolio page made from scratch",
  description:
    "This is my first portfolio made with ReactJs like a Frontend developer (I have made others before, with pure HTML & CSS ages ago). So it was fun to design it, embarrassing to have issues with router and a bit with responsive layout, but finally I found it pretty cool ;-)",

  buttonLabel1: "View Github repo",
  buttonLabel2: "Plese, look around!",
  dark: false,
  primary: false,
  darkText: true,

  imgStart: true,
  img: require("../../images/portfolio_iula.png"),
  alt: "PortfolioPage IuLa",
  projectUrl1: new URL("https://github.com/LauraIu/portfolio"),
  projectUrl2: new URL("https://lauraiu.github.io/portfolio/"),
};

export const BookTable = {
  id: "projects2",
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "Book a Table",
  headLine: "A Pizzeria's site with booking calendar",
  description:
    "This landing page buildt from scratch, it has a booking form where you can choose date and time to make your reservation. Besides designing it, it was a good practice to make the layout responsive with styled components. Also it was a challenge to handle the booking events, the DatePicker and the scrollings.",

  buttonLabel1: "View Github repo",
  buttonLabel2: "View online",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/Book_a_Table.png"),
  alt: "Book a Table site",
  projectUrl1: new URL("https://github.com/LauraIu/book-a-table"),
  projectUrl2: new URL("https://lauraiu.github.io/book-a-table/"),
};

export const SocialMediaDashboard = {
  id: "projects",
  lightBg: true,
  lightText: false,
  lightTextDescription: false,
  topLine: "Social Media Dashboard",
  headLine: "Theme switcher coding challenge after design",
  description:
    "For this newbie project I used HTML, CSS and a bit of JavaScript to code the optimal layout for diverse screens and the color theme change. The challenge was to build from the given design a responsive theme changing page.",

  buttonLabel1: "View Github repo",
  buttonLabel2: "View online",
  dark: false,
  primary: false,
  darkText: true,

  imgStart: true,
  img: require("../../images/Social_Media_Dashboard_desktop1440w_dark_theme.png"),
  alt: "Social_Media_Dashboard",
  projectUrl1: new URL("https://github.com/LauraIu/social-media-dashboard"),
  projectUrl2: new URL("https://lauraiu.github.io/social-media-dashboard/"),
};

export const InteractiveRatingComponent = {
  id: "projects2",
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  topLine: "Interactive Rating Component",
  headLine: "Tiny responsive component build after design",
  description:
    'This codeing challenge was a good exersise to "remake" the visual and handle the states.',

  buttonLabel1: "View Github repo",
  buttonLabel2: "View online",
  dark: true,
  primary: true,
  darkText: false,

  imgStart: false,
  img: require("../../images/interactive_rating_component.png"),
  alt: "Interactive Rating Component",
  projectUrl1: new URL(
    "https://github.com/LauraIu/interactive-rating-component"
  ),
  projectUrl2: new URL(
    "https://lauraiu.github.io/interactive-rating-component/"
  ),
};
