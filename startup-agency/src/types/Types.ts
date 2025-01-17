export interface INavLinks {
    id: string;
    item: string;
}

export interface ITeamGallery {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}
  
  const navLinks: INavLinks[] = [
    { id: "home", item: "Home" },
    { id: "about", item: "About Us" },
    { id: "blog", item: "Blog" },
    { id: "contact", item: "Contact Us" },
  ];

  const teamGallery: ITeamGallery[] = [
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

  const sponsorGallery: ITeamGallery[] = [
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

  const features: ITeamGallery[] = [
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



  export { navLinks, teamGallery, sponsorGallery, features };