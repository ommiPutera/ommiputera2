import { ActionIcon, Container } from "@mantine/core";
import { IconMoon, IconSunHigh, IconMenu2 } from "@tabler/icons";
import { Link, Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ROUTES } from "../../routes";
import useMode from "../../hooks/useMode";
import { useNavigation } from "../../store/rootStore";

const BUTTON_MODE_SIZE = "xl";
const ICON_MODE_SIZE = 22;

function Header() {
  return (
    <WrapperHeader>
      <LeftContent>
        <h2>Logo</h2>
      </LeftContent>
      <RightContent>
        <DesktopNav className="desktop__nav">{getRouteArray()}</DesktopNav>
        <ModeButton />
        <NavButton />
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

function DefaultLayout() {
  return (
    <WrapperLayout>
      <Header />
      <DropdownNav />
      <Container size="xl">
        <div className="children">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </WrapperLayout>
  );
}

function ModeButton() {
  const { onHandleMode, mode } = useMode();
  return (
    <ActionIcon
      className="theme__btn btn"
      size={BUTTON_MODE_SIZE}
      radius="xl"
      onClick={onHandleMode}
    >
      {getIconMode(mode)}
    </ActionIcon>
  );
}

function NavButton() {
  const { isOpen, setIsOpen } = useNavigation();
  return (
    <ActionIcon
      className="nav__btn btn"
      size={BUTTON_MODE_SIZE}
      radius="xl"
      onClick={() => setIsOpen(!isOpen)}
    >
      <IconMenu2 className="menu__icon" size={ICON_MODE_SIZE} />
    </ActionIcon>
  );
}

function DropdownNav() {
  const { isOpen } = useNavigation();
  return (
    <WrapperDropdownNav className={`${isOpen ? "open" : "closed"}`}>
      {getRouteArray()}
    </WrapperDropdownNav>
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

function getRouteArray() {
  return (
    <ul>
      {ROUTES.map(({ path, label }) => (
        <li>
          <Link to={path || "/"}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

const WrapperHeader = styled.header`
  display: flex;
  padding: 14px 16px;
  border-bottom: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  .btn {
    background-color: ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[7] : colors.dark[0]};
    :hover {
      background-color: ${({ theme: { colors, mode } }) =>
        mode === "dark" ? colors.dark[8] : colors.dark[2]};
    }
  }

  .theme__btn {
    margin-right: 14px;
    .sun__icon {
      color: ${({ theme: { colors } }) => colors.dark[3]};
    }
    .moon__icon {
      color: ${({ theme: { colors } }) => colors.dark[8]};
    }
  }
  .nav__btn {
    .menu__icon {
      color: ${({ theme: { colors, mode } }) =>
        mode === "dark" ? colors.dark[2] : colors.dark[8]};
    }
  }

  .desktop__nav {
    display: none;
  }

  @media (min-width: 1600px) {
    padding: 18px 72px;

    .nav__btn {
      display: none;
    }
    .desktop__nav {
      display: block;
    }
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

const DesktopNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-right: 14px;

    li {
      margin: 0 24px;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

const growDown = keyframes`
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  
`;

const WrapperDropdownNav = styled.nav`
  position: absolute;
  width: 100%;
  background-color: red;
  /* min-height: 50%; */

  &.open {
    visibility: visible;
  }
  &.closed {
    visibility: hidden;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    animation: ${growDown} 300ms ease-in-out forwards;
    transform-origin: top center;

    li {
      padding: 24px 0;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      border-bottom: 1px solid
        ${({ theme: { colors, mode } }) =>
          mode === "dark" ? colors.dark[8] : colors.dark[2]};
    }
  }
`;

export default DefaultLayout;
