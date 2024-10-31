import { useState } from "react";
import { Header, NavContainer, Nav, Ul, Li, MyLink } from "./styles";
import { navLinks } from "../../types/Types";
import Button from "../common/buttons/Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  console.log(active);

  const handleClickItem = (event: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    event.preventDefault();
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Header>
      <Nav>
        <NavContainer>
          <div>
            <h1>Logo</h1>
          </div>
          <Ul>
            {navLinks.map((link) => (
              <Li key={link.id}
                onClick={() => setActive(link.item)}
              >
                <MyLink href={`#${link.id}`} onClick={(event) => handleClickItem(event, link.id)}>{link.item}</MyLink>
              </Li>
            ))}
          </Ul>

          <div>
            <Button title="Get Started" />
          </div>
        </NavContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;
