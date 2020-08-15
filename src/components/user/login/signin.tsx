import React, { useState } from 'react'

import { Button } from '../../../components/common/button/button'
import Input from '../../../components/common/input/'
import { Form, FormContainer, FormSection, Error } from '../../../components/common/container/'

export const SignInForm = () => {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormSection>
          <Input type="email" label={'auth.labels.email'} value={email} onTextChange={updateEmail} />
        </FormSection>
        <FormSection>
          <Input type="password" label={'auth.labels.password'} value={password} onTextChange={updatePassword} />
        </FormSection>
        <FormSection>
          <Button type="primary" submit>
            {'auth.signIn'}
          </Button>
        </FormSection>
      </Form>
    </FormContainer>
  )
}
