import {Input} from '@mantine/core'
import styled from 'styled-components'
import React from 'react'

interface IInput {
  placeholder: string
  size: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode | JSX.Element
  multiline?: boolean
  type?: 'email'
}

function EpicInput({placeholder, type, multiline, ...rest}: IInput) {
  return (
    <WrapperInput>
      <Input placeholder={placeholder} type={type} multiline {...rest} />
    </WrapperInput>
  )
}

const WrapperInput = styled.div`
  .mantine-Input-wrapper {
    margin: 16px 0;
    width: 100%;
  }
  .mantine-Input-input {
    border: none;
    padding-bottom: 4px;
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    background: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[7] : colors.dark[2]};
  }
`

export {EpicInput as Input}
