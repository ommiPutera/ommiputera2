import {Button} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import {getClassProps} from '../../utils/helpers'

interface IButton {
  children: React.ReactNode | JSX.Element
  className?: string
  variant?: 'outline' | 'default'
  compact?: true
  fullwidth?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'lg' | 'md' | 'xl'
  mobileSize?: 'sm' | 'md' | 'lg' | 'xl'
  position?:
    | 'center'
    | 'left'
    | 'right'
    | 'left mobile-center'
    | 'right mobile-center'
    | 'left mobile-right'
    | 'center mobile-right'
    | 'right mobile-left'
    | 'center mobile-left'
}

function EpicButton({
  children,
  className,
  mobileSize,
  position = 'center',
  radius = 'xl',
  ...rest
}: IButton) {
  const combineClass = {...rest, mobileSize}
  const postionClass = {
    position: position.split(' ')[0],
    mobile: position.split(' ')[1]?.replace('mobile', ''),
  }
  return (
    <WrapperButton className={clsx(className, getClassProps(postionClass))}>
      <Button
        radius={radius}
        className={clsx(getClassProps(combineClass))}
        {...rest}
      >
        {children}
      </Button>
    </WrapperButton>
  )
}

const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  &.positionCenter {
    justify-content: center;
  }
  &.positionLeft {
    justify-content: left;
  }
  &.positionRight {
    justify-content: right;
  }

  .mantine-Button-root {
    padding: 0 32px 3px 32px;
    min-width: 190px;
    min-height: 60px;
  }
  .mantine-Button-label {
    font-weight: 500;
  }

  .fullwidth {
    &.mantine-Button-root {
      width: 100%;
    }
  }

  .sizeLg {
    .mantine-Button-label {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    &.mobile-Center {
      justify-content: center;
    }
    &.mobile-Right {
      justify-content: right;
    }
    &.mobile-Left {
      justify-content: left;
    }

    .mobileSizeMd {
      .mantine-Button-label {
        font-size: 16px;
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
    transition: border 0.4s ease-in;
    border: 2px solid
      ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};

    &:hover {
      border: 2px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[9] : colors.dark[0]};
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[9] : colors.dark[0]};
      transition: border 0.4s ease-out;
    }
  }
`

export {EpicButton as Button}
