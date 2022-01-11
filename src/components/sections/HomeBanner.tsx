import { Link } from 'react-router-dom'
import { Box, Center, VStack, Heading, Button } from '@chakra-ui/react'

const HomeBanner = (): JSX.Element => (
  <Box background="teal.500" padding="5">
    <Center>
      <VStack>
        <Heading as="h2" color="white" textAlign="center">
          Bienvenido al sitio más dulce de Internet
        </Heading>
        <Box boxSize="1" />
        <Link to="/cupcakes">
          <Button>Explorar cupcakes</Button>
        </Link>
      </VStack>
    </Center>
  </Box>
)

export default HomeBanner
