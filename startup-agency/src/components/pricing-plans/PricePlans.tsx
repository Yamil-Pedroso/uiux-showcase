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
import { motion } from "framer-motion";
import images from "../../assets/images";
interface PricePlansProps {
  id?: string;
}

const PricePlans: React.FC<PricePlansProps> = ({ id }) => {
  return (
    <PricingPlansContainer id={id}>
      <h2>Simple pricing plans that save you money</h2>
      <PlansWrapper
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 20,
            },
          },
        }}
      >
        {pricePlans.map((plan, idx) => {
          return (
            <PlansCard
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              key={idx}
            >
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

      <img className="deco4" src={images.deco4} alt="pricing" />
    </PricingPlansContainer>
  );
};

export default PricePlans;
