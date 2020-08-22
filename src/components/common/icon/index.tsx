import React from 'react';
import styled from 'styled-components/macro';

const Image = styled.img`
    height: 20px;
    width: 20px;
`

export const Icon : React.FC<{type: string}> = ({type}) => {
    return(<>
        <Image src={`/icons/gb/${type}.svg`}/>
    </>)
}