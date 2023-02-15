import {Input} from '@mantine/core'
import styled from 'styled-components'
import React from 'react'

interface IInput {
  placeholder: string
  size: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode | JSX.Element
  multiline?: boolean
  errors?: string
  register?: any
  type?: 'email' | 'text'
}

type Ref = HTMLInputElement

const EpicInput = React.forwardRef<Ref, IInput>(
  ({placeholder, type, multiline, errors, ...rest}, ref) => {
    return (
      <WrapperInput>
        <Input.Wrapper error={errors}>
          <Input
            ref={ref}
            radius="md"
            placeholder={placeholder}
            type={type}
            multiline
            {...rest}
          />
        </Input.Wrapper>
      </WrapperInput>
    )
  },
)

const WrapperInput = styled.div`
  .mantine-InputWrapper-root {
    margin: 16px 0;
  }
  .mantine-Input-wrapper {
    width: 100%;
    margin-bottom: 6px;
  }
  .mantine-InputWrapper-error {
    font-size: 13.5px;
  }
  .mantine-Input-input {
    border: none;
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    border: 2px solid ${({theme: {colors}}) => colors.dark[4]};
    background: transparent;

    ::placeholder {
      color: ${({theme: {colors}}) => colors.dark[4]};
    }
    :-ms-input-placeholder {
      color: ${({theme: {colors}}) => colors.dark[4]};
    }
    ::-ms-input-placeholder {
      color: ${({theme: {colors}}) => colors.dark[4]};
    }
    :focus {
      border-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    }
  }
`

export {EpicInput as Input}
