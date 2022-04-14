import styled from "styled-components";

const Container = styled.div`
  background-color: #023047;
  min-height: calc(100vh - 54px);
`;

const ImageBox = styled.div``;

const ImageContainer = () => {
  return (
    <Container>
      <ImageBox>
        {/* <img src={process.env.PUBLIC_URL + "/bg.png"} /> */}
      </ImageBox>
    </Container>
  );
};

export default ImageContainer;
