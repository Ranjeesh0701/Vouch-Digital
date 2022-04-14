import Header from "../components/Header";
import styled from "styled-components";
import LoginContainer from "../components/LoginContainer";
import ImageContainer from "../components/ImageContainer";
import { useState } from "react";

const Section = styled.div`
  min-height: calc(100vh - 54px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    min-height: (100vh - 56px);
    padding-top: 56px;
  }
`;

function Home() {
  const [isLoggedIn, setLoggedIn] = useState(
    window.sessionStorage.getItem("user") ? true : false
  );

  const [mob, setMob] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 767) {
      setMob(true);
    } else {
      setMob(false);
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setMob(true);
    }
  };

  return (
    <div className="mx-auto px-0 mx-0">
      <div>
        <Header
          logged={isLoggedIn}
          setLoggedIn={setLoggedIn}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggle={toggle}
        />
      </div>
      <div className="hero">
        <Section
          style={{
            display: "flex",
            transition: "opacity 0.3s ease-in-out",
            opacity: isOpen && mob ? "0.4" : "1",
          }}
          className="px-0"
          onClick={() => (isOpen && mob ? setIsOpen(false) : "")}
        >
          <div className="col-lg-4 col-md-5 text-center px-5 mx-0">
            <LoginContainer logged={isLoggedIn} setLoggedIn={setLoggedIn} />
          </div>
          {!mob && (
            <div className="col-lg-8 col-md-7 mx-0">
              <ImageContainer />
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}

export default Home;
