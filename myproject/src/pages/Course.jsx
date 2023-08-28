import { Box, Button, Heading, Text, Image, Flex,Icon ,Divider} from "@chakra-ui/react";
import { BsCheckCircle} from "react-icons/bs";
import { useNavigate } from "react-router-dom"
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiAdjust ,BiSolidChevronRight,BiSolidRightArrowAlt} from "react-icons/bi";
import { AuthContext } from "../Authcontext/AuthContext";
import { useContext } from "react";
export default function Course(){

  const {openCourse} =useContext(AuthContext)
const navigate=useNavigate()
const handleJee=()=>{
    if(openCourse){

      navigate("/jee")
    }else{
      alert("please log in")
    }
     
}


    return (
        <>


      {/* <Flex width="60%" margin="auto" justifyContent="space-between" mb={10}>

    <Box   border="1px" width="45%" borderTopRightRadius="10px" borderTopLeftRadius="10px" borderRadius="10px">
      <Image
        src="https://th.bing.com/th/id/R.6fefc434c30c056a7e6655e617bde303?rik=6H%2fDnk0trzdutg&riu=http%3a%2f%2fdigitallearning.eletsonline.com%2fwp-content%2fuploads%2f2016%2f11%2fAdmin_Block_IIT-R.jpg&ehk=AcPqHJDDA3z%2fYNsDDCH4oM8rC%2fFkLaBtfXOEIL6XFE8%3d&risl=&pid=ImgRaw&r=0"
        alt="IIT JEE Luck"
        borderTopRightRadius="10px" borderTopLeftRadius="10px"
        width="100%"
      />
      <Heading as="h2" size="xl" mb={1} pl={2}>
         IIT JEE
      </Heading>
      <Text pl={2}>courses complition in 1 year </Text>
      <Text pl={2}>live and record classes available </Text>
      <Divider mb={2} mt={2} width="80%" mx="auto" />
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Maths classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Physics classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Chemistry classes
      </Text>

    <Box textAlign="center">
        <Button  bg="black" color="white" mt={5} mb={5} width="80%" height="30px">
            Join Now
        </Button>
    </Box>
    </Box>

    <Box   border="1px" width="45%" borderTopRightRadius="10px" borderTopLeftRadius="10px" borderRadius="10px">
      <Image
        src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/03/15/437803-aiims.jpg"
        alt="IIT JEE Luck"
        borderTopRightRadius="10px" borderTopLeftRadius="10px"
        width="100%"
      />
      <Heading as="h2" size="xl" mb={1} pl={2}>
         NEET
      </Heading>
      <Text pl={2}>courses complition in 1 year </Text>
      <Text pl={2}>live and record classes available </Text>
      <Divider mb={2} mt={2}  width="80%" mx="auto" />
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Biology classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Physics classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Chemistry classes
      </Text>

    <Box textAlign="center">
        <Button  bg="black" color="white" mt={5} mb={5} width="80%" height="30px">
            Join Now
        </Button>
    </Box>
    </Box>


    
      </Flex> */}



<Box   width="70%" display="flex" margin="auto" borderRadius="10px" mb={30}
boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
>
    <Box width="60%">

      <Image
        src="https://th.bing.com/th/id/R.6fefc434c30c056a7e6655e617bde303?rik=6H%2fDnk0trzdutg&riu=http%3a%2f%2fdigitallearning.eletsonline.com%2fwp-content%2fuploads%2f2016%2f11%2fAdmin_Block_IIT-R.jpg&ehk=AcPqHJDDA3z%2fYNsDDCH4oM8rC%2fFkLaBtfXOEIL6XFE8%3d&risl=&pid=ImgRaw&r=0"
        alt="IIT JEE Luck"
       borderTopLeftRadius="10px"
       borderBottomLeftRadius="10px"
        width="100%"
      />
    </Box>


      <Box width="40%" paddingLeft="30px">

      <Heading as="h2" size="xl" mb={1} pl={2} mt={5}>
      IIT JEE
      </Heading>
      <Text pl={2}>courses complition in 1 year </Text>
      <Text pl={2}>live and record classes available </Text>
      <Divider mb={2} mt={2}  width="80%" mx="auto" />
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Maths classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Physics classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Chemistry classes
      </Text>

    <Box >
        <Button  bg="black" color="white" mt={5} mb={5} width="80%" height="30px"    onClick={handleJee}>
        Know More <Icon as={BiSolidChevronRight} mt="5px" />
        </Button>
    </Box>
      </Box>
    </Box>











<Box    width="70%" display="flex" margin="auto" borderRadius="10px" mb={30}
boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
>
    <Box width="60%">

      <Image
        src="https://static.theprint.in/wp-content/uploads/2020/07/AIIMS-2.jpg"
        alt="IIT JEE Luck"
       borderTopLeftRadius="10px"
       borderBottomLeftRadius="10px"
        width="100%"
      />
    </Box>


      <Box width="40%" paddingLeft="30px">

      <Heading as="h2" size="xl" mb={1} pl={2} mt={5}>
         NEET
      </Heading>
      <Text pl={2}>courses complition in 1 year </Text>
      <Text pl={2}>live and record classes available </Text>
      <Divider mb={2} mt={2}  width="80%" mx="auto" color="black"/>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Biology classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Physics classes
      </Text>
      <Text fontSize="lg" pl={2}>
      <Icon as={BsCheckCircle} mr="2px" />Chemistry classes
      </Text>

    <Box >
        <Button  bg="black" color="white" mt={5} mb={5} width="80%" height="30px">
        Know More <Icon as={BiSolidChevronRight} mt="5px" />
        </Button>
    </Box>
      </Box>
    </Box>
    













   


        </>
    )
}