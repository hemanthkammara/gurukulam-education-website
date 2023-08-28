import { Heading,Box, Flex,Text,Icon,Image,Button, Divider } from "@chakra-ui/react";
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
  import React, { useReducer,useState } from "react";
  import { FaRupeeSign} from "react-icons/fa";
  import { useNavigate } from "react-router-dom"
import CourseMoney from "./coursemoney";
import PaymentForm from "./payment";

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



export default function JeeEnroll(){
    const [state, dispatch] = useReducer(reducer, initialState);
   const[show,setShow]=useState(true)
    const navigate=useNavigate()
    const handlePayment=()=>{    
            navigate("/payment")
    }
    return (
        <>
         <Heading as="h1" fontSize="50px">IIT Jee</Heading>

         <Heading mt={25}>Live Classes +</Heading>
         <Heading >Pre-Recorded Lectures</Heading>
         <Box ml={5}>
         <UnorderedList >
            <ListItem >Daily Live Classes</ListItem>
            <ListItem>1000+ Recorded Lecuters</ListItem>
            <ListItem>Doubt solving sessions</ListItem>
            <ListItem>ClassNotes & PDFs</ListItem>
        </UnorderedList>
         </Box>

        
    <Heading mt={5}>Course Enroll Process</Heading>



{show?<CourseMoney setShow={setShow}/>:<PaymentForm/>}



<Text mb={90}>.</Text>
        </>
    )
}