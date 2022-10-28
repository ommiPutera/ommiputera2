import { Container } from "@mantine/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ILibrary {
  title: string;
  desc: string;
  overview: string;
  to: string;
  style?: {
    background?: string;
  };
}

function Home() {
  return (
    <WrapperHome>
      <Container size="sm">
        <div className="heading">
          <h1>
            High-quality site for web <span>developers and designers.</span>
          </h1>
          <br />
          <h2>
            Free and open source icons designed to make your website or app
            attractive, visually consistent and simply beautiful.
          </h2>
        </div>
        <div className="content">
          <h2>Open source</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            ratione quaerat, deleniti magnam nihil atque natus autem
            reprehenderit asperiores eveniet reiciendis illum sint placeat
            maxime, omnis voluptatem! Omnis, quod libero!
          </p>
          <br />
          <LibraryCards />
        </div>
      </Container>
    </WrapperHome>
  );
}

function LibraryCards() {
  return (
    <div className="library__wrapper">
      <LibraryCard
        title="Icons"
        to="/dashboard"
        overview="The main thing that makes end-to-end type safety difficult is simple: boundaries. The secret to fully typed web apps is typing the boundaries."
        desc="orem ipsum dolor sit amet consectetur adipisicing elit."
        style={{
          background:
            "https://www.epicweb.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fepic-web%2Fimage%2Fupload%2Fv1666191512%2Fepicweb.dev%2Fblog%2FFully%2520Typed%2520Web%2520Apps%2Fhero_2x.jpg&w=828&q=75",
        }}
      />
      <LibraryCard
        title="React"
        to="/about"
        overview="The main thing that makes end-to-end type safety difficult is simple: boundaries. The secret to fully typed web apps is typing the boundaries."
        desc="orem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
}

function LibraryCard({ title, desc, overview, to, style }: ILibrary) {
  return (
    <Link to={to}>
      <div className="library__card">
        <img src={style?.background} alt="" />
        <h3 className="title">{title}</h3>
        <h5 className="overview">{overview}</h5>
        <h5 className="desc">{desc}</h5>
      </div>
    </Link>
  );
}

const WrapperHome = styled.div`
  position: relative;
  margin: 24px 0;
  text-align: center;

  .heading {
    margin: 6rem 0 8rem 0;

    h1 {
      font-size: 40px;
      font-weight: 800;
      line-height: 40px;
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

      span {
        border-bottom: 3px solid;
      }
    }
    h2 {
      font-size: 22px;
      line-height: 25px;
      font-weight: 500;
    }
  }

  .content {
    text-align: left;
  }

  .library__wrapper {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 28px;

    .library__card {
      cursor: pointer;
      position: relative;
      border-radius: 8px;
      height: 300px;
      background: rgba(0, 0, 0, 0.1);
      border: 2px solid
        ${({ theme: { colors, mode } }) =>
          mode === "dark" ? colors.dark[8] : colors.dark[2]};

      img {
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -2;
        filter: blur(3px);
        opacity: 0.2;
        border-radius: 8px;
      }

      .title {
        padding: 14px 24px 0 24px;
        font-size: 28px;
      }
      .overview {
        padding: 7px 24px 0 24px;
        font-size: 16px;
        font-weight: 500;
        opacity: 0.7;
        letter-spacing: 0.2px;
      }
      .desc {
        padding: 32px 24px 0 24px;
        font-size: 14px;
        font-weight: 500;
      }

      :hover,
      :active {
        border: 2px solid ${({ theme: { colors } }) => colors.danger[9]};
      }
    }
  }

  @media (min-width: 1400px) {
    .heading {
      margin: 7rem 5rem 9rem 5rem;
      h1 {
        font-size: 44px;
        line-height: 50px;
      }
      h2 {
        font-size: 18px;
        line-height: 24px;
      }
    }

    .library__wrapper {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export default Home;
