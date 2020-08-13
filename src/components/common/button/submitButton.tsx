import React, {FC} from 'react';
import styled from 'styled-components/macro';

interface ButtonProps{
    action: ()=>{}
}
const Button = styled.button`
    
    `
export const SubmitButton : FC<ButtonProps> = ({...props}) => {
    return(
        <Button onClick={props.action}>Submit</Button>
    )
}