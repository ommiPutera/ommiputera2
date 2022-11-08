import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {IconArrowBack} from '@tabler/icons'
import {Button} from '@mantine/core'
import {ICON_SIZE} from '../defaultVariable'

function NoMatchPage() {
  const {pathname} = useLocation()
  const url = window.location.href
    .replace(/http:|https:|/gi, '')
    .replace('//', '')
    .replace(`${pathname.toLowerCase()}`, '')

  return (
    <WrapperPage>
      <h1>404 - Oh no, page not found.</h1>
      <p>
        <b>"{`${pathname}`}"</b> {` is not a page on ${url}. So sorry.`}
      </p>
      <Link to="/">
        <Button
          color="danger"
          variant="outline"
          radius="xl"
          size="md"
          leftIcon={<IconArrowBack size={ICON_SIZE} />}
        >
          Go to the home page
        </Button>
      </Link>
    </WrapperPage>
  )
}

const WrapperPage = styled.div`
  text-align: center;
  padding: 10rem 0;
  height: 100vh;

  h1 {
    font-size: 22px;
    margin-bottom: 4px;
  }
  p {
    font-size: 13.5px;
    margin-bottom: 34px;
  }

  button {
    :hover {
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[1]};
    }
  }

  @media (min-width: 1600px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14.5px;
    }
  }
`

export default NoMatchPage
