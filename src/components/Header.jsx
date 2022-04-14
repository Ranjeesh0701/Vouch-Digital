import styled from "styled-components";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

const Container = styled.div`
  box-shadow: 0px 0px 8px 6px #f2f2f2;
  background-color: #ffffff;
  width: 100%;
  z-index: 999;
  @media (max-width: 767px) {
    position: fixed;
    width: 100%;
    box-shadow: 0px 0px 2px 2px #f2f2f2;
  }
`;

const HeaderLogo = styled.p`
  font-weight: 900;
  font-size: 21px;
  color: #023047;
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  color: #ffffff;
  outline: none;
  border: none;
  box-shadow: 0px 0px 2px 1px ${(props) => props.borderColor};
  font-size: 12px;
  font-weight: 600;
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: 0.2s linear;
  &:hover {
    background-color: ${(props) => props.lightBack};
  }
`;

const Header = (props) => {
  window.addEventListener("load", () => {
    console.log(document.querySelector(".header").clientHeight);
  });

  return (
    <Container className="px-lg-5 px-md-5 px-4 header">
      <Navbar light expand="md">
        <a href="/" style={{ textDecoration: "none" }}>
          <HeaderLogo className="my-0">
            ATools<span style={{ color: "#fb8500" }}>.</span>
          </HeaderLogo>
        </a>
        <NavbarToggler onClick={props.toggle} />
        <Collapse isOpen={props.isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <div className="row justify-content-center">
              <div className="col-auto mt-4 mt-lg-auto mt-md-auto">
                <Button
                  color="#023047"
                  borderColor="#cdcece"
                  lightBack="#48748a"
                  className="me-4 w-100"
                  style={{ padding: "10px 40px" }}
                >
                  <p className="my-0">Start Free Trial</p>
                </Button>
              </div>
              <div className="col-auto my-4 my-md-auto my-lg-auto">
                {!props.logged ? (
                  <Button
                    color="#fb8500"
                    borderColor="#fee8d1"
                    lightBack="#ffba70"
                    className="w-100"
                    style={{ padding: "10px 79px" }}
                  >
                    <p className="my-0">Login</p>
                  </Button>
                ) : (
                  <Button
                    color="#fb8500"
                    borderColor="#fee8d1"
                    lightBack="#ffba70"
                    style={{ padding: "10px 74.5px" }}
                    onClick={() => {
                      props.setLoggedIn(false);
                      window.sessionStorage.removeItem("user");
                      window.sessionStorage.removeItem("token");
                    }}
                  >
                    <p className="my-0">Logout</p>
                  </Button>
                )}
              </div>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
