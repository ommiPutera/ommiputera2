import {Textarea} from '@mantine/core'
import styled from 'styled-components'
import React from 'react'

interface ITextarea {
  placeholder: string
  size: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode | JSX.Element
  minRows?: 2 | 3 | 4 | 5 | 6
  maxRows?: 6 | 7 | 8 | 9
}

function EpicTextarea({placeholder, minRows, maxRows, ...rest}: ITextarea) {
  return (
    <WrapperTextarea>
      <Textarea
        placeholder={placeholder}
        minRows={minRows}
        maxRows={maxRows}
        {...rest}
      />
    </WrapperTextarea>
  )
}

const WrapperTextarea = styled.div`
  .mantine-Textarea-wrapper {
    margin: 16px 0;
    width: 100%;
  }
  .mantine-Textarea-input {
    border: none;
    padding-bottom: 4px;
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[0] : colors.dark[9]};
    background: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[7] : colors.dark[2]};
  }
`

export {EpicTextarea as Textarea}
