import {Text, Title} from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import {Button} from '../../components/Button'

interface IProject {
  layout: '1' | '2'
}

function ProjectsSection() {
  return (
    <Wrapper>
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1">
        My past projects.
      </Title>
      <Contents>
        <ProjectItem layout="1" />
        <ProjectItem layout="2" />
        <ProjectItem layout="1" />
      </Contents>
      <Button
        variant="outline"
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
  return (
    <Project layout={layout}>
      <div>
        <div>
          <Text
            style={{opacity: '60%'}}
            size="lg"
            className="mobile-mt-22 mobile-font-16 font-18 font-500 basic-animate-1"
          >
            Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.
            Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.
          </Text>
          <Text
            size="xl"
            className="mt-32 mobile-mt-22 mobile-font-22 font-22 font-500 basic-animate-2"
          >
            Lorem ipsum dolor sit amet consectetur. Facilisis quam turpis at
            cras faucibus a
          </Text>
        </div>
        <Text
          style={{opacity: '60%'}}
          size="lg"
          className="mobile-mt-22 mobile-font-16 font-18 font-500 basic-animate-1"
        >
          Client site rendering & React JS.
        </Text>
      </div>
      <div className="basic-animate-3">
        <img
          className="preview__"
          src="/assets/projects/project1.webp"
          alt=""
        />
      </div>
    </Project>
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
    height: 60vh;
    object-fit: cover;
    border-radius: 14px;
  }

  @media (min-width: 1000px) {
    width: 100%;
    flex-direction: row;
    gap: 102px;
    margin-bottom: 102px;
    padding: 0 32px;
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
      order: ${props => (props.layout === '1' ? 1 : 2)};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    > div:last-child {
      order: ${props => (props.layout === '1' ? 2 : 1)};
    }

    .preview__ {
      width: 100%;
      height: 70vh;
      max-height: 700px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`

export default ProjectsSection
