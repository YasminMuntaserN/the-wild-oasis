import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const [showForm , setShowForm]=useState(false);
function Cabins() {
  return (
    <>
    <Row>
        <Heading as="h1">All cabins</Heading>
        <p>Test</p>

      </Row>
      <Row>
        <CabinTable/>

        <Button onClick={()=>setShowForm((showForm)=>!showForm)}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
