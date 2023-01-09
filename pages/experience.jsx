import { Box, Center, Container, Heading, ListItem, Spacer, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const experience = () => {
  return (
    <div>
      <Center>
        <Heading as='h1'>Experience & Education </Heading>
      </Center>
      

      <Container>
        <Heading as='h2'>Experience</Heading>
        <Box>
          <Heading as='h3'>AWS Administrator</Heading>
          <Heading as='h4'>Tata Consultancy Services</Heading>
          <Text>Dec 2019 – Jul 2022 | Mumbai, Maharashtra</Text>

          <UnorderedList>
              <ListItem>Enhanced availability of infrastructure through enterprise-wide planning, thorough testing, and efficient implementation.</ListItem>
              <ListItem>•Created different AWS workspace images</ListItem>
              <ListItem>•Added/removed users from AWS workspace groups</ListItem>
          </UnorderedList>    
          <Heading as='h5'>Skills Learnt: Diagnosed, Maintained</Heading>
        </Box>
      </Container>
      <Spacer />
      <hr />
      <Spacer />
      <Container>
        <Heading as='h2'>Education</Heading>
        <Box>
          <Heading as='h3'>Full Stack Web Development(Full-Time)</Heading>
          <Heading as='h4'>Masai School</Heading>
          <Text>Aug 2022 – Mar 2023</Text>
        </Box>
        <Box>
          <Heading as='h3'>Bachelors in Information Technology</Heading>
          <Heading as='h4'>Mumbai University</Heading>
          <Text>Aug 2016 – May 2019</Text>
        </Box>
      </Container>
    </div>
  )
}

export default experience