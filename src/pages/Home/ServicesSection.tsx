import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import React from 'react'
import styled from 'styled-components'
import {Icon1, Icon2, Icon3} from '../../utils/icons'

function ServicesSection() {
  return (
    <Wrapper>
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
  return (
    <Content className={clsx(animate, '')}>
      {Icon}
      <Text
        size="xl"
        className="mt-32 mobile-mt-22 mobile-font-22 font-22 font-500"
      >
        Lorem ipsum dolor sit Amet
      </Text>
      <Text
        style={{opacity: '60%'}}
        size="lg"
        className="mt-32 mobile-mt-22 mobile-font-16 font-18 font-500"
      >
        Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.
        Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.
      </Text>
    </Content>
  )
}

const Wrapper = styled.div``

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 62px;
  gap: 62px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 102px;
    gap: 86px;
  }
`

const Content = styled.div`
  width: 100%;
  text-align: center;
`

export default ServicesSection
