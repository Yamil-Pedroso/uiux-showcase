import { IconType } from "react-icons";
import images from "../assets/images";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaSimplybuilt } from "react-icons/fa";
import { MdOutlineWeb, MdDesignServices,  MdAutoAwesomeMotion } from "react-icons/md";

export interface INavLinks {
  id: string;
  item: string;
}

const navLinks: INavLinks[] = [
  { id: "home", item: "Home" },
  { id: "services", item: "Services" },
  { id: "business", item: "Close clients" },
  { id: "projects", item: "Projects" },
  { id: "workProcess", item: "Work Process" },
  { id: "feedBack", item: "Feedback" },
  { id: "team", item: "Team" },
  { id: "contact", item: "Contact" },
];

export interface IServices {
  id?: number;
  title?: string;
  description?: string;
  iconOne?: IconType | React.ReactNode | string;
  iconTwo?: string;

}

const services: IServices[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.",
    iconOne: FaSimplybuilt,
    iconTwo: images.rightArrow,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.",
    iconOne: MdDesignServices,
    iconTwo: images.rightArrow,
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.",
    iconOne: MdOutlineWeb,
    iconTwo: images.rightArrow,
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.",
    iconOne: MdAutoAwesomeMotion,
    iconTwo: images.rightArrow,
  },
];

export interface IProjects extends IServices {
  imageUrl?: string;
}

const projects: IProjects[] = [
  {
    id: 1,
    title: "Product Design",
    description:
      "Developing the look and feel of physical products, aesthetics, and funtionality.",
    iconOne: "➔",
    imageUrl:
      "https://img.freepik.com/free-vector/graphic-design-geometric-lettering_23-2148470664.jpg?ga=GA1.1.689451841.1699970434&semt=ais_tags_boosted",
  },
  {
    id: 2,
    title: "Logo and Branding",
    description:
      "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    iconOne: "➔",
    imageUrl:
      "https://img.freepik.com/free-vector/editable-poster-template-vector-bauhaus-inspired-flat-design-creative-studio-text_53876-136716.jpg?ga=GA1.1.689451841.1699970434&semt=ais_tags_boosted",
  },
  {
    id: 3,
    title: "App UI/UX Design",
    description:
      "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
    iconOne: "➔",
    imageUrl:
      "https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg?ga=GA1.1.689451841.1699970434&semt=ais_tags_boosted",
  },
  {
    id: 4,
    title: "Packaging Design",
    description:
      "Creating packaging solutions for products that not only protect attract customers on store.",
    iconOne: "➔",
    imageUrl:
      "https://img.freepik.com/free-vector/modern-color-paint-template-vector-colorful-event-ad-banner-set_53876-140619.jpg?ga=GA1.1.689451841.1699970434&semt=ais_tags_boosted",
  },
];

const brainStorming: IServices[] = [
  {
    id: 1,
    title: "01/ Project idea",
    description:
      "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
  {
    id: 2,
    title: "02/ Brainstorming",
    description:
      "rainstorming is a group creativity technique in which members attempt to find a conclusion.",
  },
  {
    id: 3,
    title: "03/ Launch",
    description:
      "The completed design assets or final product are delivered with necessary documentation.",
  },
];

export interface IWorkProcessing {
  content: string;
}

const workProcessing: IWorkProcessing[] = [
  {
    content: "Our high-quality working processes",
  },
  {
    content:
      "We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client objectives and expectations.",
  },
  {
    content:
      "It is important to note that these are simplified steps, and the actual work process may vary depending on the complexity of the project.",
  },
];

export interface IFeedbacks extends IServices {
  name?: string;
  position?: string;
  avatar?: string;
  rating?: number | undefined;
}

const feedbacks: IFeedbacks[] = [
  {
    id: 1,
    rating: 5,
    title: "Super customer service!",
    description:
      "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Doe",
    position: "Graphic Designer",
  },
  {
    id: 2,
    rating: 4,
    title: "Exceptional creativity and vision",
    description:
      "Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    position: "Software Engineer",
  },
  {
    id: 3,
    rating: 5,
    title: "Innovative and professional",
    description:
      "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mila Smith",
    position: "Product Manager",
  },
  {
    id: 4,
    rating: 4,
    title: "Transformed our brand",
    description:
      "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
    avatar:
      "https://images.unsplash.com/photo-1509460913899-515f1df34fea?q=80&w=3576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Johnson",
    position: "Marketing Manager",
  },
];

interface ITeam extends IFeedbacks {
  id: number;
  socialNetworks?: string[] | IconType[] | React.ReactNode[];
}

const team: ITeam[] = [
  {
    id: 1,
    name: "Jane Doe",
    position: "Graphic Designer",
    avatar: images.teamImgOne,
    socialNetworks: [FaFacebookF, FaTwitter, FaLinkedin, FaInstagram],
  },
  {
    id: 2,
    name: "Mia Garcia",
    position: "Software Engineer",
    avatar: images.teamImgTwo,
    socialNetworks: [FaFacebookF, FaTwitter, FaLinkedin, FaInstagram],
  },
  {
    id: 3,
    name: "Mike Smith",
    position: "Product Manager",
    avatar: images.teamImgThree,
    socialNetworks: [FaFacebookF, FaTwitter, FaLinkedin, FaInstagram],
  },
  {
    id: 4,
    name: "Alex Johnson",
    position: "Marketing Manager",
    avatar: images.teamImgFour,
    socialNetworks: [FaFacebookF, FaTwitter, FaLinkedin, FaInstagram],
  },
];

export {
  navLinks,
  services,
  projects,
  brainStorming,
  workProcessing,
  feedbacks,
  team,
};
