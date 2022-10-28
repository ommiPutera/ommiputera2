import { ActionIcon, Container } from "@mantine/core";
import {
  IconMoon,
  IconSunHigh,
  IconMenu2,
  IconArrowBack,
  IconX,
} from "@tabler/icons";
import { Link, Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ROUTES } from "../../routes";
import useMode from "../../hooks/useMode";
import { useNavigation } from "../../store/rootStore";

const BUTTON_MODE_SIZE = "xl";
const ICON_SIZE = 22;

function Header() {
  return (
    <WrapperHeader>
      <LeftContent>
        <Logo>
          <Link to="/">&#x1F981; Ommi Putera</Link>
        </Logo>
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
      {isOpen ? (
        <IconX className="menu__icon" size={ICON_SIZE} />
      ) : (
        <IconMenu2 className="menu__icon" size={ICON_SIZE} />
      )}
    </ActionIcon>
  );
}

function DropdownNav() {
  const { isOpen, setIsOpen } = useNavigation();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <WrapperDropdownNav className={`${isOpen ? "open" : "closed"}`}>
      {getRouteArray(handleClick, true)}
    </WrapperDropdownNav>
  );
}

function getIcon(type: string) {
  switch (type) {
    case "x":
      return <IconArrowBack className="close__icon" size={ICON_SIZE} />;
    default:
  }
}

function getIconMode(mode: string) {
  switch (mode) {
    case "dark":
      return <IconSunHigh className="sun__icon" size={ICON_SIZE} />;
    case "light":
      return <IconMoon className="moon__icon" size={ICON_SIZE} />;
    default:
  }
}

function getRouteArray(handleClick?: () => void, withCloseBtn?: boolean) {
  return (
    <ul>
      {ROUTES.map(({ path, label }) => (
        <Link key={path} to={path || "/"} onClick={handleClick}>
          <li>{label}</li>
        </Link>
      ))}
      {withCloseBtn && (
        <li onClick={handleClick}>
          <div className="close__btn">{getIcon("x")} Back to content</div>
        </li>
      )}
    </ul>
  );
}

const growDown = keyframes`
    0% {
        transform: rotateX(16deg)
    }
    70% {
        transform: rotateX(8deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }
  
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: 0 8px;
  border-radius: 24px;
  background-color: ${({ theme: { colors, mode } }) =>
    mode === "dark" ? colors.dark[9] : "#fff"};

  a {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.4px;
    font-family: "Space Grotesk", sans-serif;
  }
`;

const WrapperHeader = styled.header`
  display: flex;
  padding: 14px 16px;
  border-bottom: 1px solid
    ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[8] : colors.dark[2]};

  .btn {
    background-color: ${({ theme: { colors, mode } }) =>
      mode === "dark" ? colors.dark[7] : colors.dark[0]};
    &:hover,
    &:active {
      background-color: ${({ theme: { colors, mode } }) =>
        mode === "dark" ? colors.dark[8] : colors.dark[2]};
    }
  }

  .theme__btn {
    margin-right: 8px;
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
    padding: 10px 72px;

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
      margin: 0 14px;
      font-size: 14.5px;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

const WrapperDropdownNav = styled.nav`
  position: absolute;
  width: 100%;

  &.open {
    display: block;
  }
  &.closed {
    display: none;
  }

  ul {
    width: 100%;
    max-height: 100vh;
    overflow: scroll;
    animation: ${growDown} 200ms ease;
    transform-origin: top center;

    li {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      border-bottom: 1px solid
        ${({ theme: { colors, mode } }) =>
          mode === "dark" ? colors.dark[8] : colors.dark[2]};

      background-color: ${({ theme: { colors, mode } }) =>
        mode === "dark" ? colors.dark[9] : colors.dark[0]};
      &:active {
        background-color: ${({ theme: { colors, mode } }) =>
          mode === "dark" ? colors.dark[8] : colors.dark[2]};
      }
    }
    li > .close__btn {
      border: 1.5px solid
        ${({ theme: { colors, mode } }) =>
          mode === "dark" ? colors.dark[2] : colors.dark[8]};
      color: ${({ theme: { colors, mode } }) =>
        mode === "dark" ? colors.dark[2] : colors.dark[8]};
      border-radius: 36px;
      margin: 0 36px;
      padding: 14px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
`;

export default DefaultLayout;
