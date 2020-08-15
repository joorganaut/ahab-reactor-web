import React from 'react'
import styled from "styled-components";

// import logo from "../../assets/logo-min.png";

const Brand = () => {
  return (
    <Image src={'/assets/logo.png'} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 40%;
  margin: auto 0;
`;