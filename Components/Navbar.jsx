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
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} height='50px' box-shadow='rgba(149, 157, 165, 0.2) 0px 8px 24px' backgroundColor="grey" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

            <Box justifyContent={'space-between'} gap='20px' width="40%">
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/experience'>Experience</Link>
            </Box>
        <Box>
        <Flex alignItems={'center'} >
            <Stack direction={'row'} spacing={10} width="90px" height="50px" > 
            {/* height={30} */}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                //   rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    margin="auto"
                    src='https://avatars.githubusercontent.com/u/112626910?v=4'
                  />
                </MenuButton>
                <MenuList alignItems={'center'} backgroundColor='grey' >
                  <br />
                  <Center>
                    <Image
                    //   size={'sm'}
                        width='200px'
                        height='250px'
                      src='https://avatars.githubusercontent.com/u/112626910?v=4'
                      alt="Rohan"
                    />
                  </Center>
                  {/* <br /> */}
                  <Center>
                    <p>rohan28107</p>
                  </Center>
                  {/* <br /> */}
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

