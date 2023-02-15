import {Textarea} from '@mantine/core'
import styled from 'styled-components'
import React from 'react'

interface ITextarea {
  placeholder: string
  size: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode | JSX.Element
  errors?: string
  minRows?: 2 | 3 | 4 | 5 | 6
  maxRows?: 6 | 7 | 8 | 9
}

type Ref = HTMLTextAreaElement

const EpicTextarea = React.forwardRef<Ref, ITextarea>(
  ({placeholder, minRows, maxRows, errors, ...rest}, ref) => {
    return (
      <WrapperTextarea>
        <Textarea
          ref={ref}
          radius="md"
          placeholder={placeholder}
          minRows={minRows}
          maxRows={maxRows}
          error={errors}
          {...rest}
        />
      </WrapperTextarea>
    )
  },
)

const WrapperTextarea = styled.div`
  .mantine-InputWrapper-root {
    margin: 16px 0;
  }
  .mantine-Textarea-wrapper {
    width: 100%;
  }
  .mantine-Textarea-error {
    font-size: 13.5px;
  }
  .mantine-Textarea-input {
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

export {EpicTextarea as Textarea}
