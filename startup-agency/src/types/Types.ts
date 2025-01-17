import { IconType } from "react-icons";
import { FaArrowRightLong } from "react-icons/fa6";
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
  result?: string[];
  icon?: IconType | JSX.Element | React.ReactNode | string;
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
    }
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
      src: "https://img.freepik.com/premium-vector/energized-lady-is-holding-photographs-camera-tourism-subject-dim-white-line-craftsmanship-trendy-style-vector-illustration_174639-70143.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
      alt: "feature-img",
      title: "Reduce Uncertainty",
      description: "By adopting and implementing strategies, we not only help survive but also thrive in the face of uncertainty.",
    },
    {
      src: "https://img.freepik.com/premium-vector/energized-lady-is-holding-photographs-camera-tourism-subject-dim-white-line-craftsmanship-trendy-style-vector-illustration_174639-70143.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
      alt: "feature-img",
      title: "Innovative Ideas",
      description: "Our aim is to disrupt existing industries or create entirely new ones with our talents and innovative business ideas.",
    },
    {
      src: "https://img.freepik.com/premium-vector/energized-lady-is-holding-photographs-camera-tourism-subject-dim-white-line-craftsmanship-trendy-style-vector-illustration_174639-70143.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid",
      alt: "feature-img",
      title: "Growth Focus",
      description: "Growth is a central objective for us. We’ve also a strong emphasis on rapid growth and scaling business growth.",
    },
  ];

  const funFacts: ICommonContentProps[] = [
    {
      title: "We help empower visionary founders",
      description: "We provide comprehensive support, guidance to early stage startups & entrepreneurs. Our mission is to help transform breakthrough ideas into successful and sustainable businesses.",
      number: 0,
      result: ["Years of experience", "Active monthly users", "Project completed"],
    }
  ];

  const services: ICommonContentProps[] = [
    {
      title: "Product Development:",
      description: "We are focused on developing innovative products services. We research and development to create new solutions.",
      icon: FaArrowRightLong,
    },
    {
      title: "Consulting & Advisory:",
      description: "Our expertise in various fields, such as management, finance, marketing, or technology, to help businesses solve problems.",
      icon: FaArrowRightLong,
    },
    {
      title: "Investment and Equity:",
      description: "We invest in startups or take an equity stake in exchange or direct investment or have their own seed funds to support.",
      icon: FaArrowRightLong,
    },
    {
      title: "Co-Working Spaces:",
      description: "We provide co-working spaces or office facilities for startups can work, collaborate, and access essential resources.",
      icon: FaArrowRightLong,
    },
    {
      title: "Legal & Administrative:",
      description: "Offer legal and administrative assistance, helping startups with tasks like business registration, intellectual property etc.",
      icon: FaArrowRightLong,
    },
  ];


  export { navLinks, teamGallery, sponsorGallery, features, funFacts, services };