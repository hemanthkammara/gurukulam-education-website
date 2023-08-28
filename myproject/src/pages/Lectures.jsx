import { Heading,Box,Flex,Image,Text,Button,Link, Icon} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaUnderline } from "react-icons/fa";
import DemoLectures from "./showLectures/demo";
import { useContext } from "react";
import { AuthContext } from "../Authcontext/AuthContext";
import EnrolledCourses from "./showLectures/enrolled";




export default function Lecture(){
    const[showVideo,setVideo]=useState(true)

    const {data,setData,lectures,setLectures} =useContext(AuthContext)

    const handleEnroll= () =>{
        if(lectures){
            setVideo(false)
        }else{
            alert("you cant acess this courses")
        }

    }

    return (
        <>
       <Box display="flex" justifyContent="space-around">
        <Heading mt={7} fontSize="50px"
        textDecoration={showVideo?"underline":""}
         onClick={()=>{setVideo(true)}}>{showVideo?<Icon color="green" as={AiFillCheckCircle}></Icon>:""} Demo lectures</Heading>
       
       
        <Heading mt={7} fontSize="50px" 
        textDecoration={showVideo?"":"underline"}
        onClick={handleEnroll}>{showVideo?"":<Icon color="green"  as={AiFillCheckCircle}></Icon>} Enrolled Courses</Heading>

       </Box>

       {showVideo?<DemoLectures/>:<EnrolledCourses/>}
   
        </>
    )
}