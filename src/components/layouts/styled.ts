import styled, {keyframes} from 'styled-components'

// --- Keyframes ---
export const growDown = keyframes`
    0% {
        transform: rotateX(30deg)
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
    overflow: hidden;
    display: none;
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
  height: max-content;
  max-height: 100vh;
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
    background: red;
    overflow: scroll;
    animation: ${growDown} 400ms linear;
    transform-origin: top center;

    li {
      padding: 32px 16px;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[4] : colors.dark[4]};
      border-bottom: 1px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};

      background-color: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[9] : colors.dark[1]};
      &:active {
        background-color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[8] : colors.dark[2]};
      }

      &.match {
        color: ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[0] : colors.dark[9]};
      }
    }
  }
  .close__btn {
    padding: 32px 0;
    color: ${({theme: {colors, mode}}) =>
      mode === 'dark' ? colors.dark[2] : colors.dark[8]};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
      border: 1px solid
        ${({theme: {colors, mode}}) =>
          mode === 'dark' ? colors.dark[2] : colors.dark[8]};
      border-radius: 50px;
      position: absolute;
      content: '';
      width: 70%;
      height: 60%;
      background: none;
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
