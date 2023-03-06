import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import useMode from '../../hooks/useMode'

function BlogSection() {
  const {mode} = useMode()
  return (
    <Wrapper>
      <Title className="font-38 mobile-font-28 font-600 basic-animate-1">
        Blog recommendations
      </Title>
      <Title
        color={mode === 'dark' ? 'dark.4' : 'dark.7'}
        className="font-38 mobile-font-28 font-600 basic-animate-1"
      >
        Prepared especially for you.
      </Title>
      <Contents>
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </Contents>
      <Button
        variant="default"
        size="lg"
        mobileSize="md"
        className="mt-102 mobile-mt-32 basic-animate-2"
      >
        See the full blog
      </Button>
    </Wrapper>
  )
}

function BlogItem() {
  const {mode} = useMode()
  return (
    <WrapperBlog>
      <img
        className="basic-animate-2"
        src="/assets/projects/project1.webp"
        alt=""
      />
      <div>
        <Text
          size="xl"
          className="mt-32 mobile-mt-22 mobile-font-18 font-26 font-500 basic-animate-1"
        >
          Use react-error-boundary to handle errors in React
        </Text>
        <Text
          size="xl"
          className="mt-32 mobile-mt-22 mobile-font-18 font-22 font-500 basic-animate-2"
          color={mode === 'dark' ? 'dark.4' : 'dark.6'}
        >
          January 12th, 2023 — 15 min read
        </Text>
      </div>
    </WrapperBlog>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    margin: 0 -90px;
  }
`
const Contents = styled.div`
  margin-top: 62px;
  gap: 62px;

  @media (min-width: 1000px) {
    margin-top: 102px;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px;
  }
`
const WrapperBlog = styled.div`
  width: 100%;
  cursor: pointer;

  :hover {
    img {
      border-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    }
  }

  > div {
    padding: 5px;
  }

  img {
    padding: 5px;
    width: 100%;
    object-fit: cover;
    height: 200px;
  }

  @media (min-width: 1000px) {
    img {
      padding: 5px;
      width: 100%;
      object-fit: cover;
      height: 600px;
      border-radius: 22px;
      transition: border 0.4s ease;
      border: 3px solid transparent;
    }
  }
`

export default BlogSection
