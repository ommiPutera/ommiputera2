import type { ButtonProps } from "@mantine/core";
import { Button as MantineButton, ActionIcon } from "@mantine/core";
import styled from "styled-components";

function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

function IconButton(props: ButtonProps) {
  return <StyledIconButton {...props}>{props.children}</StyledIconButton>;
}

const StyledButton = styled(MantineButton)`
  .mantine-Button-inner {
    padding: 0em 0.1em;
  }
  .mantine-Button-label {
    font-size: 0.9em;
    padding: 0.1em;
    margin-bottom: 1px;
  }
`;

const StyledIconButton = styled(ActionIcon)`
  .mantine-Button-inner {
    padding: 0em 0.1em;
  }
  .mantine-Button-label {
    font-size: 0.9em;
    padding: 0.1em;
    margin-bottom: 1px;
  }
`;

export { Button, IconButton };
