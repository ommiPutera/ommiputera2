import styled, {keyframes} from 'styled-components'

// --- Keyframes ---
export const growDown = keyframes`
    0% {
        transform: rotateX(16deg)
    }
    70% {
        transform: rotateX(8deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }
`

// --- Layouts ---
export const WrapperLayout = styled.div`
  .children {
    min-height: 100vh;
    margin: 0;
  }
  .nav__open {
    filter: blur(2px);
  }
`
export const LeftContent = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  justify-content: start;
`
export const RightContent = styled.div`
  width: 50%;
  text-align: right;
  display: flex;
  justify-content: end;
`
export const WrapperDropdownNav = styled.nav`
  width: 100%;
  position: absolute;
  z-index: 9999;

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
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};

      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[9] : colors.dark[0]};
      &:active {
        background-color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};
      }
    }
    li > .close__btn {
      border: 1.5px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[2] : colors.dark[8]};
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[2] : colors.dark[8]};
      border-radius: 36px;
      margin: 0 36px;
      padding: 14px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
`

// --- Header ---
export const WrapperHeader = styled.header`
  padding: 32px 12px;

  > div {
    display: flex;
  }

  .btn {
    &:hover,
    &:active {
      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[1]};
    }
  }

  .theme__btn {
    margin-left: 12px;
    .sun__icon {
      color: ${({theme: {colors}}) => colors.dark[3]};
    }
    .moon__icon {
      color: ${({theme: {colors}}) => colors.dark[8]};
    }
    :active {
      .sun__icon,
      .moon__icon {
        animation: ${growDown} 300ms ease-in-out;
      }
    }
  }
  .nav__btn {
    .menu__icon {
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[2] : colors.dark[8]};
    }
  }

  .desktop__nav {
    display: none;
  }

  @media (min-width: 1400px) {
    padding: 32px 0;

    .nav__btn {
      display: none;
    }
    .desktop__nav {
      display: block;
    }
  }
`
export const Logo = styled.nav`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;

  a {
    font-weight: 700;
    font-size: 24px;
  }
`
export const DesktopNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-left: 72px;

    li {
      margin: 8px 18px 0 18px;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[4] : colors.dark[5]};
      div {
        width: 0;
        height: 3px;
        margin-top: 2px;
        border-radius: 20px;
      }

      :hover,
      &.match {
        color: ${({theme: {colors}}) => colors.danger[9]};
        div {
          transition: 0.2s ease-out;
          width: 100%;
          background-image: linear-gradient(
            to right,
            ${({theme: {colors, mode}}) =>
              mode === 'dark' ? colors.danger[9] : colors.danger[9]},
            ${({theme: {colors, mode}}) =>
              mode === 'dark' ? colors.warning[6] : colors.warning[6]}
          );
        }
      }
    }
  }
`

// --- Footer ---
export const WrapperFooter = styled.footer`
  padding: 32px 12px;
  border-top: 1px solid
    ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[8] : colors.dark[2]};

  > div {
    display: flex;
  }

  .nav__open {
    filter: blur(2px);
  }

  @media (min-width: 1600px) {
    padding: 32px 0;
  }
`
