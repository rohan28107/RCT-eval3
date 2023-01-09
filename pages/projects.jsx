import React from 'react'
import ProjectComponent from "../Components/ProjectComponent";
import { SimpleGrid, Heading, Center } from '@chakra-ui/react'


const projects = ({ repoData }) => {
    console.log(repoData);
  return (
    <div>
        <Center><Heading as='h1'>Projects</Heading></Center>
        
        <SimpleGrid columns={[2, null, 4]} spacing='20px' >
            {
            repoData.map((project) => (
                <ProjectComponent key={project.id}
                    id={project.id}
                    full_name={project.full_name}
                    name={project.name}
                    language={project.language}
                    ownerid={project.owner.id}
                    forks={project.forks}
                    proj_url={project.html_url}
                />
                ))}
    </SimpleGrid>
    </div>
  )
}

export default projects

export async function getStaticProps(){
    let res = await fetch(`https://api.github.com/search/repositories?q=user:rohan28107+fork:true&sort=updated&per_page=10&type=Repositories`);
    let data = await res.json();
    return {
      props: {
        repoData: data.items
    }
}
}