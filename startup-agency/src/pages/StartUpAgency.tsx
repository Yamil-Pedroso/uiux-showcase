import * as MyComponent from '../components';
import ScrollUp from '../components/common/scroll-up/ScrollUp';

const StartUpAgency = () => {
  return (
    <div>
      <MyComponent.Navbar />
      <MyComponent.Hero />
      <MyComponent.TeamGallery />
      <MyComponent.ResultsSponsors />
      <MyComponent.Features />
      <MyComponent.FunFacts />
      <MyComponent.Services />
      <MyComponent.PricePlans />
      <MyComponent.FeedBack />
      <MyComponent.FAQ />
      <MyComponent.GetInTouch />
      <MyComponent.Contact />
      <MyComponent.Footer />
      <ScrollUp />
    </div>
  );
};

export default StartUpAgency;