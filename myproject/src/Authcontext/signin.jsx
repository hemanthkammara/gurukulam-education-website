import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { Link as ReactRouterLink } from 'react-router-dom'
const Signin = () => {


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")



  const buyPackage = [];
  const cardArr = [];
  const cartLs = localStorage.getItem("cartData");
  var cartArr=[]
  if (cartLs == null) {
   
    cartArr = [];
    // getData()
  } else {
    cartArr = JSON.parse(cartLs);
    //displayCart(cartArr)
  }
  
 
  localStorage.setItem("cartData", JSON.stringify(cartArr));
  console.log("cartArr", cartArr);








    const navigate = useNavigate()
    const handleClick=()=>{
        const val={
        email:email,
        password:password
        }
        console.log(email,password)
        console.log(val)
cartArr.push(val)
      localStorage.setItem("cartData", JSON.stringify(cartArr));
 console.log("cartArr", cartArr);
 setEmail("")
 setPassword("")
        navigate("/login")
    }
    
  return (
    <Box p={8} width="50%" textAlign="center"  margin="auto" borderRadius="10px" mt={10} mb={10}
    boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Create Account
      </Heading>
      <Flex justifyContent="center" mb={4}>
        <Stack direction="row" spacing={4}>
          <Icon as={FaFacebook} boxSize={6} />
          <Icon as={FaLinkedin} boxSize={6} />
          <Icon as={FaInstagram} boxSize={6} />
          <Icon as={FaTwitter} boxSize={6} />
        </Stack>
      </Flex>
      <Text mb={2} fontSize="15px">or your email for registration</Text>
      <Input type="text" placeholder="Name" mb={2}  onChange={(e)=>{}}/>
      <Input type="email" placeholder="Email" mb={2} value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
      <InputGroup size="md" mb={4} >
        <Input type="password" placeholder="Password" pr="4.5rem"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </InputGroup>
      <Button backgroundColor="black" color="white" size="lg" width="30%" onClick={handleClick}>
        Sign Up
      </Button>
   
      <Link as={ReactRouterLink} to='/login' activeClassName="activeLink" ml={10}>
        log in
        </Link>


    </Box>
  );
};

export default Signin;
