import { Box, Flex, Image, Text,Heading,Input,Button,Icon} from "@chakra-ui/react";

import { HiOutlineUserAdd,HiUserGroup,HiOutlineLibrary} from "react-icons/hi";
export default function Home(){
    return (
        <>
        <Heading size="md" textAlign="center">about</Heading>
        <Heading size="xl" textAlign="center">our coaching institution</Heading>
         < Box width="80%" border="1px" margin="auto" textAlign="center" height="300px">

        <Flex justifyContent="space-around" >
            <Box  width="30%" border="1px" height="200px">
            <Icon as={HiOutlineLibrary} boxSize={6}  width="100px" h={8} color='red.500'/>
                <Text >50+</Text>
                <Text>Coaching centers in india</Text>
            </Box>
            <Box width="30%" border="1px" height="200px">
            <Icon as={HiUserGroup} boxSize={6} />
                <Text>30000+</Text>
                <Text>Qualified NEET | IIT in 2023</Text>
            </Box>
            <Box width="30%" border="1px" height="200px">
            <Icon as={HiOutlineUserAdd} boxSize={6} />
                <Text>1000+</Text>
                <Text>Expert Faculity</Text>
            </Box>
        </Flex>
</Box>
        </>
    )
}