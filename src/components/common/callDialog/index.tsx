import React, { useState, useCallback, useEffect, useContext } from 'react'
import { Button } from '../button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { CallButtonContainer } from './callIcon'
import useI18n from '../../../hooks/useI18n'
import { AppContext } from '../../../services/contextManager'

export interface Contact {
    firstName: string
    lastName: string
    email: string
    phone: string
    id: string
}

interface CallDialogProps {
    contact?: Contact
    open: boolean
    handleClose: () => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    })
)

export const CallDialog: React.FC<CallDialogProps> = (props) => {
    const { t } = useI18n()
    const context = useContext(AppContext)
    
    const [title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    
    const auth = context.actions.getAuthDetails();
    const userModel = auth.Model.UserModel;
    const [message, setMessage] = useState(t('contacts.call.body', { firstName: userModel.FirstName }))

    useEffect(()=>{
        setFirstName(props.contact?.firstName?? '');
        setLastName(props.contact?.lastName?? '');
        setEmail(props.contact?.email?? '');
        setPhone(props.contact?.phone?? '');
        const titleName = t('contacts.call.title').replace('contactFirstName', firstName?? '')
        setTitle(titleName)
    }, [firstName, props.contact, t])
   

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }

    const handleMessageChange = (e: any) => {
        setMessage(e.target.value)
    }
    const makeCall = () => {
        const callProps = {
            userDetails: {},
            contactDetails: {},
            title: title,
            message: message,
            containerId: 'container_' + props.contact?.id
        }
        const userDetails = {
            unique_identifier: userModel.ID,
            first_name: userModel.FirstName,
            last_name: userModel.LastName,
            email: userModel.Email
        }
        const contact = {
            name: firstName + ' ' + lastName,
            email: email,
            phone_number: phone
        }
        const contactDetails = []
        contactDetails.push(contact)
        callProps.userDetails = userDetails
        callProps.contactDetails = contactDetails
        //@ts-ignore
        loadMagnifi(callProps)
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{t('contacts.call.start')}</DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                    <InputLabel id="demo-simple-select-label">{t('contacts.call.contactMethod')}</InputLabel>
                    <FormControl>
                        <DialogActions>
                            <Button name={'email'} onClick={() => handleCallType('Email')} type={callType === 'Email' ? 'primary' : 'outline'}>
                                {t('contacts.call.email')}
                            </Button>
                            <Button name={'phone'} onClick={() => handleCallType('Phone')} type={callType === 'Phone' ? 'primary' : 'outline'}>
                                {t('contacts.call.phone')}
                            </Button>
                        </DialogActions>
                    </FormControl>
                </DialogContentText> */}
                <TextField
                    margin="dense"
                    id="title_field"
                    label="Subject"
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={title}
                    disabled
                    onChange={handleTitleChange}
                />
                <TextField
                    margin="dense"
                    id="message_field"
                    label="Body"
                    type="text"
                    variant="outlined"
                    fullWidth
                    multiline
                    value={message}
                    disabled
                    onChange={handleMessageChange}
                />
            </DialogContent>
            <DialogActions>
                <Button name={'cancel'} onClick={props.handleClose} type="outline">
                    {t('contacts.call.cancel')}
                </Button>
                <CallButton onClick={makeCall}></CallButton>
            </DialogActions>
        </Dialog>
    )
}
const CallButton: React.FC<{onClick: () => void }> = ({ ...props }) => {
    return <CallButtonContainer onClick={props.onClick} />
}