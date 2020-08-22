import React from 'react'
import styled from "styled-components";

// import logo from "../../assets/logo-min.png";

const Brand = () => {
  return (
    <Container width={'auto'}>
      {/* TODO: remember to uncomment */}
    <Image src={'/assets/logo.png'} alt="Company Logo" />
    </Container>
  )
}

export default Brand
const Container = styled.div<{width:string}>`
margin: 20px;
height: auto;
position: relative;
border: none;
border-width: 2px;
border-radius: 30px;
border-color: ${props=> props.theme.colors.compliment};
background-color: ${props=> props.theme.colors.white};
width: ${props=> props.width !== undefined ? props.width : '250px' }
`
const Image = styled.img`
  height: 50px;
  /* border: solid;
  border-width: 1.5px;
  border-color: ${props=> props.theme.colors.compliment};
  border-radius: 30px */
`;