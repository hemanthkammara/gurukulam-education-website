import './navbar.css'
import { NavLink } from "react-router-dom";
import { Link,Box, Stack } from '@chakra-ui/react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate = useNavigate()

const handleClick=()=>{
   navigate("/signin")


}


  return (
    <Flex alignItems="center"  bgColor={"white"} color={"black"} p={4} data-testid="navbar">
 <Image width={70}  borderRadius={70} src='https://i.ibb.co/rMVVXw6/Screenshot-2023-08-22-230906.png' alt='Dan Abramov' />
      <ChakraLink as={ReactRouterLink} to='/' fontSize="25px">
         Gurukulam
        </ChakraLink>

    
      <Spacer />
        {/* <Stack  direction='row' width={600}   border='1px'> */}
        <Stack  direction='row' width={600}   >

     <Link as={NavLink} to='/about' exact activeClassName="activeLink">
          About.Us
      </Link>

        <Spacer />

        <ChakraLink as={ReactRouterLink} to='/results' activeClassName="activeLink">
          Results
        </ChakraLink>

        <Spacer />

        <ChakraLink as={ReactRouterLink} to='/courses' className='navbar'>
         Courses
        </ChakraLink>

        <Spacer />

        <ChakraLink as={ReactRouterLink} to='/lectures'>
         Lectures
        </ChakraLink>

        <Spacer />

        <ChakraLink as={ReactRouterLink} to='/blogs'>
            Blogs
        </ChakraLink>

        <Spacer />

        <ChakraLink as={ReactRouterLink} to='/contact'>
          Contact Us
        </ChakraLink>
        <Spacer />
        </Stack>
        <Spacer/>
        <Button color="white"  onClick={handleClick}  backgroundColor="black">Sign in</Button>


    </Flex>
  );
}

export default Navbar;
