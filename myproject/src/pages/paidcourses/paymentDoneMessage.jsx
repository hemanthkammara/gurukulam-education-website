import { Heading,Box,Text ,UnorderedList,ListItem} from "@chakra-ui/react";

export default function PaymentDone(){
    return (
        <>
    <Heading>Payment Done Successfully</Heading>

     <Box mb="80px" mt="25px">
  <Heading>Thank You For Lanching Your Carrier With Gurukulam</Heading>
  <Heading mt="10px">You Can Access the Recorded Lecturess </Heading>
  <Box ml="10px">

  <Text>Live CLasses Timings send to the mail daily with notes</Text>
  <UnorderedList >
            <ListItem>1000+ Recorded Lecuters</ListItem>
            <ListItem>Doubt solving sessions</ListItem>
            <ListItem>ClassNotes & PDFs</ListItem>
        </UnorderedList>
  </Box>
        <Heading mt="10px">Happy Learning!</Heading>
     </Box>
        </>
    )
}