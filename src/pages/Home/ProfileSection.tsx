import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import {LeftContent, RightContent} from '../../components/layouts/styled'

function ProfileSection() {
  return (
    <WrapperHome>
      <LeftContent className="left xs__top">
        <div className="heading">
          <Title className="text" order={1}>
            <span>Software Engineer</span> and also a Design Enthusiast based in
            Jakarta. Available for freelance and collaborations.
          </Title>
          <Title className="sub text-08" order={1}>
            This is my high quality <span>open-source.</span>
          </Title>
          <Text className="text-08" size="lg">
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
          <Button variant="outline">Click me</Button>
        </div>
      </LeftContent>
      <RightContent className="right xs__bottom">
        <img className="img-08" src="/assets/image/profile-home.jpg" alt="" />
      </RightContent>
    </WrapperHome>
  )
}

const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0 42px 0;
  height: max-content;

  .xs__top {
    order: 1;
    text-align: left;
    width: 100%;
    .heading {
      h1 {
        span {
          font-weight: 800;
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
  .xs__bottom {
    order: 2;
    width: 100%;
    background: ${({theme: {mode}}) =>
      mode === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 8px;
    img {
      z-index: -2;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 1400px) {
    display: flex;
    flex-direction: row;
    margin: 0;

    .left {
      order: 1;
      width: 65%;
      border-top-left-radius: 14px;
      border-bottom-left-radius: 14px;
      padding: 52px 180px 52px 52px;
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[2]};
      .heading {
        h1 {
          &.sub {
            margin: 42px 0 16px 0;
          }
        }
      }
    }
    .right {
      order: 2;
      width: 35%;
      img {
        z-index: -2;
        width: 100%;
        object-fit: cover;
        border-top-right-radius: 14px;
        border-bottom-right-radius: 14px;
      }
    }
  }
`

export default ProfileSection
