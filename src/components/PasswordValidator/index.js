// Write your code here
import {useState} from 'react'
import {
  Container,
  PasswordContainer,
  PasswordInput,
  Heading,
  Text,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showError = password.length < 8

  const onChangPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <Container>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Text>check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangPassword}
        />
        {showError && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordContainer>
    </Container>
  )
}

export default PasswordValidator
