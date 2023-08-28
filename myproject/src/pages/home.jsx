import { Box,Button, Flex, Image,Link, Text,Heading,Input,Icon} from "@chakra-ui/react";

import { HiOutlineUserAdd,HiUserGroup,HiOutlineLibrary} from "react-icons/hi";
import { BiAdjust ,BiSolidChevronRight,BiSolidRightArrowAlt} from "react-icons/bi";
export default function Home(){
    return (
        <>
        <Box display="flex" marginTop="40px"  p={10}>

        <Box width="50%">
            <Heading>Online & offline coaching</Heading>
            <Heading>Classes for NEET | IIT</Heading>

    <Text>Best academics experienced Faculity,advanced study material,regular test & doubt counter. Do you want to add spark to your NEET preparations? <Link>Coaching institute Admiossions are open</Link></Text>
        <Box mt={10}>
            <Button>Know More <Icon as={BiSolidChevronRight} /></Button>
            <Button ml={10} bgColor="black" color="white">Join Now <Icon as={BiSolidRightArrowAlt} /></Button>
            
        </Box>
        </Box>

        <Box width="40%" ml={5}>
            <Image src="https://media.theindependent.sg/wp-content/uploads/2022/08/17162713/Screen-Shot-2022-08-17-at-10.22.05-AM-626x385.png" width="100%" borderRadius="100pc"></Image>
        </Box>

        </Box>


    <Box  bg="#f3f8fa" mt={10} mb={10} paddingTop={5}> 

        <Heading  color="blue" textAlign="center" mt="25px">About</Heading>
        <Heading size="xl" textAlign="center">our coaching institution</Heading>
         < Box width="80%"  margin="auto" textAlign="center" height="300px" >

        <Flex justifyContent="space-around" marginTop={10}>
            <Box  width="30%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" height="200px" borderRadius="10px" bg="white">
            <Icon as={HiOutlineLibrary}   boxSize={100}   mt={5}/>
                <Text >50+</Text>
                <Text>Coaching centers in india</Text>
            </Box>
            <Box width="30%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" height="200px" bg="white" borderRadius="10px">
            <Icon as={HiUserGroup} boxSize={100} mt={5}/>
                <Text>30000+</Text>
                <Text>Qualified NEET | IIT in 2023</Text>
            </Box>
            <Box width="30%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" height="200px" bg="white" borderRadius="10px">
            <Icon as={HiOutlineUserAdd} boxSize={100} mt={5}/>
                <Text>1000+</Text>
                <Text>Expert Faculity</Text>
            </Box>
        </Flex>
    </Box>

    </Box>

    <Box display="flex" marginTop="40px"  p={10} mb={10}>

    <Box width="40%" >
    <Image src="https://insights.som.yale.edu/sites/default/files/styles/rectangle_sm/public/insights/background/classroom.webp?h=d0d46503&itok=BekDjcBe" width="100%" borderRadius="10px"></Image>
     </Box>

  <Box width="50%" ml={20}>
    <Heading>You will get classes </Heading>
    <Heading> with qualified lectures</Heading>

<Text>We successfully provide students with intensive courses by India's top faculties and personal mentors</Text>
<Box mt={10}>
    <Button>Know More <Icon as={BiSolidChevronRight} /></Button>
   
    
</Box>
</Box>


</Box>



{/* ------------------- toppers section ---------------------------- */}

<Box display="flex" marginTop="20px" bg="#f3f8fa" p={10} mb={10}>



<Box width="40%" ml={20} mt={25}>
<Heading color="blue" fontSize="25px">Toppers </Heading>
<Heading>NEET UG 2022</Heading>

<Text fontSize="30px">We successfully provide students with intensive courses by India's top faculties and personal mentors</Text>
<Box mt={10}>
<Button>Know More <Icon as={BiSolidChevronRight} /></Button>


</Box>
</Box>

<Box className="student" display="flex" width="60%" ml="20px">
       <Box width="50%"  bg="white" borderRadius="10px"> 

        <Box width="100%" >
            <Image src="https://www.allen.ac.in/kota/asat-2022/assets/img/tanishka_neet-1-rank.png" ></Image>
        </Box>

        <Box >
           <Heading  fontSize="35px" textAlign="center">Tanishka</Heading>
          
           <Text fontSize="25px" color="blue" textAlign="center">Banglore | Karnataka</Text>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
            <Box>
                <Text >AIR </Text>
                <Text color="blue" fontSize="35px">01</Text>
            </Box>
            <Box ml="5px">
                <Text>Score</Text>
                <Text color="blue" fontSize="35px">719</Text>
            </Box>

        </Box>
       </Box>



       <Box width="50%"  bg="white" borderRadius="10px" ml="20px"> 

        <Box width="100%" >
            <Image src="https://www.allen.ac.in/kota/asat-2022/assets/img/LOKESH-AGARWAL-AIPMT-2010.png" ></Image>
        </Box>

        <Box >
           <Heading  fontSize="35px" textAlign="center">Akash</Heading>
          
           <Text fontSize="25px" color="blue" textAlign="center">Anantapur | Andra Pradesh</Text>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
            <Box>
                <Text >AIR </Text>
                <Text color="blue" fontSize="35px">02</Text>
            </Box>
            <Box ml="5px">
                <Text>Score</Text>
                <Text color="blue" fontSize="35px">717</Text>
            </Box>

        </Box>
       </Box>

</Box>



</Box>

        </>
    )
}