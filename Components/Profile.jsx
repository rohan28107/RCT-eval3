import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import Link from 'next/link';
  import React from 'react'
  
  export default function Profile({ name, followers, following,  login, bio, html_url, img }) {
    console.log(img);
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
        //   bg={useColorModeValue('white', 'gray.800')}
          bg='#5d6575'
          boxShadow={'2xl'}
          border={'1px solid grey'}
          rounded={'md'}
          overflow={'hidden'}>
          <Flex justify={'center'} mt={-12}>
            <Image
              size={'xl'}
              src={img}
              borderRadius='full'
              boxSize='100px'
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {name}
              </Heading>
            </Stack>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {login}
              </Heading>
              <Text color={'gray.500'}>{bio}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{following}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                    Following
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{followers}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
            </Stack>
              
              <Stack direction={'row'} justify={'center'} spacing={6} height={'30px'} >
                    <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        <Link href={html_url}>Follow</Link>
                        </Button>
                        <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        <Link href={'https://drive.google.com/file/d/1dW4RpRe9nvD8pbw7erbV9NUjNx1O0S-Z/view?usp=share_link'}>Resume</Link>
                    </Button>
              </Stack>
            
          </Box>
        </Box>
      </Center>
    );
  }