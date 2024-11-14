import { Box, Text } from "@chakra-ui/react";
import { Suspense, lazy, useEffect, useState } from "react";
import { Spinar } from "../components/Spinar";
import Navbar from "../components/Navbar";
import { baseUrl } from "../BaseUrl";
import axios from "axios";

const QuillEditor = lazy(() => import("../components/QuillEditor"));

function Data() {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [myAmount, setMyAmount] = useState("");
  async function fetchData() {
    try {
      let paymentData = await axios.get(`${baseUrl}/payment/paymentDetails`);
      setPaymentDetails(paymentData.data.details);
      let totalAmount = paymentData?.data?.details?.reduce((acc, item) => {
        return acc + (item.amount * 4) / 100;
      }, 0);
      
      setMyAmount(totalAmount);

    } catch (error) {
      console.error("Error fetching payment data:", error);
    }
  }

  // Call the async function
  useEffect(() => {
    fetchData();
  }, []);

  console.log(paymentDetails);
  return (
    <Box mt={"70px"}>
      <Navbar />
      <Box pt={"50px"} fontSize={"30px"} pb={"50px"} fontWeight={"bold"}>Total Amount:   <span style={{color : "green"}}>{myAmount}</span></Box>
      {paymentDetails?.map((item, index) => {
        // console.log(item.username,"in map")
        return (
          <Box pl={"50px"}>
            <Box textAlign={"left"}>
              <Box><span style={{fontWeight : "bold", color : "teal",marginRight:"10px"}}>User Name:</span> {item.userName}</Box>
              <Box><span style={{fontWeight : "bold", color : "teal" ,marginRight:"10px"}}>Amount</span> {item.amount}</Box>
              <Box><span style={{fontWeight : "bold", color : "teal" ,marginRight:"10px"}}>My Amount</span> {(item.amount * 4)/100}</Box>
              <Box><span style={{fontWeight : "bold", color : "teal" ,marginRight:"10px"}}>Date:</span> {item.date}</Box>
              <Box><span style={{fontWeight : "bold", color : "teal" ,marginRight:"10px"}}>User Email Id:</span> {item.userEmailId}</Box>
              <Box><span style={{fontWeight : "bold", color : "teal" ,marginRight:"10px"}}>CourseId:</span> {item.courseId}</Box>
              <Box><span style={{fontWeight : "bold", color : "teal" ,marginRight:"10px"}}>Course Name:</span> {item.courseName}</Box>
            </Box>
            <hr style={{marginTop : "30px",marginBottom : "30px"}} />
          </Box>
        );
      })}
    </Box>
  );
}
export default Data;
