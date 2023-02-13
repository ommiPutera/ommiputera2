import {Text, Title} from '@mantine/core'
import {IconAt, IconUser} from '@tabler/icons'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'

function EmailSection() {
  return (
    <Wrapper>
      <Information>
        <Title className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-left">
          Get in Touch ✨
        </Title>
        <Text
          size="lg"
          className="mobile-mt-22 mt-32 mobile-font-18 font-20 font-500 basic-animate-1"
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
          className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500 basic-animate-1"
        >
          Want to call me?
        </Text>
        <Text
          size="lg"
          color="dark.4"
          className="mobile-font-18 font-20 font-500 basic-animate-2"
        >
          Schedule a call with me
        </Text>
        <Text
          size="xl"
          className="mt-32 mobile-mt-22 mobile-font-22 font-24 font-500 basic-animate-1"
        >
          Just want to email me?
        </Text>
        <Text
          size="lg"
          color="dark.4"
          className="mobile-font-18 font-20 font-500 basic-animate-2"
        >
          omiputrakarunia@gmail.com
        </Text>
      </Information>
      <Form>
        <Input placeholder="Name" icon={<IconUser />} size="md" />
        <Input placeholder="Email" icon={<IconAt />} size="md" type="email" />
        <Textarea placeholder="Message" size="md" minRows={5} maxRows={6} />
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            variant="default"
            size="lg"
            mobileSize="md"
            className="basic-animate-2"
          >
            Send
          </Button>
        </div>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  > div {
    width: 100%;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
    gap: 42px;

    > div {
      width: 55%;
    }
  }
`
const Information = styled.div``
const Form = styled.form`
  width: 100%;
  border-radius: 14px;
  background: ${({theme: {colors, mode}}) =>
    mode === 'dark' ? colors.dark[8] : colors.dark[2]};
  height: max-content;
  padding: 6px 18px 18px 18px;

  @media (min-width: 1100px) {
    width: 45%;
    padding: 12px 26px;
    padding: 12px 26px 20px 26px;
  }
`

export default EmailSection
