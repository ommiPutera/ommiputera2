import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import {Icon1, Icon2, Icon3} from '../../utils/icons'

function ServicesSection() {
  return (
    <Wrapper id="services">
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-center">
        Pushing the limits of what's possible.
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
  const {mode} = useMode()
  return (
    <Content className={clsx(animate, '')}>
      <div className="icon__">{Icon}</div>
      <Text
        size="xl"
        className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500"
      >
        Lorem ipsum dolor sit Amet
      </Text>
      <Text
        size="lg"
        className="mt-32 mobile-mt-22 mobile-font-18 font-18 font-500"
        color={mode === 'dark' ? 'dark.3' : 'dark.7'}
      >
        Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.
        Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.
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
  gap: 62px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 102px;
    gap: 66px;
  }
`

const Content = styled.div`
  width: 100%;
  text-align: center;

  .icon__ {
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default ServicesSection
