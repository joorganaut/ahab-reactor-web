import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div<{width:string}>`
margin: 20px;
padding: 20px;
position: relative;
border: solid;
border-width: 2px;
border-radius: 30px;
border-color: ${props=> props.theme.colors.compliment};
width: ${props=> props.width !== undefined ? props.width : '250px' }
`
const Logo = styled.img<{height?: string; width?: string}>`
    height: ${props => props.height !== undefined ? props.height : '50px'};
    width: ${props => props.width !== undefined ? props.width : '125px'};
`

export const LogoSmall =()=>(
    <Container width={'125px'}>
        <Logo src='/assets/logo.png'  alt="Company Logo"  />
    </Container>
)

export const LogoMedium =()=>(
    <Container  width={'250px'}>
        <Logo src='/assets/logo.png' alt="Company Logo"  height={'100px'} width={'250px'} />
    </Container>
)

export const LogoLarge =()=>(
    <Container  width={'500px'}>
        <Logo src='/assets/logo.png' alt="Company Logo"  height={'200px'} width={'500px'} />
    </Container>
)
