import { Box, Center, VStack, CircularProgress, Text } from '@chakra-ui/react'

interface Props {
  text?: string
}

const CircularLoader = ({ text }: Props): JSX.Element => (
  <Box marginY="6">
    <Center>
      <VStack>
        <CircularProgress isIndeterminate={true} color="teal" />
        {text && <Text>{text}</Text>}
      </VStack>
    </Center>
  </Box>
)

export default CircularLoader
