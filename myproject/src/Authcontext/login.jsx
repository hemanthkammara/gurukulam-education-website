import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text, Icon } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const {openCourse,setOpenCourse} =useContext(AuthContext)

  const buyPackage = [];
  const cardArr = [];
  const cartLs = localStorage.getItem("cartData");
  let cartArr=[]
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


  function iteminbuyarr(ele){
    return cartArr.includes(ele);
  }

  

  const handleClick = () => {
    const userData = {
      email: email,
      password: password,
    };
  
    console.log(email, password);
    console.log(userData);
  
    const foundUser = cartArr.find(item => item.email === userData.email && item.password === userData.password);
  
    if (foundUser) {
      console.log("User exists in cartArr");
      setOpenCourse(true)
      alert("log in Successful")
      // Perform your navigation logic here if needed
    } else {
      alert("check email or password")
    }
  
    setEmail("");
    setPassword("");
  };
  








//     const handleClick=()=>{
//         const val={
//         email:email,
//         password:password
//         }
//         console.log(email,password)
//         console.log(val)

       
// if(iteminbuyarr(val)){
//   console.log("yes")
// }else{
//   console.log("no")
// }



// // cartArr.push(val)
// //       localStorage.setItem("cartData", JSON.stringify(cartArr));
// //  console.log("cartArr", cartArr);
//  setEmail("")
//  setPassword("")
// //         navigate("/login")
//     }





  return (
    <Box p={8} width="50%" textAlign="center" border="1px" margin="auto" borderRadius="10px" mt={10} mb={10}
    boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <Heading as="h1" size="lg" mb={4} textAlign="center">
        Log in
      </Heading>
      <Flex justifyContent="center" mb={4}>
        <Stack direction="row" spacing={4}>
          <Icon as={FaFacebook} boxSize={6} />
          <Icon as={FaLinkedin} boxSize={6} />
          <Icon as={FaInstagram} boxSize={6} />
          <Icon as={FaTwitter} boxSize={6} />
        </Stack>
      </Flex>
      <Text mb={2} fontSize="15px">or use your account</Text>
      
      <Input type="email" placeholder="Email" mb={2}      value={email}  onChange={(e)=>{setEmail(e.target.value)}}    />
      <InputGroup size="md" mb={4}>
        <Input type="password" placeholder="Password" pr="4.5rem"     value={password} onChange={(e)=>{setPassword(e.target.value)}}          />
      </InputGroup>
      <Text mb={2} fontSize="15px">Forgot password?</Text>
      <Button backgroundColor="black" color="white" size="lg" width="30%"   onClick={handleClick}     >
        log in
      </Button>
    </Box>
  );
};

export default Login;
