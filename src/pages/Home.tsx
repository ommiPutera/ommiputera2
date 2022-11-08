import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {LeftContent, RightContent} from '../components/layouts'

interface ILibrary {
  title: string
  desc: string
  overview: string
  to: string
  style?: {
    background?: string
  }
}

function Home() {
  return (
    <WrapperHome>
      <LeftContent className="left">
        <h1 className="burn__color">Tes</h1>
        <h1>I am a Front-end Engineer & Design Enthusiast.</h1>
      </LeftContent>
      <RightContent className="right"></RightContent>
    </WrapperHome>
  )
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
            'https://www.epicweb.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fepic-web%2Fimage%2Fupload%2Fv1666191512%2Fepicweb.dev%2Fblog%2FFully%2520Typed%2520Web%2520Apps%2Fhero_2x.jpg&w=828&q=75',
        }}
      />
      <LibraryCard
        title="React"
        to="/about"
        overview="The main thing that makes end-to-end type safety difficult is simple: boundaries. The secret to fully typed web apps is typing the boundaries."
        desc="orem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  )
}

function LibraryCard({title, desc, overview, to, style}: ILibrary) {
  return (
    <Link to={to}>
      <div className="library__card">
        <img src={style?.background} alt="" />
        <h3 className="title">{title}</h3>
        <h5 className="overview">{overview}</h5>
        <h5 className="desc">{desc}</h5>
      </div>
    </Link>
  )
}

const WrapperHome = styled.div`
  margin: 32px 0;
  display: flex;
  align-items: center;

  .left {
    border-right: 1px solid
      ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[6] : colors.dark[5]};

    h1 {
      font-size: 32px;
      font-weight: 800;
      line-height: 40px;

      span {
        background-image: linear-gradient(
          to right,
          ${({theme: {colors, mode}}) =>
            mode === 'dark' ? colors.danger[9] : colors.danger[9]},
          ${({theme: {colors, mode}}) =>
            mode === 'dark' ? colors.warning[6] : colors.warning[6]}
        );
        background-clip: clip;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  position: relative;
  text-align: center;

  .heading {
    margin: 2.5rem 0 3.5rem 0;

    h2 {
      font-size: 17px;
      line-height: 20px;
      font-weight: 400;
      margin-top: 20px;
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
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};

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
        border: 2px solid ${({theme: {colors}}) => colors.danger[9]};
      }
    }
  }

  @media (min-width: 1400px) {
    /* margin: 0 8rem; */
    .heading {
      h1 {
        font-size: 32px;
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
`

export default Home
