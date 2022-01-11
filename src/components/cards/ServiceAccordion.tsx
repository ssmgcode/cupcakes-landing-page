import {
  AccordionItem,
  AccordionButton,
  Heading,
  Box,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Service } from '../../models/Service'

const ServiceAccordion = ({ name, description }: Service): JSX.Element => {
  return (
    <AccordionItem>
      <Heading>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel pb={4}>{description}</AccordionPanel>
    </AccordionItem>
  )
}

export default ServiceAccordion
