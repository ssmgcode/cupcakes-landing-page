import {
  Box,
  Center,
  Text,
  VStack,
  useBoolean,
  Button,
  Link,
} from '@chakra-ui/react'
import { IconWorld } from '@tabler/icons'
import SSMGLogo from '../../SSMGLogo'

const Footer = (): JSX.Element => {
  const [isWebsiteButtonHovered, setIsWebsiteButtonHovered] = useBoolean(false)

  return (
    <Box bg="gray.200" padding="3em" marginTop="2em">
      <Center>
        <VStack>
          <Text color="gray.500">Made with love in 🇬🇹 by</Text>
          <Box height=".5em" />
          <SSMGLogo fill="var(--chakra-colors-gray-500)" size="5em" />
          <Box height=".5em" />
          <Button
            shadow={isWebsiteButtonHovered ? 'lg' : undefined}
            colorScheme="teal"
            leftIcon={<IconWorld />}
            onMouseEnter={setIsWebsiteButtonHovered.on}
            onMouseLeave={setIsWebsiteButtonHovered.off}
          >
            <Link href="https://ssmgcode.dev/" isExternal>
              Website
            </Link>
          </Button>
        </VStack>
      </Center>
    </Box>
  )
}

export default Footer
