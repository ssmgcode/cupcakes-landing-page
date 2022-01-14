import { SimpleGrid, Heading, Box, Alert, AlertIcon } from '@chakra-ui/react'
import { Cupcake } from '../../models/Cupcake'
import CupcakeCard from '../cards/CupcakeCard'
import useFetch from '../../hooks/useFetch'
import CircularLoader from '../sections/CircularLoader'
import Error from '../sections/Error'

interface Props {
  title?: boolean
  isAtHome?: boolean
}

const Cupcakes = ({ title, isAtHome }: Props): JSX.Element => {
  const [receivedCupcakes, isDataLoading, error] = useFetch<Cupcake[]>({
    endpoint: 'cupcakes',
  })

  const cupcakes = isAtHome ? receivedCupcakes?.slice(0, 2) : receivedCupcakes

  return (
    <Box paddingY="6" paddingX="10">
      {title && <Heading marginBottom="5">Nuestros cupcakes</Heading>}

      {error ? (
        <Error error={error} />
      ) : isDataLoading ? (
        <CircularLoader text="Cargando cupcakes" />
      ) : !cupcakes || cupcakes.length === 0 ? (
        <Alert status="warning">
          <AlertIcon />
          No hay cupcakes a la venta :(
        </Alert>
      ) : (
        <SimpleGrid minChildWidth="250px" spacing="40px">
          {cupcakes?.map((cupcake: Cupcake) => (
            <CupcakeCard key={cupcake.id} {...cupcake} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default Cupcakes
