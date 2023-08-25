


// export default function AboutUs(){
//     return (
//         <>
//     <div style={{display:"flex",padding:"20px"}} >
//       <div style={{width:"50%" } }>

//       <img src="https://www.rankridge.com/wp-content/uploads/2022/02/Untitled.jpg" alt="Girl in a jacket" width="80%" height="600"></img>

//       </div>
//       <div style={{width:"50%"}}>

//    <p style={{marginBottom:"10px"}}>
//     Gurukulam is the India’s most trusted institute and best NEET coaching institute 
//     in India. Every year a lot of students secure top ranks in the NEET 
//     examination. We have highly qualified faculty and everyone is graduated and post graduated 
//     from premier institutes. We offer long term, short term and crash courses for NEET aspirants
//     </p>

//    <p>
//     We have our own study material, which is designed by our expert faculty. It will help students 
//     to understand concepts and also help in self preparation. One of the best things about Gurukulam
//      is that we assess the performance of every student through regular mock tests. Based on the assessment,
//       we improve the strategy of teaching. Therefore, if you are planning for the NEET, then join Gurukulam.
//     </p>
//     </div>
//       </div>
//         </>
//     )
// }
import { Box, Flex, Image, Text,Heading,Input,Button} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export default function AboutUs() {
  return (
    <>
     <Heading marginBottom="20px" textAlign="center" marginTop="10px">Start Your Success Journey With our Program</Heading>
    <Flex p={10}>
    <Box width="50%">
      <Heading marginBottom="20px">Welcome to Gurukulam!</Heading>
      <Text mb={15}>
      Gurukulam is a premium coaching institute in Hyderabad guiding students to achieve high scores 
      in the medical and engineering entrance examinations. We offer long term, short team and crash 
      courses for the students who are preparing for the exams. With a legacy of more than 20 years,
       we have guided many students to achieve all India ranks.
      </Text>

      <Text>
      Gurukulam has exceptional faculty and everyone is qualified from prominent institutes. At our
       institute we provide unmatched learning experience with unbeatable strategies. From the inception, 
       we have been driven by the core objective to provide the best training to the aspirants. Our 
       comprehensive training will help to score high and achieve India’s top ranks in the Engineering
        and Medical Examinations. By leveraging the experience of our faculty, we bring you the learning 
        experience that helps you to achieve your academic goals.
      </Text>
    </Box>
    <Box width="50%" marginLeft="20px" border="1px" padding="20px" borderRadius="10px">
   
    <FormControl>
        <FormLabel>Student Name</FormLabel>
        <Input type='text' placeholder="enter"/>

        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder="enter"/>

        <FormLabel>Mobile number</FormLabel>
        <Input type='number' placeholder="enter"/>

        <Button
            mt={4}
            colorScheme='teal'
            backgroundColor="black"
            type='submit'
          >
            Submit
          </Button>


        
    </FormControl>

    </Box>

    </Flex>
    
    
    
    <Flex p={20}>
      <Box width="50%">
        <Image
          src="https://www.rankridge.com/wp-content/uploads/2022/02/Untitled.jpg"
          alt="Girl in a jacket"
          width="80%"
          height={400}
        />
      </Box>
      <Box width="50%">
      <Heading marginBottom="20px">why Gurukulam ?</Heading>
        <Text mb={10} >
          Gurukulam is India’s most trusted institute and the best NEET coaching
          institute in India. Every year, numerous students secure top ranks in
          the NEET examination. Our faculty is highly qualified, with everyone
          having graduated and post-graduated from premier institutes. We offer
          long-term, short-term, and crash courses for NEET aspirants.
        </Text>
        <Text>
          We provide our own study material, meticulously designed by our expert
          faculty. This material aids students in grasping concepts and enables
          self-preparation. One of Gurukulam's highlights is our regular mock
          tests, which assess the performance of every student. Based on these
          assessments, we refine our teaching strategies. If you are planning to
          take the NEET exam, Gurukulam is the place to be.
        </Text>
      </Box>
    </Flex>
    </>



  );
}
