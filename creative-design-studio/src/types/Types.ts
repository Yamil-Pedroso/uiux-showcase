

export interface INavLinks {
  id: string;
  item: string;
}

const navLinks: INavLinks[] = [
  { id: "home", item: "Home" },
  { id: "services", item: "Services" },
  { id: "funFacts", item: "Close clients" },
  { id: "projects", item: "Projects" },
  { id: "workProcess", item: "Work Process" },
  { id: "feedBack", item: "Feedback" },
  { id: "team", item: "Team" },
  { id: "contact", item: "Contact" },
  { id: "footer", item: "Footer" },
];

export interface IServices {
  id?: number;
  title?: string;
  description?: string;
  iconOne?: string;
  iconTwo?: string;
}

const services: IServices[] = [
  {
    id: 1,
    title: "Service 1",
    description: "Description of the service provided.",
    iconOne: "😀",
    iconTwo: "🔧",
  },
  {
    id: 2,
    title: "Service 2",
    description: "Description of the service provided.",
    iconOne: "😀",
    iconTwo: "🔧",
  },
  {
    id: 3,
    title: "Service 3",
    description: "Description of the service provided.",
    iconOne: "😀",
    iconTwo: "🔧",
  },
  {
    id: 4,
    title: "Service 4",
    description: "Description of the service provided.",
    iconOne: "😀",
    iconTwo: "🔧",
  },
];

export interface IProjects extends IServices {
  imageUrl?: string;
}

const projects: IProjects[] = [
  {
    id: 1,
    title: "Product Design",
    description: "Developing the look and feel of physical products, aesthetics, and funtionality.",
    iconOne: "➔",
    imageUrl: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Logo and Branding",
    description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    iconOne: "➔",
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "App UI/UX Design",
    description: "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
    iconOne: "➔",
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Packaging Design",
    description: "Creating packaging solutions for products that not only protect attract customers on store.",
    iconOne: "➔",
    imageUrl: "https://images.unsplash.com/photo-1504707748692-419802cf939d?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const brainStorming: IServices[] = [
  {
    id: 1,
    title: "01/ Project idea",
    description: "The process starts with a detailed discussion with the client to understand their idea & goals.",
  },
  {
    id: 2,
    title: "02/ Brainstorming",
    description: "rainstorming is a group creativity technique in which members attempt to find a conclusion.",
  },
  {
    id: 3,
    title: "03/ Launch",
    description: "The completed design assets or final product are delivered with necessary documentation.",
  },
];

export interface IWorkProcessing {
  content: string;
}

const workProcessing: IWorkProcessing[] = [
  {
    content: "Our high-qualityStar working processes",
  },
  {
    content: "We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client s objectives and expectations.",
  },
  {
    content: "It is important to note that these are simplified steps, and the actual work process may vary depending on the complexity of the project.",
  },
];

export { navLinks, services, projects, brainStorming, workProcessing };
