import {Text, Title} from '@mantine/core'
import styled from 'styled-components'

function EmailSection() {
  return (
    <Wrapper>
      <Information>
        <Title className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-left">
          Get in Touch ✨
        </Title>
        <Text
          size="lg"
          className="mobile-mt-22 mt-32 mobile-font-16 font-18 font-400 basic-animate-1"
          color="dark.4"
        >
          Lorem ipsum dolor sit amet consectetur. Interdum ultricies purus
          sapien commodo tortor convallis facilisi.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Et dignissim tellus sapien ac
          consequat ultrices eu. Nec leo amet ut cursus lectus sit odio. Morbi
          imperdiet non amet scelerisque aliquet vestibulum dis phasellus risus.
        </Text>
        <Text
          size="xl"
          className="mt-32 mobile-mt-22 mobile-font-22 font-22 font-500 basic-animate-1"
        >
          Want to call me?
        </Text>
        <Text
          size="lg"
          color="dark.4"
          className="mobile-font-16 font-18 font-400 basic-animate-2"
        >
          Schedule a call with me
        </Text>
        <Text
          size="xl"
          className="mt-32 mobile-mt-22 mobile-font-22 font-22 font-500 basic-animate-1"
        >
          Just want to email me?
        </Text>
        <Text
          size="lg"
          color="dark.4"
          className="mobile-font-16 font-18 font-400 basic-animate-2"
        >
          omiputrakarunia@gmail.com
        </Text>
      </Information>
      <Form></Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
  }

  @media (min-width: 1100px) {
    flex-direction: row;

    > div {
      width: 50%;
    }
  }
`
const Information = styled.div``
const Form = styled.div``

export default EmailSection
