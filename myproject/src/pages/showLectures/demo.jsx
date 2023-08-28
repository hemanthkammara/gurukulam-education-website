import { Heading,Box,Flex,Image,Text,Button,Link} from "@chakra-ui/react";
import { FaUnderline } from "react-icons/fa";
export default function DemoLectures(){
    return (
        <>
<Box mb={50} mt={10}>
                <Flex justifyContent="space-between">
                    
                    <Box width="45%" borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box width="100%" >
                     <Image src="https://thumbs.dreamstime.com/b/biology-icons-school-board-28496741.jpg"
                     width="100%"
                     height='400px'
                     borderTopRightRadius="10px" borderTopLeftRadius="10px"
                     />
                     <Heading as="h3" ml={5}>Biology</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> saraswathi</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
                    </Box>


                    <Box width="45%"  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box width="100%" >
                     <Image src="https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=2000"
                     width="100%"
                     borderTopRightRadius="10px" borderTopLeftRadius="10px"
                     />
                     <Heading as="h3" ml={5}>Maths</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> Aravind</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
                    </Box> 

                   
                </Flex>
            </Box>


            <Box mb={50} mt={10}>
                <Flex justifyContent="space-between">
                    
                    <Box width="45%"  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box width="100%" >
                     <Image src="https://images.shiksha.com/mediadata/images/articles/1628666138phpFXnn99.jpeg"
                     width="100%"
                     height="380px"
                     borderTopRightRadius="10px" borderTopLeftRadius="10px"
                     />
                     <Heading as="h3" ml={5}>Physics</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> Aditya</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
                    </Box>


                    <Box width="45%"  borderRadius="10px"
                    boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    >
                    <Box width="100%" >
                     <Image src="https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
                     width="100%"
                     borderTopRightRadius="10px" borderTopLeftRadius="10px"
                     />
                     <Heading as="h3" ml={5}>Chemistry</Heading>
                     <Text ml={5}><Text as="span" fontSize="25px">Instructor:</Text> Aravind</Text>
                    </Box>
                    <Box ml={5} mb={5} mt={1}>
                        <Button bg={"black"}  color="white">Play Now</Button>
                        <Link ml={50} fontStyle="underline">Class Notes</Link>
                    </Box>
                    </Box> 

                   
                </Flex>
            </Box>
        </>
    )
}