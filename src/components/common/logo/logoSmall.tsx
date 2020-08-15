import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
margin: 20px;
padding: 20px;
position: relative;
`
const Logo = styled.img`
    height: 50px;
    width: 125px;
`

export const LogoSmall =()=>(
    <Container>
        <Logo src='/assets/logo.png' />
    </Container>
)
