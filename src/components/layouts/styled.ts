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
  }
  .nav__open {
    filter: blur(2px);
  }

  .bg {
    height: 100vh;
    z-index: -99;
    position: absolute;
  }
`
export const LeftContent = styled.div`
  width: 25%;
  text-align: left;
  display: flex;
  justify-content: start;
`
export const CenterContent = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
`
export const RightContent = styled.div`
  width: 25%;
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
