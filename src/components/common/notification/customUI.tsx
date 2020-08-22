import React from 'react'
import { DialogContainer } from './styled';

export interface DialogNotificationButtonProps {
    label: string;
    onClick: () => void;
}
interface DialogNotificationProps {
    title: string
    message: string
    buttons: Array<DialogNotificationButtonProps>

}
const CustomUI: React.FC<DialogNotificationProps> = ({...prop}) => {

    return <DialogContainer>

    </DialogContainer>
}
export default CustomUI;