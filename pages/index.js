import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'
import Languages from '../Components/Languages';
import Profile from '../Components/Profile';
import ProjectComponent from "../Components/ProjectComponent";


export default function Home({ rdata, repoData }) {
// console.log(repoData);
// console.log(rdata);

  return (
    <>
      <Head>
        <title>Rohan Github App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div >
        {/*className={styles.main} className={styles.description} */}
          
          <Flex>
            <Box>
              <Profile 
                name={rdata.name} 
                login={rdata.login}
                bio={rdata.bio}
                html_url={rdata.html_url}
                img={rdata.avatar_url}
                followers={rdata.followers}
                following={rdata.following}
                />
                <Languages />
            </Box>
            <Box>
            <SimpleGrid columns={[2, null, 4]} spacing='30px' margin='10px'>
            {
            repoData.map((project) => (
                <ProjectComponent key={project.id}
                    id={project.id}
                    full_name={project.full_name}
                    name={project.name}
                    language={project.language}
                    ownerid={project.owner.id}
                    forks={project.forks}
                />
                ))
    }
    </SimpleGrid>
            </Box>
          </Flex>
        </div>
      </main>
    </>
  )
}


export async function getStaticProps() {
  let res = await fetch(`https://api.github.com/users/rohan28107`);
  let data = await res.json();

  let resrepo = await fetch(`https://api.github.com/search/repositories?q=user:rohan28107+fork:true&sort=updated&per_page=10&type=Repositories`);
  let datarepo = await resrepo.json();
  return {
    props: {
      repoData: datarepo.items,
      rdata: data
    }
  }
}

