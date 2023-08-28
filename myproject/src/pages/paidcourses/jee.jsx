import { Heading,Box, Flex,Text,Icon,Image,Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { FaUserGraduate,FaUserCog} from "react-icons/fa";
import {AiOutlinePlayCircle} from "react-icons/ai";
import { useNavigate } from "react-router-dom"
export default function JeeBook(){
    const navigate=useNavigate()
    const handleEnroll=()=>{
        
            navigate("/jeeEnroll")
         
    }
    return (
        <>
 <Heading as="h1" fontSize="50px">IIT Jee</Heading>

<Heading mt={10}>Our Pride</Heading>
 <Flex mt={2}>
  <Box  p={2} borderRadius="5px"
  boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
  >
    <Box display="flex">
        <Box>
        <Icon as={FaUserGraduate} boxSize={20} />
        </Box>

        <Box ml={5} mt={1}> 
   <Heading>1300+</Heading>
     <Text ml={2}>IITians</Text>
        </Box>
        
    </Box>
  </Box>

  <Box  p={2} borderRadius="5px" ml={50}
  boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
  >
    <Box display="flex">
        <Box>
        <Icon as={FaUserCog} boxSize={20} />
        </Box>

        <Box ml={5} mt={1}> 
   <Heading>11,000+</Heading>
     <Text ml={2}>Engineers</Text>
        </Box>
        
    </Box>
  </Box>

 </Flex>

{/* ---------------------section2 -----------------------------------*/}

<Flex>
<Box width="60%" mt={5} >
    <Text m={2}>Welcome to our online teaching platform that provides comprehensive and effective teaching for IIT JEE aspirants all across India. We have the best teachers and professional experts who use video lectures and live classes online to provide personalized learning experience to our students.</Text>
    <Text m={2}>IITJEE is a national-level engineering entrance examination conducted for admission into various IITs and other prestigious engineering institutions in India. Our teaching methodology is designed to cover the entire syllabus comprehensively and provide study materials and mock tests for effective preparation.</Text>
    <Text m={2}> 
    We take pride in our ability to deliver the best results for IIT JEE. Our track record demonstrates our commitment to providing quality education to all our students. We believe in personalized learning and provide a platform for interactive learning through live classes online to clear any doubts or queries.
    </Text>
</Box>
<Box width="40%" mt={5} ml={2}>
    <Image src="https://cache.careers360.mobi/media/article_images/2021/11/23/IIT-Delhi-Roorkee-Kharagpur-Bombay-placement-featured-image.jpg"

    width="100%"
    ></Image>
</Box>


</Flex>

{/* -----------------------sections recorded and live info--------------------------- */}

<Flex mb={10}>

<Box mt={10}  borderRadius="5px" pl="10px" pr="10px"
boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
>
<Heading textAlign="center" mt={2}>Pre-Recorded Lectures (VOD)</Heading>
<Box display="flex" >

<Box display="flex"  marginTop="62px">
    <Box>
        <Heading textAlign="center">Class 11</Heading>
        <Table variant='simple'  border="1px" mt={3}>
      <Tbody>
        <Tr>
          <Td>Physics</Td>
          <Td>417 Recorded videos</Td>
        </Tr>
        <Tr>
          <Td>Chemistry</Td>
          <Td>401 Recorded videos</Td>
        </Tr>
        <Tr>
          <Td borderBottom="1px" borderColor="black">Maths</Td>
          <Td borderBottom="1px" borderColor="black">376 Recorded videos</Td>
        </Tr>
      </Tbody>
    </Table>
    </Box>


    <Box ml={10}>
        <Heading textAlign="center">Class 12</Heading>
        <Table variant='simple'  border="1px"  mt={3}>
   
      <Tbody>
        <Tr>
          <Td>Physics</Td>
          <Td>487 Recorded videos</Td>
        </Tr>
        <Tr>
          <Td>Chemistry</Td>
          <Td>451 Recorded videos</Td>
        </Tr>
        <Tr>
          <Td borderBottom="1px" borderColor="black">Maths</Td>
          <Td borderBottom="1px" borderColor="black">396 Recorded videos</Td>
        </Tr>
      </Tbody>
    </Table>

    </Box>
</Box>
</Box>
<Button width="200px" bg="black" color="white" mt={3} mb={3} ml="32%" ><Icon as={AiOutlinePlayCircle} mt="3px" mr="5px"/>Subcribe </Button>
</Box>









<Box mt={10} ml={5} borderRadius="5px" pl="10px" pr="10px" 
boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
>
<Heading textAlign="center">Live Classes +</Heading>
<Heading textAlign="center">Pre-Recorded Lectures</Heading>
<Box display="flex">

<Box display="flex"mt={5}>
    <Box>
        <Heading textAlign="center">Class 11</Heading>
        <Table variant='simple'  border="1px"  mt={3}>
      <Tbody>
        <Tr>
          <Td>Physics</Td>
          <Td>6:00-6:45 pm</Td>
        </Tr>
        <Tr>
          <Td>Chemistry</Td>
          <Td>7:00-7:45 pm</Td>
        </Tr>
        <Tr>
          <Td borderBottom="1px" borderColor="black">Maths</Td>
          <Td borderBottom="1px" borderColor="black">8:00-8:45 pm</Td>
        </Tr>
      </Tbody>
    </Table>
    </Box>


    <Box ml={10}>
        <Heading textAlign="center">Class 12</Heading>
        <Table   border="1px"  mt={3}>
   
      <Tbody>
        <Tr>
          <Td>Physics</Td>
          <Td>09:00-09:45 am</Td>
        </Tr>
        <Tr>
          <Td>Chemistry</Td>
          <Td>10:00-10:45 am</Td>
        </Tr>
        <Tr>
          <Td  borderBottom="1px" borderColor="black">Maths</Td>
          <Td  borderBottom="1px" borderColor="black">11:00-11:45 am</Td>
        </Tr>
      </Tbody>
    </Table>
    </Box>
</Box>
</Box>
<Button width="200px" bg="black" color="white" mt={3} mb={3} ml="30%"
onClick={handleEnroll}
> <Icon as={AiOutlinePlayCircle} mt="3px" mr="5px" />Subcribe </Button>

</Box>

</Flex>


        </>
    )
}