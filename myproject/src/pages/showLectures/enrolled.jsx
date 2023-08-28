import { Grid, GridItem } from '@chakra-ui/react'
import { Heading,Box,Flex,Image,Text,Button,Link ,UnorderedList,ListItem} from "@chakra-ui/react";
import { FaUnderline } from "react-icons/fa";

export default function EnrolledCourses(){
    return (
        <>

<Heading mt="20px" textDecoration="underline">Live Classes</Heading>
        <Box ml="20px"
        width="35%"
        p="10px" 
        mt="10px"
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
            {/* <Text>Physics Class Live from 09:00-09:45 am </Text>
            <Text>Chemistry Class Live from 10:00-10:45 am </Text>
            <Text>Maths Class Live from 11:00-11:45 am </Text> */}

            <UnorderedList mt="10px">
              <ListItem >Physics Class Live from 09:00-09:45 am <Text as="span" color="blue" ml="3px" textDecoration="underline">Lecture link</Text></ListItem>

              <ListItem >Chemistry Class Live from 10:00-10:45 am <Text as="span" color="blue" ml="3px" textDecoration="underline">Lecture link</Text></ListItem>


              <ListItem >Maths Class Live from 11:00-11:45 am <Text as="span" color="blue" ml="3px" textDecoration="underline">Lecture link</Text></ListItem>
           
           </UnorderedList>
        </Box>









        <Heading mt="35px" textDecoration="underline">Recorded Lectures</Heading>





        {/* ---------------------maths sections -----------------------*/}
        <Heading mt="25px" ml="20px">Maths</Heading>
        <Box ml="20px">
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt="20px">
      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>permutations </Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> Ramanujan</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>




      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Trigonometry</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> Ramanujan</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>



      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Probability</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> Ramanujan</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>


      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}> Algebra </Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> Ramanujan</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>

     </Grid>
    
      

     <Button color="red" bg="black" ml="45%" mt="10px" mb="10px">See More ></Button>
       </Box>






        {/* ---------------------physics sections -----------------------*/}
        <Heading mt="25px" ml="20px" textDecoration="underline">Physics</Heading>
        <Box ml="20px">
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt="10px">
      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Gravitation</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>Abdul.K</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>




      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Electric Charge</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>Abdul.K</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>



      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Sound Waves</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>Abdul.K</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>


      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}> Coulombs Law </Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>Abdul.K</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>

     </Grid>
    
      

     <Button color="white" bg="black" ml="45%" mt="10px" mb="10px">See More ></Button>
       </Box>





  {/* ---------------------Chemistry sections -----------------------*/}
  <Heading mt="25px" ml="20px" textDecoration="underline">Chemistry</Heading>
        <Box ml="20px">
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt="10px">
      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Atomic Structure</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>C. N. R. Rao</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>




      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Hydrocarbon</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>C. N. R. Rao</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>



      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}>Mole Concept</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>C. N. R. Rao</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>


      <Box  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box >
                 
                     <Heading as="h3" ml={5}> Electrochemistry </Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text>C. N. R. Rao</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
         </Box>

     </Grid>
    
      

     <Button color="green" bg="black" ml="45%" mt="10px" mb="10px">See More ></Button>
       </Box>







    
        </>
    )
}