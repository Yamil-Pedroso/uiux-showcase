import { useState, useEffect } from "react";
import { ScrollUpWrapper } from "./styles";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
    const [scrollShow, setScrollShow] = useState(false);

  const handleClickScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setScrollShow(true);
    } else {
      setScrollShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollUpWrapper
      style={{ display: scrollShow ? "block" : "none" }}
      onClick={handleClickScrollUp}>
      <FaArrowUp
        className="arrow-up"
      />
    </ScrollUpWrapper>
  );
};

export default ScrollUp;
