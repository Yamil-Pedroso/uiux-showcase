import {
  ContactFooterSection,
  Content,
  Title,
  Description,
  LeftSide,
  Tel,
  Email,
  SocialMedia,
  RightSide,
} from "./styles";
import { FaTwitter, FaFacebookF, FaStarOfLife } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaCircleArrowRight } from "react-icons/fa6";
import images from "../../assets/images";
import Button from "../common/buttons/Button";

const Contact = () => {
  return (
    <ContactFooterSection id="contact">
      <Content>
        <LeftSide>
          <Title>
            Lets start a{" "}
            <span>
              <FaStarOfLife size={46} />
            </span>{" "}
            project together
          </Title>
          <Description>
            We work closely with our clients to understand their objectives,
            target audience, and unique needs. We use our creative skills to
            translate these requirements and practical design solutions.
          </Description>

          <Tel>
            <span>Give us a call:</span>
            <span>(+44) 444-4444</span>
          </Tel>
          <Email>
            <span>Send us an email:</span>
            <span>example@gmail.com</span>
          </Email>

          <SocialMedia>
            <FaTwitter className="social-icon" />
            <FaFacebookF className="social-icon" />
            <RiInstagramFill className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </SocialMedia>

          <img src={images.curveArrow} alt="logo" />
        </LeftSide>

        <RightSide>
          <p>Send us a message</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Message..."></textarea>
            <Button className="btn">
              <span>Send message</span>
              <FaCircleArrowRight className="cir-arrow-icon" />
            </Button>
          </form>
        </RightSide>
      </Content>
    </ContactFooterSection>
  );
};

export default Contact;
