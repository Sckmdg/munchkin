import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

const SignupForm = () => (
  <Segment inverted>
    <Form inverted loading={false}>
      <Form.Field>
        <Form.Input label='Username' placeholder='Username' error={false} />
      </Form.Field>
      <Form.Field>
        <Form.Input label='Nickname' placeholder='Nickname' error />
      </Form.Field>
      <Form.Field>
        <Form.Input label='Password' placeholder='Password' error />
      </Form.Field>
      <Form.Field>
        <Form.Input label='Password confirmation' placeholder='Password confirmation' error />
      </Form.Field>
      <Button type='submit'>Signup</Button>
    </Form>
  </Segment>
)

export default SignupForm
