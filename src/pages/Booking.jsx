// import BookingDetail from "../features/bookings/BookingDetail";
import Row from"../ui/Row";
import Heading from"../ui/Heading";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Booking() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <BookingTableOperations/>
    </Row>
    <BookingTable/>
    </>
  // <BookingDetail />;
  );
}

export default Booking;
