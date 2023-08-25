import { Link,Box, Stack } from '@chakra-ui/react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
function Navbar() {


  return (
    <Flex alignItems="center"  bgColor={"white"} color={"black"} p={4} data-testid="navbar">
 <Image width={70}  borderRadius={70} src='https://i.ibb.co/rMVVXw6/Screenshot-2023-08-22-230906.png' alt='Dan Abramov' />
      <ChakraLink as={ReactRouterLink} to='/' fontSize="25px">
         Gurukulam
        </ChakraLink>

    
      <Spacer />
        {/* <Stack  direction='row' width={600}   border='1px'> */}
        <Stack  direction='row' width={600}   >
      <Link as={ReactRouterLink} to='/about'>
          About.Us
        </Link>

        <Spacer />

        <ChakraLink as={ReactRouterLink} to='/results'>
          Results
        </ChakraLink>

        <Spacer />

        <ChakraLink as={ReactRouterLink} to='/courses'>
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
        <Button color="white" backgroundColor="black">Sign in</Button>


    </Flex>
  );
}

export default Navbar;
