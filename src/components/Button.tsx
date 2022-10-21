import type { ButtonProps } from "@mantine/core";
import { Button as MantineButton } from "@mantine/core";
// import styled from "styled-components";

function Button(props: ButtonProps) {
  return <MantineButton {...props}>{props.children}</MantineButton>;
}

// const OutlineButton = styled(MantineButton)`
//   .mantine-Button-root {
//     color: ${(props) => props.theme.colors.blue_400};
//     border: 1px solid ${(props) => props.theme.colors.blue_400};
//   }
//   .mantine-Button-label {
//     padding: 1px 0px;
//   }
// `;

export default Button;
