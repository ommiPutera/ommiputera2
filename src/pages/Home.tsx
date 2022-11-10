import {Text, Title} from '@mantine/core'
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
      <LeftContent className="left">left</LeftContent>
      <RightContent className="right">
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
    </WrapperHome>
  )
}

const WrapperHome = styled.div`
  margin: 32px 0;
  display: flex;
  align-items: center;

  .right {
    text-align: left;
    padding-left: 32px;
    border-left: 1px solid
      ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[6] : colors.dark[5]};

    .heading {
      h1 {
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
        margin: 24px 0 14px 0;
        color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[3] : colors.dark[5]};
      }
    }
  }

  @media (min-width: 1400px) {
  }
`

export default Home
