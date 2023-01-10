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
