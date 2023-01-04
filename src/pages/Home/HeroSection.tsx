import {Container, Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'

function HeroSection() {
  return (
    <Wrapper>
      <Container size="sm" className="mt-82">
        <Title className="font-42">
          Software Engineer and also a Design Enthusiast based in Jakarta.
          Available for freelance and collaborations.
        </Title>
      </Container>
      <Container size="sm" className="mt-32">
        <Text size="xl">
          Hi 👋, I'm a Software Engineer - Front-end with 2 years of proven
          experience at a fintech company in helping to create and maintain a
          better code base for re-usability and best practices. Experience in
          developing projects from concept to launch. Eager to tackle more
          complex problems, and continues to find ways to maximize user
          efficiency
        </Text>
      </Container>
      <Container className="mt-102">
        <Button variant="default" size="lg">
          Get started to my open-sources
        </Button>
        <Button variant="outline" size="lg">
          Learn more about Ommi Putera
        </Button>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default HeroSection
