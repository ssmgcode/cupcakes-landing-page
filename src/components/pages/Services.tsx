import {
  Alert,
  CircularProgress,
  AlertIcon,
  Box,
  Heading,
  AlertTitle,
  Accordion,
  Center,
  Text,
  VStack,
} from '@chakra-ui/react'
import useFetch from '../../hooks/useFetch'
import { Service } from '../../models/Service'
import ServiceAccordion from '../cards/ServiceAccordion'
import CircularLoader from '../sections/CircularLoader'
import Error from '../sections/Error'

const Services = (): JSX.Element => {
  const [services, isDataLoading, error] = useFetch<Service[]>({
    endpoint: 'services',
  })

  return (
    <Box paddingY="6" paddingX="10">
      <Heading marginBottom="5">Servicios</Heading>

      {error ? (
        <Error error={error} />
      ) : isDataLoading ? (
        <CircularLoader text="Cargando servicios" />
      ) : !services || services.length === 0 ? (
        <Alert status="warning">
          <AlertIcon />
          No hay servicios disponibles
        </Alert>
      ) : (
        <Accordion defaultIndex={[0]} allowMultiple allowToggle>
          {services.map((service) => (
            <ServiceAccordion key={service.id} {...service} />
          ))}
        </Accordion>
      )}
    </Box>
  )
}

export default Services
