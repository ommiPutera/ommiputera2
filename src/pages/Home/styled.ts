import styled from 'styled-components'

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0 42px 0;

  .xs__top {
    order: 1;
    text-align: left;
    width: 100%;
    .heading {
      h1 {
        span {
          font-weight: 800;
          background-image: linear-gradient(
            to right,
            ${({theme: {colors, mode}}) =>
              mode === 'dark' ? colors.danger[9] : colors.danger[9]},
            ${({theme: {colors, mode}}) =>
              mode === 'dark' ? colors.warning[6] : colors.warning[6]}
          );
          background-clip: clip;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &.sub {
          margin: 38px 0 12px 0;
        }
      }
    }
  }
  .xs__bottom {
    order: 2;
    width: 100%;
    background: ${({theme: {mode}}) =>
      mode === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 8px;
    img {
      z-index: -2;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 1400px) {
    margin: 0;
    display: flex;
    flex-direction: row;

    .left {
      order: 1;
      width: 65%;
      border-top-left-radius: 14px;
      border-bottom-left-radius: 14px;
      padding: 52px 180px 52px 52px;
      background: ${({theme: {colors, mode}}) =>
        mode === 'dark' ? colors.dark[8] : colors.dark[2]};
      .heading {
        h1 {
          &.sub {
            margin: 42px 0 16px 0;
          }
        }
      }
    }
    .right {
      order: 2;
      width: 35%;
      height: 100%;
      img {
        z-index: -2;
        width: 100%;
        object-fit: cover;
        border-top-right-radius: 14px;
        border-bottom-right-radius: 14px;
      }
    }
  }
`
