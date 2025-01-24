import * as MyComponent from '../components';
import ScrollUp from '../components/common/scroll-up/ScrollUp';

const DesignAgency = () => {
  

  return (
    <div>
      <MyComponent.Navbar />
      <MyComponent.Hero />
      <MyComponent.Services />
      <MyComponent.BussinessStandOut />
      <MyComponent.Projects />
      <MyComponent.WorkProcess />
      <MyComponent.FeedBack />
      <MyComponent.Team />
      <MyComponent.Contact />
      <MyComponent.Footer />
      <ScrollUp />
    </div>
  );
};

export default DesignAgency;