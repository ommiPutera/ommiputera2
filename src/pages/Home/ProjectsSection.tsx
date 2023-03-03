import {Carousel} from '@mantine/carousel'
import {Text, Title} from '@mantine/core'
import Autoplay, {AutoplayType} from 'embla-carousel-autoplay'
import React from 'react'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import useMode from '../../hooks/useMode'
import useWindowFocusHandler from '../../hooks/useWindowFocusHandler'
import {dataProjects} from './data'

export interface IProject {
  id?: string
  layout?: '1' | '2'
  title?: string
  description?: string
  type?: string
  note?: string
  viewsURL?: string[]
}

type ProjectCarouselTypes = {
  autoplay: React.MutableRefObject<AutoplayType>
  urls?: string[]
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
        {dataProjects.map(data => (
          <ProjectItem {...data} />
        ))}
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

function ProjectItem({
  id,
  layout,
  title,
  description,
  type,
  note,
  viewsURL,
}: IProject) {
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
      key={id}
      layout={layout}
      onMouseEnter={handlePlaySlides}
      onMouseLeave={handleResetSlides}
    >
      <div>
        <Text
          size="lg"
          className="mobile-mt-22 mobile-font-18 font-20 font-500 basic-animate-1"
        >
          {type}
        </Text>
      </div>
      <div>
        <div>
          <Text
            color={mode === 'dark' ? 'dark.3' : 'dark.7'}
            size="lg"
            className="mobile-mt-22 mobile-font-18 font-20 font-500 basic-animate-1"
          >
            {description}
          </Text>
          <Text
            size="xl"
            className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500 basic-animate-2"
          >
            {title}
          </Text>
        </div>
        <div>
          <Text
            color={mode === 'dark' ? 'dark.3' : 'dark.7'}
            size="lg"
            className="mobile-mt-22 mobile-font-16 font-20 font-500 basic-animate-1"
          >
            {note}
          </Text>
        </div>
      </div>
      <div className="basic-animate-3">
        <ProjectCarousel autoplay={autoplay} urls={viewsURL} />
      </div>
    </Project>
  )
}

function ProjectCarousel({autoplay, urls}: ProjectCarouselTypes) {
  return (
    <WrapperCarousel>
      <Carousel
        orientation="vertical"
        withControls={false}
        height="100%"
        sx={{flex: 1}}
        plugins={[autoplay.current]}
      >
        {urls &&
          urls.map(src => (
            <Carousel.Slide>
              <img className="preview__" src={src} alt="" />
            </Carousel.Slide>
          ))}
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
    margin: 0 0 102px -162px;
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
