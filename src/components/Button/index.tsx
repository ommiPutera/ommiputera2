import {Button} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import {getClassProps} from '../../utils/helpers'

interface IButton {
  children: React.ReactNode | JSX.Element
  className?: string
  variant?: 'outline' | 'default'
  compact?: true
  size?: 'sm' | 'md' | 'lg' | 'xl'
  mobileSize?: 'sm' | 'md' | 'lg' | 'xl'
}

function EpicButton({children, className, ...rest}: IButton) {
  return (
    <WrapperButton className={className}>
      <Button className={clsx(getClassProps(rest))}>{children}</Button>
    </WrapperButton>
  )
}

const WrapperButton = styled.div`
  .mantine-Button-root {
    margin: 8px 0;
    padding: 0 32px 3px 32px;
    min-width: 190px;
    min-height: 60px;
    border-radius: 100px;
  }
  .mantine-Button-label {
    font-weight: 500;
  }

  .sizeLg {
    .mantine-Button-label {
      font-size: 17px;
    }
  }

  @media (max-width: 768px) {
    .mobileSizeMd {
      .mantine-Button-label {
        font-size: 14px;
      }
    }
  }

  .variantDefault {
    border: 2px solid
      ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[9] : colors.dark[0]};
    background: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};

    &:hover {
      border: 2px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[3] : colors.dark[6]};
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[3] : colors.dark[7]};
      transition: border 0.4s ease;
    }
  }
  .variantOutline {
    border: 2px solid
      ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};

    &:hover {
      border: 2px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[9] : colors.dark[1]};
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[9] : colors.dark[1]};
      transition: border 0.4s ease;
    }
  }
`

export {EpicButton as Button}
