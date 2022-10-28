import { Container } from "@mantine/core";
import styled from "styled-components";

function Home() {
  return (
    <WrapperHome>
      <Container size="xl">
        <div className="heading">
          <h1>
            High-quality site for web <br /> developers and designers.
          </h1>
        </div>
      </Container>
    </WrapperHome>
  );
}

const WrapperHome = styled.div`
  position: relative;
  margin: 24px 0;
  text-align: center;

  .heading {
    margin-top: 30px;

    h1 {
      font-size: 28px;
      font-weight: 800;
      line-height: 30px;
      background-image: linear-gradient(
        to right,
        ${({ theme: { colors, mode } }) =>
          mode === "dark" ? colors.warning[5] : colors.primary[8]},
        ${({ theme: { colors, mode } }) =>
          mode === "dark" ? colors.danger[4] : colors.success[8]}
      );
      background-clip: clip;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (min-width: 1600px) {
    .heading {
      margin-top: 60px;
      h1 {
        font-size: 44px;
        line-height: 50px;
      }
    }
  }
`;

export default Home;
