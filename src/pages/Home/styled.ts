import styled from 'styled-components'

export const WrapperHome = styled.div`
  padding: 42px 0;

  .right {
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
  .left {
    text-align: left;
    width: 100%;
    .heading {
      h1 {
        span {
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

  @media (min-width: 1400px) {
    margin: 0;
    display: flex;

    .right {
      width: 50%;
      img {
        z-index: -2;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    .left {
      width: 50%;
      padding-right: 125px;
      .heading {
        h1 {
          &.sub {
            margin: 28px 0 16px 0;
          }
        }
      }
    }
  }
`
