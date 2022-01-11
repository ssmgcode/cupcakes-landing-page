import { Link as RouterLink } from 'react-router-dom'
import {
  Flex,
  Link,
  Box,
  Image,
  HStack,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react'
import { IconHome, IconBasket, IconTool } from '@tabler/icons'
import BigNavigationMenu from './BigNavigationMenu'
import SmallNavigationMenu from './SmallNavigationMenu'

interface NavigationMenuOption {
  name: string
  route: string
  icon: JSX.Element
}

export const navigationMenuOptions: NavigationMenuOption[] = [
  {
    name: 'Inicio',
    route: '/',
    icon: <IconHome />,
  },
  {
    name: 'Cupcakes',
    route: '/cupcakes',
    icon: <IconBasket />,
  },
  {
    name: 'Servicios',
    route: '/servicios',
    icon: <IconTool />,
  },
]

const Header = (): JSX.Element => {
  const [isLargeDisplayDevice] = useMediaQuery('(min-width: 768px)')

  return (
    <Box padding="2" marginBottom="1em" paddingTop="1em">
      <Flex justifyContent="space-around" alignItems="center">
        <Link as={RouterLink} to="/">
          <HStack justifyContent="center">
            <Image
              boxSize="75px"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F5%2FCupcake-PNG-File.png&f=1&nofb=1"
              alt="Cupcake"
            />
            <Heading as="h1">Cupcakes</Heading>
          </HStack>
        </Link>
        {isLargeDisplayDevice ? <BigNavigationMenu /> : <SmallNavigationMenu />}
      </Flex>
    </Box>
  )
}

export default Header
