import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export interface DialogNotificationButtonProps {
    label: string;
    onClick: () => void;
}
const DialogNotification = (
    title: string,
    message: string,
    buttons: Array<DialogNotificationButtonProps>,
    custom: boolean = false,
    type: 'info' | 'success' | 'error'
) => {
    const imageParser = (type: string) => {
        switch (type) {
            case 'info':
                return <img src={'/icons/gb/info.svg'} alt={'notification_info'} />
            case 'error':
                return <img src={'/icons/gb/cancel.svg'} alt={'notification_error'} />
            case 'success':
                return <img src={'/icons/gb/checkmark.svg'} alt={'notification_success'} />
            default:
                return <img src={'/icons/gb/info.svg'} alt={'notification_info'} />
        }
    }
    if (custom) {
        return (confirmAlert({
            customUI: ({ onClose }) => {
                return (<>
                    <div className={'custom-ui'}>
                        <h1>{title}</h1>
                        {imageParser(type)}
                        <p>{message}</p>
                        {buttons.map((x: DialogNotificationButtonProps) => {
                            return <button onClick={(e: any) => { x.onClick(); onClose() }}>{x.label}</button>
                        })}
                    </div>
                </>);
            }
        }))
    }
    return (
        confirmAlert({
            title: title,
            message: message,
            buttons: buttons,
        })
    )
}

export default DialogNotification;

