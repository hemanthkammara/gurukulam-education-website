import { Link } from '@chakra-ui/react'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
function Navbar() {


  return (
    <Flex alignItems="center"  bgColor={"pink"} color={"black"} p={4} data-testid="navbar">
 
      <ChakraLink as={ReactRouterLink} to='/'>
          Home
        </ChakraLink>

      <Spacer />
      <Spacer />

      <ChakraLink as={ReactRouterLink} to='/about'>
          About.Us
        </ChakraLink>

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

        <Button colorScheme='blue'>Sign in</Button>


    </Flex>
  );
}

export default Navbar;
