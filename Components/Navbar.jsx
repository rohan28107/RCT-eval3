// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//         <Link href='/'>Home</Link>
//         <Link href='/projects'>Projects</Link>
//         <Link href='/experience'>Experience</Link>
//     </div>
//   )
// }

// export default Navbar

import { ReactNode } from 'react';
import Link from 'next/link'
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} height='50px' box-shadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' backgroundColor="grey" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
        {/* <Box  justifyContent={'space-between'} display="flex" margin='20px'>
            <Box>
                <Link href='/'>Home</Link>
            </Box>
            <Box>
                <Link href='/projects'>Projects</Link>
            </Box>
            <Box>
                <Link href='/experience'>Experience</Link>
            </Box>
        </Box> */}

            <Box justifyContent={'space-between'} gap='20px' width="40%">
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/experience'>Experience</Link>
            </Box>
        <Box>
        <Flex alignItems={'center'} width="80px">
            <Stack direction={'row'} spacing={10} > 
            {/* height={30} */}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><Link href='/projects'>Projects</Link></MenuItem>
                  <MenuItem> <Link href='/experience'>Experience</Link></MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Box>
          
        </Flex>
      </Box>
    </>
  );
}