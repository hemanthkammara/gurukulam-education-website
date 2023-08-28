import { Box, Button, Center, Flex, Heading, Input, Text ,Divider} from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Authcontext/AuthContext";
import PaymentDone from "./paymentDoneMessage";

const PaymentForm = () => {



  const [upiId, setUpiId] = useState("");
  const [paymentDone, setPaymentDone] = useState(false);
  

  const [showPasswordInput, setShowPasswordInput] = useState(false);
   
  const {data,setData,lectures,setLectures} =useContext(AuthContext)


  const handleVerifyClick = () => {
    setShowPasswordInput(true);
  };

  const handleCancelClick = () => {
    setShowPasswordInput(false);
    setUpiId("");
  };

  const handlePaySuccess = () => {
    setPaymentDone(true)
    setLectures(true)
  };

  if(paymentDone){
    return <PaymentDone/>
  }

  return (
    <>
    <Box display="flex" mb="50px">

{/* ------------------------displayTotal-------------------------------- */}
          <Box>
          <Box    p="5px" borderRadius="10px"
  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
  mt="22px"
  > 
  <Heading fontSize="30px" textDecoration='underline'>Payment Total</Heading>
  <Text>Total Course = Rs {data.totalP}/-</Text>
  <Text>GST = Rs {data.GST}/-</Text>
  <Divider/>


  <Box display="flex" alignItems="center" mt="10px">

  <Heading fontSize="20px">Total=Rs {data.total}/-</Heading>
 
  </Box>
  </Box>

          </Box>


{/* -----------------------paymentmethod ----------------------------------*/}
      <Box
        w="30%"
        border="1px solid white"
        borderRadius="10px"
        boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        margin="20px"
        padding="10px"
      >
        <Flex justifyContent="space-between" mb="20px">
          <Heading size="lg">Payment</Heading>
          <Text fontSize="md" mt="10px">
            via
          </Text>
          <Box w="40%">
            <img src="https://1.bp.blogspot.com/-eVq7-RkZQnU/XvdKr93brzI/AAAAAAAACco/pxujCzilVsUEdhu5MiA1nqqRctRFDZw6gCK4BGAsYHg/w1200-h630-p-k-no-nu/UPI%2BIMAGE.jpg" alt="" width="100%" />
          </Box>
        </Flex>
        <Box className="upi-id-box" mb="10px">
          {!showPasswordInput ? (
            <Flex direction="column">
              <Flex mb="3px">
                <Text>UPI Id:</Text>
                <Text className="upiShow" ml="3px">
                  {upiId}
                </Text>
              </Flex>
              <Input
                type="text"
                placeholder="Enter"
                className="enterID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </Flex>
          ) : null}
          {showPasswordInput ? (
            <Flex direction="column" mb="3px">
              <Text>Password:</Text>
              <Input type="password" placeholder="Enter password" />
            </Flex>
          ) : null}
          {!showPasswordInput ? (
            <Button mt="5px" onClick={handleVerifyClick}>
              Verify & Proceed
            </Button>
          ) : (
            <Flex>
              <Button onClick={handlePaySuccess} className="pay-done" mr="3px">
                Pay
              </Button>
              <Button className="pay-cancel" onClick={handleCancelClick}>
                Cancel
              </Button>
            </Flex>
          )}
        </Box>
      </Box>
    </Box>
</>
  );
};

export default PaymentForm;
