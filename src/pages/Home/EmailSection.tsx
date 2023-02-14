import {Text, Title} from '@mantine/core'
import {IconAt, IconUser} from '@tabler/icons'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  email: z.string().email({message: 'Email must be a valid email'}),
})

function EmailSection() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {name: '', email: ''},
  })

  return (
    <>
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1 text-align-left">
        Get in Touch ✨
      </Title>
      <Wrapper>
        <Information>
          <Text
            size="lg"
            className="mobile-mt-22 mt-32 mobile-font-18 font-20 font-500 basic-animate-1"
            color="dark.4"
          >
            Lorem ipsum dolor sit amet consectetur. Interdum ultricies purus
            sapien commodo tortor convallis facilisi.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Et dignissim tellus sapien
            ac consequat ultrices eu. Nec leo amet ut cursus lectus sit odio.
            Morbi imperdiet non amet scelerisque aliquet vestibulum dis
            phasellus risus.
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
        <Form onSubmit={handleSubmit(d => console.log('d: ', d))}>
          <Input
            placeholder="Name"
            icon={<IconUser />}
            size="md"
            errors={errors?.name?.message ?? ''}
            {...register('name')}
          />
          <Input
            placeholder="Email"
            icon={<IconAt />}
            size="md"
            type="email"
            errors={errors?.email?.message ?? ''}
            {...register('email')}
          />
          {/* <Textarea placeholder="Message" size="md" minRows={5} maxRows={6} /> */}
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button
              type="submit"
              variant="outline"
              size="lg"
              radius="md"
              fullwidth
              mobileSize="md"
            >
              Send
            </Button>
          </div>
        </Form>
      </Wrapper>
    </>
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
    gap: 82px;

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
    mode === 'dark' ? colors.dark[9] : colors.dark[0]};
  height: max-content;
  padding: 6px 0px 18px 0px;

  @media (min-width: 1100px) {
    width: 45%;
    padding: 12px 26px 20px 26px;
  }
`

export default EmailSection
