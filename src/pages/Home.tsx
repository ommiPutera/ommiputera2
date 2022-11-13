import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {LeftContent, RightContent} from '../components/layouts'

function Home() {
  return (
    <WrapperHome>
      <RightContent className="left">
        <div className="heading">
          <Title order={2}>
            I am a <span>Software Engineer</span> also a Design Enthusiast and
            this site is my high quality <span>open-source.</span>
          </Title>
          <Title order={2} className="sub">
            Helping brands to stand out.
          </Title>
          <Text>
            After I graduated from college (August 2020), I decided to further
            develop myself into the digital world which I think is more
            promising for my future career. Previously, I am graduated from the
            Web and Mobile Development program (Bootcamp) at Purwadhika Digital
            Technologhy School, Jakarta. and on October fourth, 2021 until now I
            am working as a Frontend Developer at Dipay Indonesia, I take care
            of legacy code, add a feature that the company needs, and
            collaborate with different teams such as the Product team, the
            Mobile team, and of course Backend team for the Web services.
          </Text>
        </div>
      </RightContent>
      <LeftContent className="right">
        <img src="/assets/image/profile-home.jpg" alt="" />
      </LeftContent>
    </WrapperHome>
  )
}

const WrapperHome = styled.div`
  margin: 22px 0;
  .right {
    width: 100%;
    margin-top: 42px;
    background: ${({theme: {mode}}) =>
      mode === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 8px;
    img {
      z-index: -2;
      width: 100%;
      object-fit: cover;
    }
  }
  .left {
    text-align: left;
    width: 100%;
    .heading {
      h2 {
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
        &.sub {
          margin: 38px 0 12px 0;
        }
      }
    }
  }

  @media (min-width: 1400px) {
    margin: 0;
    display: flex;
    .right {
      width: 50%;
      img {
        z-index: -2;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    .left {
      width: 50%;
      padding-right: 125px;
      .heading {
        h2 {
          &.sub {
            margin: 46px 0 16px 0;
          }
        }
      }
    }
  }
`

export default Home
