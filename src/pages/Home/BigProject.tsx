import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import React from 'react'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import {dataBigProject} from './data'

function BigProject() {
  const {mode} = useMode()
  const [selectedKey, setSelectedKey] = React.useState(0)
  return (
    <Wrapper>
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-center">
        Big project to do?
      </Title>
      <Title
        color={mode === 'dark' ? 'dark.4' : 'dark.6'}
        className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-center"
      >
        My team will finish your project.
      </Title>
      <Contents>
        <ContentItem
          animate="basic-animate-1"
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          contentKey={0}
          title={dataBigProject[0].title}
          imageUrl={dataBigProject[0].imageUrl}
        />
        <ContentItem
          animate="basic-animate-2"
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          contentKey={1}
          title={dataBigProject[1].title}
          imageUrl={dataBigProject[1].imageUrl}
        />
        <ContentItem
          animate="basic-animate-3"
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          contentKey={2}
          title={dataBigProject[2].title}
          imageUrl={dataBigProject[2].imageUrl}
        />
      </Contents>
      <Detail>
        <Text
          size="xl"
          className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500 basic-animate-3"
        >
          {dataBigProject[selectedKey].content}
        </Text>
      </Detail>
    </Wrapper>
  )
}

function ContentItem({
  animate,
  title,
  imageUrl,
  contentKey,
  selectedKey,
  setSelectedKey,
}: {
  imageUrl: string
  contentKey: 0 | 1 | 2
  selectedKey: number
  title: string
  setSelectedKey: React.Dispatch<React.SetStateAction<number>>
  animate: 'basic-animate-1' | 'basic-animate-2' | 'basic-animate-3'
}) {
  return (
    <Content
      className={clsx(
        animate,
        selectedKey === contentKey ? 'selected' : 'not__selected',
      )}
      onClick={() => setSelectedKey(contentKey)}
    >
      <div className="icon__">
        <img src={imageUrl} alt="" />
      </div>
      <Text
        size="xl"
        className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500"
      >
        {title}
      </Text>
    </Content>
  )
}

const Wrapper = styled.div`
  padding-top: 24px;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 122px;
  gap: 110px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 152px;
  }
`

const Detail = styled.div`
  margin-top: 62px;
  height: 150px;
`

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({theme: {colors, mode}}) =>
    mode === 'dark' ? colors.dark[8] : colors.dark[1]};
  width: 350px;
  height: 230px;
  border: 3px solid transparent;
  border-radius: 14px;
  padding: 20px;
  cursor: pointer;
  color: ${({theme: {colors}}) => colors.dark[5]};

  &.selected {
    border-color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};

    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    img {
      opacity: 1 !important;
    }
  }

  .icon__ {
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      opacity: 0.7;
      width: 150px;
      margin-top: -90px;
    }
  }

  @media (min-width: 1000px) {
    width: 350px;
    height: 230px;
    margin-bottom: 0px;

    .icon__ {
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        opacity: 0.7;
        width: 170px;
        margin-top: -90px;
      }
    }
  }
`

export default BigProject
