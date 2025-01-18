import { PlanningContainer, IconPlayWrapper } from "./styles"
import { BiSolidRightArrow } from "react-icons/bi";

const Planning = () => {
  return (
    <PlanningContainer>
        <img src="https://img.freepik.com/premium-photo/colorful-creative-workspace_738298-1361.jpg?ga=GA1.1.689451841.1699970434&semt=ais_hybrid" alt="Planning" />
        <IconPlayWrapper>
          <BiSolidRightArrow className="arrow-play-icon" />
        </IconPlayWrapper>
    </PlanningContainer>
  )
}

export default Planning