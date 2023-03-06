import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import useMode from '../../hooks/useMode'
import {dataServices} from './data'

export interface IServices {
  id: string
  title: string
  desc: string
  Icon: JSX.Element
  animate: 'basic-animate-1' | 'basic-animate-2' | 'basic-animate-3'
}

function ServicesSection() {
  const {mode} = useMode()
  return (
    <Wrapper id="services">
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-center">
        Let’s work together
      </Title>
      <Title
        color={mode === 'dark' ? 'dark.4' : 'dark.6'}
        className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-center"
      >
        Pushing the limits of what's possible.
      </Title>
      <Contents>
        {dataServices.map(service => (
          <ContentItem key={service.id} {...service} />
        ))}
      </Contents>
    </Wrapper>
  )
}

function ContentItem({animate, Icon, id, title, desc}: IServices) {
  const {mode} = useMode()
  return (
    <Content className={clsx(animate, '')}>
      <div className="icon__">{Icon}</div>
      <Text
        size="xl"
        className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500"
      >
        {title}
      </Text>
      <Text
        size="lg"
        className="mt-32 mobile-mt-22 mobile-font-18 font-18 font-500"
        color={mode === 'dark' ? 'dark.3' : 'dark.7'}
      >
        {desc}
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
