import {Button} from '@mantine/core'
import styled from 'styled-components'
import {getClassProps} from '../../utils/helpers'

interface IButton {
  children: React.ReactNode | JSX.Element
  variant?: 'outline' | 'default'
  compact?: true
}

function EpicButton({children, ...rest}: IButton) {
  return (
    <WrapperButton>
      <Button className={getClassProps(rest)} {...rest}>
        {children}
      </Button>
    </WrapperButton>
  )
}

const WrapperButton = styled.div`
  .mantine-Button-root {
    margin: 24px 0;
    min-width: 190px;
    min-height: 60px;
    border-radius: 100px;
  }
  .mantine-Button-label {
    font-size: 15px;
  }

  .outline {
    border: 2.5px solid ${({theme: {colors}}) => colors.dark[4]};
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};

    &:hover {
      border: 3px solid ${({theme: {colors}}) => colors.danger[9]};
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[9] : colors.dark[1]};
      transition: border 0.4s ease;
    }
  }
`

export {EpicButton as Button}
