import { Box, Image } from '@chakra-ui/react'
import { Cupcake } from '../../models/Cupcake'

const CupcakeCard = ({
  picturePath,
  description,
  flavor,
  color,
  price,
}: Cupcake): JSX.Element => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      justifySelf="stretch"
    >
      <Box>
        <Image
          src={picturePath}
          alt={description}
          maxHeight="15em"
          width="100%"
          objectFit="cover"
        />
      </Box>

      <Box p="6">
        <Box as="h4" fontWeight="semibold">
          {description}
        </Box>

        <Box>Q{price}</Box>

        <Box color="gray.600" fontSize="sm">
          Sabor: {flavor}
        </Box>

        <Box color="gray.600" fontSize="sm">
          Color: {color}
        </Box>
      </Box>
    </Box>
  )
}

export default CupcakeCard
