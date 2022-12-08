import {Text, Title} from '@mantine/core'
import {LeftContent, RightContent} from '../../components/layouts/styled'
import {WrapperHome} from './styled'

function Home() {
  return (
    <WrapperHome>
      <RightContent className="left">
        <div className="heading">
          <Title className="text" order={1}>
            I am a <span>Software Engineer</span> also a Design Enthusiast and
            this site is my high quality <span>open-source.</span>
          </Title>
          <Title className="sub text" order={1}>
            Helping brands to stand out.
          </Title>
          <Text className="text" size="lg">
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

export default Home
