import {Carousel} from '@mantine/carousel'
import {Text, Title} from '@mantine/core'
import Autoplay, {AutoplayType} from 'embla-carousel-autoplay'
import React from 'react'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import useMode from '../../hooks/useMode'
import useWindowFocusHandler from '../../hooks/useWindowFocusHandler'

interface IProject {
  layout: '1' | '2'
}

type ProjectTypes = {
  autoplay: React.MutableRefObject<AutoplayType>
}

function ProjectsSection() {
  const {mode} = useMode()
  return (
    <Wrapper>
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1">
        Some of my projects
      </Title>
      <Title
        color={mode === 'dark' ? 'dark.4' : 'dark.6'}
        className="font-38 mobile-font-28 font-600 basic-animate-1"
      >
        Creating next level digital products.
      </Title>
      <Contents>
        <ProjectItem layout="1" />
        <ProjectItem layout="1" />
      </Contents>
      <Button
        variant="default"
        size="lg"
        mobileSize="md"
        className="mt-32 mobile-mt-32 basic-animate-2"
      >
        View all my projects
      </Button>
    </Wrapper>
  )
}

function ProjectItem({layout}: IProject) {
  const {mode} = useMode()
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      jump: true,
      stopOnInteraction: false,
      playOnInit: false,
    }),
  )
  const handleResetSlides = () => {
    autoplay.current.reset()
    autoplay.current.stop()
  }
  const handlePlaySlides = () => autoplay.current.play(false)
  const onFocus = () => autoplay.current.stop()
  const onBlur = () => autoplay.current.play(true)
  useWindowFocusHandler(onFocus, onBlur)

  return (
    <Project
      layout={layout}
      onMouseEnter={handlePlaySlides}
      onMouseLeave={handleResetSlides}
    >
      <div>
        <Text
          size="lg"
          className="mobile-mt-22 mobile-font-18 font-20 font-500 basic-animate-1"
        >
          Landing Page
        </Text>
      </div>
      <div>
        <div>
          <Text
            color={mode === 'dark' ? 'dark.3' : 'dark.7'}
            size="lg"
            className="mobile-mt-22 mobile-font-18 font-20 font-500 basic-animate-1"
          >
            Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.
            Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.
          </Text>
          <Text
            size="xl"
            className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500 basic-animate-2"
          >
            Lorem ipsum dolor sit amet consectetur. Facilisis quam turpis at
            cras faucibus a
          </Text>
        </div>
        <div>
          <Text
            color={mode === 'dark' ? 'dark.3' : 'dark.7'}
            size="lg"
            className="mobile-mt-22 mobile-font-16 font-20 font-500 basic-animate-1"
          >
            Client site rendering & React JS.
          </Text>
        </div>
      </div>
      <div className="basic-animate-3">
        <ProjectCarousel autoplay={autoplay} />
      </div>
    </Project>
  )
}

function ProjectCarousel({autoplay}: ProjectTypes) {
  return (
    <WrapperCarousel>
      <Carousel
        orientation="vertical"
        withControls={false}
        height="100%"
        sx={{flex: 1}}
        plugins={[autoplay.current]}
      >
        <Carousel.Slide>
          <img
            className="preview__"
            src="/assets/projects/example1.webp"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            className="preview__"
            src="/assets/projects/example1.webp"
            alt=""
          />
        </Carousel.Slide>
      </Carousel>
    </WrapperCarousel>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Contents = styled.div`
  margin-top: 62px;
  gap: 62px;

  @media (min-width: 1000px) {
    margin-top: 102px;
  }
`

const WrapperCarousel = styled.div`
  height: 600px;
  width: 120%;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`

const Project = styled.div<IProject>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin-bottom: 82px;
  gap: 32px;

  > div {
    position: relative;
    width: 100%;
  }

  .preview__ {
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
    z-index: 1;
  }

  @media (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
    gap: 82px;
    padding: 0 32px;
    margin: 0 0 102px -157px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    transition: border 0.4s ease;

    :hover,
    :focus {
      cursor: pointer;
      border-right: ${props => (props.layout === '2' ? '3px solid' : '')};
      border-left: ${props => (props.layout === '1' ? '3px solid' : '')};
    }

    > div {
      position: relative;
      width: 50%;
    }

    > div:first-child {
      width: 5%;
    }
    > div:nth-child(2) {
      order: ${props => (props.layout === '1' ? 1 : 2)};
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-between;
    }
    > div:last-child {
      width: 150%;
      margin-left: ${props => (props.layout === '2' ? '-270px' : '')};
      margin-right: ${props => (props.layout === '1' ? '-270px' : '')};
      order: ${props => (props.layout === '1' ? 2 : 1)};
    }

    .preview__ {
      max-height: 600px;
    }
  }
`

export default ProjectsSection
