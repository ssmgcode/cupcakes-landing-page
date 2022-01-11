import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

interface Props {
  error: any
}

const Error = ({ error }: Props): JSX.Element => {
  console.log(error)
  return (
    <Alert
      status="error"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt="5"
      height="200px"
      borderRadius="lg"
    >
      <AlertIcon boxSize="40px" />
      <AlertTitle mt={4} mg={1} fontSize="lg">
        {error.response?.status === 404
          ? 'No hemos encontrado lo que nos solicitaste'
          : 'Ocurrió un problema, inténtalo de nuevo'}
      </AlertTitle>
    </Alert>
  )
}

export default Error
