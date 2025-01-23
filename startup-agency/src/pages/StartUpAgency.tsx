import * as MyComponent from '../components';
import ScrollUp from '../components/common/scroll-up/ScrollUp';

const StartUpAgency = () => {




  return (
    <div>
      <MyComponent.Navbar id="navbar" />
      <MyComponent.Hero id="hero" />
      <MyComponent.TeamGallery id="team-gallery" />
      <MyComponent.ResultsSponsors id="results-sponsors" />
      <MyComponent.Features id="features" />
      <MyComponent.FunFacts id ="fun-facts" />
      <MyComponent.Services id="services" />
      <MyComponent.PricePlans id="price-plans" />
      <MyComponent.FeedBack id="feedback" />
      <MyComponent.FAQ id="faq" />
      <MyComponent.GetInTouch id="get-in-touch" />
      <MyComponent.Contact id="contact" />
      <MyComponent.Footer id="footer" />
      <MyComponent.AppTour />
      <ScrollUp />
    </div>
  );
};

export default StartUpAgency;
