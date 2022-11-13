import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {LeftContent, RightContent} from '../components/layouts'

function Home() {
  return (
    <WrapperHome>
      <RightContent className="left">
        <div className="heading">
          <Title order={1}>
            I am a <span>Front-end</span> Engineer & <span>Design </span>
            Enthusiast.
          </Title>
          <Title order={2}>Helping brands to stand out.</Title>
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
  margin: 32px 0;
  .right {
    width: 100%;
    margin-top: 42px;
    background: rgba(0, 0, 0, 0.3);
    img {
      z-index: -2;
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .left {
    text-align: left;
    width: 100%;
    .heading {
      h1 {
        font-size: 26px;
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
      h2 {
        font-size: 22px;
        margin: 24px 0 12px 0;
        color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[3] : colors.dark[5]};
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
          margin: 36px 0 16px 0;
        }
      }
    }
  }
`

export default Home
