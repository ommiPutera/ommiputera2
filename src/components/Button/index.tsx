import {Button} from '@mantine/core'
import styled from 'styled-components'

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
    border: 2px solid ${({theme: {colors}}) => colors.danger[9]};
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    &:hover {
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[2]};
    }
  }
`

const getClassProps = (props: any) => {
  if (!Boolean(Object.keys(props).length)) return ''
  let className = ''
  for (var key in props) {
    let temp = ''
    if (typeof props[key] === 'boolean') temp = key
    if (typeof props[key] === 'string') temp = props[key]
    className += ` ${temp}`
  }
  return className
}

export {EpicButton as Button}
