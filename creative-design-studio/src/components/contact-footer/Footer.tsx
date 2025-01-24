import {
  MyFooter,
  FooterWrapper,
  FooterContent,
  LeftFooterSide,
  RightFooterSide,
} from "./styles";

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <MyFooter>
      <FooterWrapper>
        <FooterContent>
          <LeftFooterSide>
            <h1
              onClick={scrollToTop}
              style={{ cursor: "pointer" }}
            >Logo</h1>
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
