import Button from "../common/buttons/Button";
import {
  ContactContainer,
  ContactWrapper,
  Header,
  SpecialLinks,
  FormWrapper,
  FormGroup,
} from "./styles";

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <ContactContainer id={id}>
      <ContactWrapper>
        <Header>
          <h2>LOGO</h2>
          <p>
            We are a branding agency that digitally works to help companies
            grow. We have a successful track record of working with various
            organizations.
          </p>
        </Header>
        <SpecialLinks>
          <h3>Special Links</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </SpecialLinks>
        <SpecialLinks>
          <h3>Special Links</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </SpecialLinks>
        <FormWrapper>
          <form>
            <h3>Subscribe to our newsletter</h3>
            <FormGroup>
              <input type="text" placeholder="Your Email" />
              <Button className="btn-form">Subscribe</Button>
            </FormGroup>
          </form>
        </FormWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
