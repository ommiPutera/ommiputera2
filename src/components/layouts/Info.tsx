import {Container, Text} from '@mantine/core'
import styled from 'styled-components'
import {HEADER_SIZE} from '../../defaultVariable'

function Info() {
  return (
    <WrapperInfo>
      <Container size={HEADER_SIZE} className="container">
        <h5>NOTES</h5>
        <Text className="font-500">This website is under development. 💪</Text>
      </Container>
    </WrapperInfo>
  )
}

const WrapperInfo = styled.div`
  .container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    border-bottom: 1px solid
      ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[7] : colors.dark[3]};

    h5 {
      background: ${({theme: {colors}}) => colors.danger[9]};
      color: ${({theme: {colors}}) => colors.dark[0]};
      padding: 1px 6px 2px 6px;
      border-radius: 2px;
    }
  }
`

export default Info
