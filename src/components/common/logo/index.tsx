import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div<{width:string}>`
margin: 20px;
padding: 20px;
position: relative;
border: none;
border-width: 2px;
border-radius: 30px;
border-color: ${props=> props.theme.colors.compliment};
width: ${props=> props.width !== undefined ? props.width : '250px' }
`
const Logo = styled.img<{height?: string; width?: string}>`
    height: ${props => props.height !== undefined ? props.height : 'auto'};
    width: ${props => props.width !== undefined ? props.width : 'auto'};
`

export const LogoSmall =()=>(
    <Container width={'125px'}>
        <Logo src='/assets/logo.png'  alt="Company Logo"   height={'50%'} width={'50%'}  />
    </Container>
)

export const LogoMedium =()=>(
    <Container  width={'250px'}>
        <Logo src='/assets/logo.png' alt="Company Logo"  height={'150%'} width={'150%'} />
    </Container>
)

export const LogoLarge =()=>(
    <Container  width={'500px'}>
        <Logo src='/assets/logo.png' alt="Company Logo"  height={'250%'} width={'250%'} />
    </Container>
)
