import {
  MyFooter,
  FooterWrapper,
  FooterContent,
  LeftFooterSide,
  RightFooterSide,
} from "./styles";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <MyFooter>
      <FooterWrapper>
        <FooterContent>
          <LeftFooterSide>
            <h1>Logo</h1>
          </LeftFooterSide>
          <RightFooterSide>
            <p>© Copyright {getCurrentYear}, All Rights Reserved by YamNextGen</p>
          </RightFooterSide>
        </FooterContent>
      </FooterWrapper>
    </MyFooter>
  );
};

export default Footer;
