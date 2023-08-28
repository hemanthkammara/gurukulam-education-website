import { Heading,Box, Flex,Text,Icon,Image,Button, Divider } from "@chakra-ui/react";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
  import React, { useReducer } from "react";
  import { FaRupeeSign} from "react-icons/fa";
  import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import PaymentForm from "./payment";
import { AuthContext } from "../../Authcontext/AuthContext";


const initialState = {
    firstRow: false,
    secondRow: false,
    thirdRow: false,
    totalP: "0.00",
    GST:"0.00",
    total:"0.00"
  };

  function reducer(state, action) {
    switch (action.type) {
      case "FIRST_ROW":
        return {
          ...initialState,
          firstRow: true,
          totalP: "11,000",
          GST:"1,200",
          total:"12,200"

        };
      case "SECOND_ROW":
        return {
          ...initialState,
          secondRow: true,
          totalP: "21,000",
          GST:"2,300",
          total:"23,300"
        };
      case "THIRD_ROW":
        return {
          ...initialState,
          thirdRow: true,
          totalP: "30,000",
          GST:"3,400",
          total:"33,400"
        };
      default:
        return initialState;
    }
  }




export default function CourseMoney({setShow}){

    const [state, dispatch] = useReducer(reducer, initialState);
    const {data,setData} =useContext(AuthContext)
    const navigate=useNavigate()  

    const handlePayment=()=>{
      setData(state)
        navigate("/payment")
}
   
    return (
        <>
  <Flex>
    <Box mt="25px"  p={5} borderRadius="10px"
     boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
        <Heading fontSize="25px">Subjects</Heading>
        <Box ml={5}>
        <UnorderedList >
            <ListItem >Maths</ListItem>
            <ListItem >Physics</ListItem>
            <ListItem >Chemistry</ListItem>
           
        </UnorderedList>
        </Box>
    </Box>
    <Box   borderRadius="10px"  ml="25px" mt="25px" display="flex"
     boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
       
       <Box>
    <Flex flexDirection="column"  p={4}>
      <Text ml="50px" textDecoration="underline">Select Course</Text>
      <Box
        onClick={() => dispatch({ type: "FIRST_ROW" })}
        
        p={2}
        mb={2}
        display="flex"
      >
        <Box border={state.firstRow ? "2px solid green" : "1px solid black"} >
        <Text>1 subject</Text>
      </Box>
        <Box>
                    <Text 
                color={state.firstRow ? "green" : "black"}
                ml="15px"
               > <Icon as={FaRupeeSign} />11,000/subject</Text>
        </Box>
      </Box>
      <Box
        onClick={() => dispatch({ type: "SECOND_ROW" })}
      display="flex"
        p={2}
        mb={2}
      >
          <Box border={state.secondRow ? "2px solid green" : "1px solid black"} >

            <Text>2 subjects</Text>
            </Box>
            <Box>
                <Text 
                    color={state.secondRow ? "green" : "black"}
                    ml="15px"
                > <Icon as={FaRupeeSign} />21,000/subjects</Text>
            </Box>


      </Box>



      <Box
        onClick={() => dispatch({ type: "THIRD_ROW" })}
       display="flex"
        p={2}
      >
       <Box border={state.thirdRow ? "2px solid green" : "1px solid black"} >

                <Text>3 subjects</Text>
                </Box>
                <Box>
                    <Text 
                        color={state.thirdRow ? "green" : "black"}
                        ml="15px"
                    > <Icon as={FaRupeeSign} />30,000/subjects</Text>
                </Box>
      </Box>
    </Flex>
    </Box>

  <Box  m="10px" border="0px" p="5px" borderRadius="10px"
  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
  height="150px"
  mt="25px"
  > 
  <Heading fontSize="30px" textDecoration='underline'>Payment Total</Heading>
  <Text>Total Course = Rs {state.totalP}/-</Text>
  <Text>GST = Rs {state.GST}/-</Text>
  <Divider/>


  <Box display="flex" alignItems="center" mt="10px">

  <Heading fontSize="20px">Total=Rs {state.total}/-</Heading>
  <Button bg="black" color="white" ml="5px" height="25px" onClick={handlePayment}>Buy Course</Button>
  </Box>
  </Box>

</Box>
</Flex>
        </>
    )
}