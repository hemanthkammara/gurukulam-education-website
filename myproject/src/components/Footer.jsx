import { Box, Flex, Heading, Text, HStack, Icon, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="black" color="white" p={8}>
      {/* <Box bg="#5f8bdd" color="white" p={8}></Box> */}
      <Flex justifyContent="space-between" mb={6}>
        <Box>
          <Heading size="lg">Gurukulam</Heading>
          <Text mt={2}>
            Education Service Ltd,{" "}
            <br />
            Register office address,
            <br />
            1118 Cross Paramount Gardens,
            <br />
            Bengaluru 560062,
            <br />
            Mobile: 91 01234,
            <br />
            Email: designSunil@gmail.com
          </Text>
        </Box>
        <Box>
          <Heading size="md" mb={2}>
            About Us
          </Heading>
          <Text>About</Text>
          <Text>Methodology</Text>
          <Text>Concept in Media</Text>
          <Text>Wide Centres</Text>
          <Text>Franchise Information</Text>
          <Text>Investor Corner</Text>
        </Box>
        <Box>
          <Heading size="md" mb={2}>
            Neat Exam 2023
          </Heading>
          <Text>NET 2023 Exam Dates</Text>
          <Text>NET Previous Exam Question Papers</Text>
          <Text>NET 2023 Admit Card</Text>
          <Text>NET 2023 Result</Text>
          <Text>NET 2023 Cut Off</Text>
        </Box>
      </Flex>
      <Flex justifyContent="" flexDirection={"column"}>
       
            <Box>
             <Text>Followers on:</Text>

            </Box>

            <Box mt="5px">
          <a href="https://www.facebook.com">
            <Icon as={FaFacebook} boxSize={6} />
          </a>
   
          <a href="https://www.youtube.com">
            <Icon as={FaYoutube} boxSize={6}  marginLeft="15px"/>
          </a>
            </Box>
  
      </Flex>
    </Box>
  );
};

export default Footer;
