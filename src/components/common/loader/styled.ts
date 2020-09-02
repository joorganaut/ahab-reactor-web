import styled, { createGlobalStyle, keyframes } from 'styled-components/macro';


export const spin = keyframes`
from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`
export const spin3D = keyframes`
from {
    transform: rotate3d(.5,.5,.5, 360deg);
  }
  to{
    transform: rotate3d(0deg);
  }
`
export const configureClockwise = keyframes`
0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const configureXclockwise = keyframes`
0% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-135deg);
  }
  75% {
    transform: rotate(-225deg);
  }
  100% {
    transform: rotate(-315deg);
  }
`
export const pulse = keyframes`
from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
`

export const GlobalStyle = createGlobalStyle`
`
export const SpinnerContainer = styled.div`
min-height: 100vh;
  background-color: #1d2630;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  position: absolute;
  left: 50%;
`

export const SpinnerBox = styled.div<{show: boolean}>`
display: ${props => props.show ? 'flex' : 'none'};
position: absolute;
width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    
    z-index:5;
    left: 50%;
    right: 0;
    top: 45%;
    bottom: 0;
    background-color: #F5FCFF88;
    opacity: 100%;
`

export const CircleBorder = styled.div`
width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63,249,220);
    background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
    animation: ${spin} .8s linear 0s infinite;
`
export const CircleCore = styled.div`
  width: 100%;
    height: 100%;
    background-color: #1d2630;
    border-radius: 50%;
  `
export const BlueOrbit = styled.div`
width: 165px;
	height: 165px;
  border: 1px solid #91daffa5;
  -webkit-animation: ${spin3D} 3s linear .2s infinite;
  .leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}
`
export const GreenOrbit = styled.div`
width: 120px;
	height: 120px;
  border: 1px solid #91ffbfa5;
  -webkit-animation: ${spin3D} 2s linear 0s infinite;
  .leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}
`
export const RedOrbit = styled.div`
width: 90px;
	height: 90px;
  border: 1px solid #ffca91a5;
  -webkit-animation: ${spin3D} 1s linear 0s infinite;
  .leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}
`
export const WhiteOrbit1 = styled.div`
width: 60px;
	height: 60px;
  border: 2px solid #ffffff;
  -webkit-animation: ${spin3D} 10s linear 0s infinite;
  .w1 {
  transform: rotate3D(1, 1, 1, 90deg);
}
  .leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}
`
export const WhiteOrbit2 = styled.div`
width: 60px;
	height: 60px;
  border: 2px solid #ffffff;
  -webkit-animation: ${spin3D} 10s linear 0s infinite;
  .w2 {
  transform: rotate3D(1, 2, .5, 90deg);
}
  .leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}
`
export const WhiteOrbit3 = styled.div`
width: 60px;
	height: 60px;
  border: 2px solid #ffffff;
  -webkit-animation: ${spin3D} 10s linear 0s infinite;
  .w3 {
  transform: rotate3D(.5, 1, 2, 90deg);
}
  .leo {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}
`
