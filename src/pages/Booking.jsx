// import BookingDetail from "../features/bookings/BookingDetail";
import Row from"../ui/Row";
import Heading from"../ui/Heading";
import BookingTable from "../features/bookings/BookingTable";

function Booking() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
    </Row>
    <BookingTable/>
    </>
  // <BookingDetail />;
  );
}

export default Booking;
