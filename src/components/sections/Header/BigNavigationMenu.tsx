import { Link as RouterLink } from 'react-router-dom'
import { HStack, Link } from '@chakra-ui/react'
import { navigationMenuOptions } from './Header'

const BigNavigationMenu = (): JSX.Element => (
  <HStack spacing={7}>
    {navigationMenuOptions.map(({ name, route, icon }) => (
      <Link
        as={RouterLink}
        to={route}
        display="flex"
        flexDirection="column"
        alignItems="center"
        key={route}
      >
        {icon}
        {name}
      </Link>
    ))}
  </HStack>
)

export default BigNavigationMenu
