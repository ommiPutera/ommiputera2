import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import {Icon1, Icon2, Icon3} from '../../utils/icons'

function BigProject() {
  const {mode} = useMode()
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
        <ContentItem animate="basic-animate-1" Icon={<Icon1 />} />
        <ContentItem animate="basic-animate-2" Icon={<Icon2 />} />
        <ContentItem animate="basic-animate-3" Icon={<Icon3 />} />
      </Contents>
    </Wrapper>
  )
}

function ContentItem({
  animate,
  Icon,
}: {
  Icon: JSX.Element
  animate: 'basic-animate-1' | 'basic-animate-2' | 'basic-animate-3'
}) {
  return (
    <Content className={clsx(animate, '')}>
      <div className="icon__">{Icon}</div>
      <Text
        size="xl"
        className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500"
      >
        Lorem ipsum dolor sit Amet
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
  margin-top: 62px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 102px;
  }
`

const Content = styled.div`
  text-align: center;
  background: ${({theme: {colors, mode}}) =>
    mode === 'dark' ? colors.dark[8] : colors.dark[2]};
  width: 350px;
  height: 230px;
  border-radius: 14px;
  padding: 20px;

  .icon__ {
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default BigProject
