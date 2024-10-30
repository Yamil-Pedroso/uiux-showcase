import { Header, NavContainer, Nav, Ul, Li, MyLink } from "./styles";
import { navLinks } from "../../types/Types";

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <NavContainer>
          <div>
            <h1>Logo</h1>
          </div>
          <Ul>
            {navLinks.map((link) => (
              <Li key={link.id}>
                <MyLink href={`#${link.id}`}>{link.item}</MyLink>
              </Li>
            ))}
          </Ul>

          <div>
            <button>Sign In</button>
          </div>
        </NavContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;
