import {Title} from '@mantine/core'
import {LeftContent, RightContent} from '../../components/layouts/styled'

function HeroSection() {
  return (
    <div>
      <LeftContent></LeftContent>
      <RightContent>
        <Title className="text-align-left" order={1}>
          <span>Software Engineer</span> and also a Design Enthusiast based in
          Jakarta. Available for freelance and collaborations.
        </Title>
      </RightContent>
    </div>
  )
}

export default HeroSection
