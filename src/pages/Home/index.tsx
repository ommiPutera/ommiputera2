import {Text, Title} from '@mantine/core'
import {Button} from '../../components/Button'
import {LeftContent, RightContent} from '../../components/layouts/styled'
import {WrapperHome} from './styled'

function Home() {
  return (
    <WrapperHome>
      <LeftContent className="left xs__bottom">
        <img src="/assets/image/profile-home.jpg" alt="" />
      </LeftContent>
      <RightContent className="right xs__top">
        <div className="heading">
          <Title className="text font-500 font-34" order={1}>
            I'm a <span>Software Engineer</span> & Design Enthusiast based in
            Jakarta. Available for freelance & collaborations. This site is my
            high quality <span>open-source.</span>
          </Title>
          <Title className="sub text font-500" order={1}>
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
          <Button variant="outline">Click me</Button>
        </div>
      </RightContent>
    </WrapperHome>
  )
}

export default Home
