import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Ul,
  Li,
  MyLink,
  BtnWrapper,
  MobileMenu,
  HeaderContainer,
} from "./styles";
import { navLinks } from "../../types/Types";
import Button from "../common/buttons/Button";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

interface NavbarProps {
  id?: string;
}

const Navbar: React.FC<NavbarProps> = ({ id }) => {
  const [active, setActive] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  console.log(active);

  const handleClickMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleClickItem = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    item: string
  ) => {
    event.preventDefault();
    const navbarHeight = document.getElementById("home")?.offsetHeight || 0;
    const target = document.getElementById(item);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - navbarHeight, // Adjust for the height of the navbar
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click was outside the MobileMenu and the menu icon
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer id={id}>
      <div onClick={(event) => handleClickItem(event, "home")}>
        <h1 style={{ cursor: "pointer" }}>Logo</h1>
      </div>

      <Ul>
        {navLinks.map((link) => (
          <Li key={link.id} onClick={() => setActive(link.item)}>
            <MyLink
              href={`#${link.id}`}
              onClick={(event) => handleClickItem(event, link.id)}
            >
              {link.item}
            </MyLink>
          </Li>
        ))}
      </Ul>

      {/* Resposive Menu */}
      <AnimatePresence>
        {showMenu && (
          <MobileMenu
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            ref={menuRef}
          >
            <h1>
              <span>Logo</span>
            </h1>
            <IoCloseSharp
              onClick={handleClickMenu}
              size={30}
              className="close-icon"
            />
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setActive(link.item)}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => handleClickItem(event, link.id)}
                  >
                    {link.item}
                  </a>
                </li>
              ))}
            </ul>
          </MobileMenu>
        )}
      </AnimatePresence>

      <BtnWrapper>
        <Button className="start-btn">Get Started</Button>
        <button
          ref={menuButtonRef}
          className="menu-icon"
          onClick={handleClickMenu}
        >
          <IoMenu size={30} />
        </button>
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default Navbar;
