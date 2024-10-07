import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function(){
    getCabins().then((data)=>console.log(data));
  },[])
  return (
    <>
        <Heading as="h1">All cabins</Heading>
        <p>Test</p>

      </Row>
    </>
  );
}

export default Cabins;
