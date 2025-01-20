import { IconType } from "react-icons";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import images from "../assets/images";
export interface INavLinks {
  id: string;
  item: string;
}

export interface ICommonContentProps {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  number?: number;
  price?: number;
  question?: string;
  answer?: string;
  result?: string[];
  icon?: IconType | JSX.Element | React.ReactNode | string;
}

export interface ITestimonialProps {
  name: string;
  designation: string;
  rating: number;
  avatar?: string;
  comment: string;
}

const navLinks: INavLinks[] = [
  { id: "home", item: "Home" },
  { id: "about", item: "About Us" },
  { id: "blog", item: "Blog" },
  { id: "contact", item: "Contact Us" },
];

const teamGallery: ICommonContentProps[] = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661775083116-3e8fbb1d5a7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVhbSUyMGRlc2lnbiUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "team member",
  },
  {
    src: "https://img.freepik.com/free-photo/colleagues-speaking-discussing-drawings-new-ideas-office_176420-1701.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "team member",
  },
  {
    src: "https://img.freepik.com/free-photo/people-brainstorming-work-meeting_23-2148985489.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "team member",
  },
  {
    src: "https://img.freepik.com/free-photo/happy-young-colleagues-office-coworking_171337-17719.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "team member",
  },
  {
    src: "https://img.freepik.com/free-photo/medium-shot-people-working-desk_23-2149345241.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "team member",
  },
];

const sponsorGallery: ICommonContentProps[] = [
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
  {
    title: "Sponsor",
    src: "https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
    alt: "sponsor",
  },
];

const features: ICommonContentProps[] = [
  {
    src: images.plan,
    alt: "feature-img",
    title: "Reduce Uncertainty",
    description:
      "By adopting and implementing strategies, we not only help survive but also thrive in the face of uncertainty.",
  },
  {
    src: images.plan,
    alt: "feature-img",
    title: "Innovative Ideas",
    description:
      "Our aim is to disrupt existing industries or create entirely new ones with our talents and innovative business ideas.",
  },
  {
    src: images.plan,
    alt: "feature-img",
    title: "Growth Focus",
    description:
      "Growth is a central objective for us. We’ve also a strong emphasis on rapid growth and scaling business growth.",
  },
];

const funFacts: ICommonContentProps[] = [
  {
    title: "We help empower visionary founders",
    description:
      "We provide comprehensive support, guidance to early stage startups & entrepreneurs. Our mission is to help transform breakthrough ideas into successful and sustainable businesses.",
    number: 0,
    result: [
      "Years of experience",
      "Active monthly users",
      "Project completed",
    ],
  },
];

const services: ICommonContentProps[] = [
  {
    title: "Product Development:",
    description:
      "We are focused on developing innovative products services. We research and development to create new solutions.",
    icon: FaArrowRightLong,
  },
  {
    title: "Consulting & Advisory:",
    description:
      "Our expertise in various fields, such as management, finance, marketing, or technology, to help businesses solve problems.",
    icon: FaArrowRightLong,
  },
  {
    title: "Investment and Equity:",
    description:
      "We invest in startups or take an equity stake in exchange or direct investment or have their own seed funds to support.",
    icon: FaArrowRightLong,
  },
  {
    title: "Co-Working Spaces:",
    description:
      "We provide co-working spaces or office facilities for startups can work, collaborate, and access essential resources.",
    icon: FaArrowRightLong,
  },
  {
    title: "Legal & Administrative:",
    description:
      "Offer legal and administrative assistance, helping startups with tasks like business registration, intellectual property etc.",
    icon: FaArrowRightLong,
  },
];

const pricePlans: ICommonContentProps[] = [
  {
    src: images.personLap,
    title: "Basic",
    price: 19.99,
    result: [
      "90 mins session duration",
      "Multiple modes of networking",
      "Live event engagement",
      "Pre-set emails",
      "Real-time data & basic reports",
    ],
  },
  {
    src: images.personLap,
    title: "Startup",
    price: 29.99,
    result: [
      "Advanced networking modes",
      "Unlimited session duration",
      "Custom event branding",
      "Advanced analytics report",
      "Leaderboard & gamification",
    ],
  },
  {
    src: images.personLap,
    title: "Enterprise",
    price: 46.99,
    result: [
      "Advanced networking modes",
      "Dedicated account manager",
      "3D event experiences",
      "Mobile app & website create",
      "likePersonalization & branding",
    ],
  },
];

const testimonials: ITestimonialProps[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=3527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Doe",
    designation: "Head of Marketing",
    rating: 5,
    comment:
      "I am impressed with their innovative ideas and forward-thinking approach. They have helped us embrace digital transformation.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVvcGxlfGVufDB8fDB8fHww",
    name: "Katleen Smith",
    designation: "Business Owner",
    rating: 5,
    comment:
      "has been a game-changer for our startup. Their team guided us through the development of a custom software solution perfectly suited us.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mike Kowalski",
    designation: "CEO",
    rating: 5,
    comment:
      "Their ability to understand our unique needs and provide tailored solutions. Their team is friendly, approachable & always ready to go the extra mile.",
  },
];

const faq: ICommonContentProps[] = [
  {
    question: "What is vision for the future?",
    answer:
      "Our vision is describe your long-term vision or goals. Were committed to explain how your company plans.",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "Do you offer free resources?",
    answer:
      "Yes, we offer a range of free resources. Check out our resources page for more information.",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "Can help to find investors?",
    answer:
      "Yes, we have a strong network of investors and can facilitate introductions. Our expertise in fundraising.",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "What is vision for the future?",
    answer:
      "Our vision is describe your long-term vision or goals. Were committed to explain how your company plans.",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "Do you offer free resources?",
    answer:
      "Yes, we offer a range of free resources. Check out our resources page for more information.",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "Can help to find invertors?",
    answer:
      "Yes, we have a strong network of investors and can facilitate introductions. Our expertise in fundraising.",
    icon: MdKeyboardArrowDown,
  },
];

export {
  navLinks,
  teamGallery,
  sponsorGallery,
  features,
  funFacts,
  services,
  pricePlans,
  testimonials,
  faq,
};
