import { Heading, SimpleGrid, Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'


const ProjectComponent = ({ id, full_name, name, language, ownerid, forks}) => {


  return (
    <div>
        <Box bg='grey' key={id} padding="30px" > 
            <Heading>{name}</Heading>
            <p>{full_name}</p>
            <Flex >
                <Box >
                    <p>{forks}</p>
                    <p>{ownerid}</p>
                </Box>
                <Spacer />
                <Box >{language}</Box>
            </Flex>           
          </Box>                
    </div>
  )
}

export default ProjectComponent