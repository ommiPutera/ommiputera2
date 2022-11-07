import clsx from "clsx";
import React from "react";
import styled from "styled-components";
import { useNavigation } from "../../store/rootStore";
import { LeftContent, RightContent } from ".";

function Footer() {
  const { isOpen } = useNavigation();
  return (
    <WrapperFooter className={clsx(isOpen ? "nav__open" : "")}>
      <LeftContent>
        <span>Logo</span>
      </LeftContent>
      <RightContent>
        <span>Logo</span>
      </RightContent>
    </WrapperFooter>
  );
}

const WrapperFooter = styled.footer`
  display: flex;
  padding: 14px 16px;
  margin-bottom: 24px;
  border-top: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  .nav__open {
    filter: blur(2px);
  }

  @media (min-width: 1600px) {
    padding: 24px 72px;
  }
`;

export default Footer;
