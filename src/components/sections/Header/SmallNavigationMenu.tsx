import { Link as RouterLink } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Link,
  MenuItem,
} from '@chakra-ui/react'
import { IconDotsCircleHorizontal } from '@tabler/icons'
import { navigationMenuOptions } from './Header'

const SmallNavigationMenu = (): JSX.Element => (
  <Menu>
    <MenuButton
      as={IconButton}
      icon={<IconDotsCircleHorizontal />}
      aria-label="Open menu"
      variant="outline"
      boxSize="3em"
    >
      Actions
    </MenuButton>
    <MenuList>
      {navigationMenuOptions.map(({ name, route, icon }) => (
        <Link key={route} as={RouterLink} to={route} textDecoration="none">
          <MenuItem icon={icon}>{name}</MenuItem>
        </Link>
      ))}
    </MenuList>
  </Menu>
)

export default SmallNavigationMenu
