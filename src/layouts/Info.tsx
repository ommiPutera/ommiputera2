import {Container, Text} from '@mantine/core'
import styled from 'styled-components'
import {HEADER_SIZE} from '../defaultVariable'

function Info() {
  return (
    <WrapperInfo>
      <Container size={HEADER_SIZE} className="container">
        <h5>NOTES</h5>
        <Text size="sm" className="font-500">
          This website is under development. 💪
        </Text>
      </Container>
    </WrapperInfo>
  )
}

const WrapperInfo = styled.div`
  .container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px;

    h5 {
      font-weight: 500;
      font-size: 11px;
      background: ${({theme: {colors}}) => colors.danger[9]};
      color: ${({theme: {colors}}) => colors.dark[0]};
      padding: 1px 6px 2px 6px;
      border-radius: 3px;
    }
  }

  @media (min-width: 1100px) {
    margin: auto;

    .container {
      padding: 16px 0;
    }
  }
`

export default Info
