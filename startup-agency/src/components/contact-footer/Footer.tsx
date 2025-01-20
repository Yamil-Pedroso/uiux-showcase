import {
  FooterContainer,
  FooterWrapper,
  FooterLeft,
  FooterRight,
  FooterLinks
} from "./styles";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLeft>
          <p>&copy; {year}, All Rights Reserved by YamNextGen</p>
        </FooterLeft>

        <FooterRight>
          <FooterLinks>
            <FaTwitter size={24} />
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaLinkedin size={24} />
          </FooterLinks>
        </FooterRight>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
