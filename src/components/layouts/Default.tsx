import styled from "styled-components";
import { ActionIcon } from "@mantine/core";
import { IconMoon, IconSunHigh } from "@tabler/icons";
import useMode from "../../hooks/useMode";

interface ILayoutProps {
  children: React.ReactNode;
}

const BUTTON_MODE_SIZE = "xl";
const ICON_MODE_SIZE = 22;

function Header() {
  return (
    <WrapperHeader>
      <LeftContent>
        <h2>Logo</h2>
      </LeftContent>
      <RightContent>
        <ModeButton />
      </RightContent>
    </WrapperHeader>
  );
}

function Footer() {
  return (
    <WrapperFooter>
      <LeftContent>
        <span>Logo</span>
      </LeftContent>
      <RightContent>
        <span>Logo</span>
      </RightContent>
    </WrapperFooter>
  );
}

function DefaultLayout({ children }: ILayoutProps) {
  return (
    <WrapperLayout>
      <Header />
      <div className="children">{children}</div>
      <Footer />
    </WrapperLayout>
  );
}

function ModeButton() {
  const { onHandleMode, mode } = useMode();
  return (
    <ActionIcon
      className="theme__btn"
      size={BUTTON_MODE_SIZE}
      radius="xl"
      color="warning"
      onClick={onHandleMode}
    >
      {getIconMode(mode)}
    </ActionIcon>
  );
}

function getIconMode(mode: string) {
  switch (mode) {
    case "dark":
      return <IconSunHigh className="sun__icon" size={ICON_MODE_SIZE} />;
    case "light":
      return <IconMoon className="moon__icon" size={ICON_MODE_SIZE} />;
    default:
  }
}

const WrapperHeader = styled.header`
  display: flex;
  padding: 14px 16px;
  border-bottom: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  .theme__btn {
    background-color: ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[7] : colors.dark[0]};
    :hover {
      background-color: ${({ theme: { colors, mode } }) =>
        mode === "dark" ? colors.dark[8] : colors.dark[2]};
    }

    .sun__icon {
      color: ${({ theme: { colors } }) => colors.dark[3]};
    }
    .moon__icon {
      color: ${({ theme: { colors } }) => colors.dark[8]};
    }
  }

  @media (min-width: 1600px) {
    padding: 18px 72px;
  }
`;

const WrapperFooter = styled.footer`
  display: flex;
  padding: 14px 16px;
  margin-bottom: 24px;
  border-top: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  @media (min-width: 1600px) {
    padding: 24px 72px;
  }
`;

const WrapperLayout = styled.div`
  .children {
    min-height: 100vh;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const RightContent = styled.div`
  width: 50%;
  text-align: right;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export default DefaultLayout;
