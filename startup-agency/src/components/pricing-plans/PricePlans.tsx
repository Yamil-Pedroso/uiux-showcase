import {
  PricingPlansContainer,
  PlansWrapper,
  PlansCard,
  Content,
  ResultContent,
} from "./styles";
import { pricePlans } from "../../types/Types";
import { AiFillLike } from "react-icons/ai";
import Button from "../common/buttons/Button";

interface PricePlansProps {
  id?: string;
}

const PricePlans: React.FC<PricePlansProps> = ({ id }) => {
  return (
    <PricingPlansContainer id={id}>
      <h2>Simple pricing plans that save you money</h2>
      <PlansWrapper>
        {pricePlans.map((plan, idx) => {
          return (
            <PlansCard key={idx}>
              <Content>
                <img src={plan.src} alt={plan.alt} />
                <h3 className="title">{plan.title}</h3>
                <h3 className="price">CHF{plan.price}</h3>
              </Content>
              <ResultContent>
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#000",
                  }}
                />
                <ul>
                  {plan.result?.map((result, idx) => {
                    return (
                      <li key={idx}>
                        <AiFillLike />
                        {result}
                      </li>
                    );
                  })}
                </ul>
              </ResultContent>

              <Button className="btn-plan" style={{ width: "100%" }}>
                Choose Plan
              </Button>
            </PlansCard>
          );
        })}
      </PlansWrapper>
    </PricingPlansContainer>
  );
};

export default PricePlans;
