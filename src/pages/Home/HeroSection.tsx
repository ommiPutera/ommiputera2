import {Title} from '@mantine/core'
import {LeftContent, RightContent} from '../../components/layouts/styled'
import {WrapperHome} from './styled'

function HeroSection() {
  return (
    <WrapperHome>
      <LeftContent></LeftContent>
      <RightContent>
        <Title className="text text-align-left" order={1}>
          <span>Software Engineer</span> and also a Design Enthusiast based in
          Jakarta. Available for freelance and collaborations.
        </Title>
      </RightContent>
    </WrapperHome>
  )
}

export default HeroSection
