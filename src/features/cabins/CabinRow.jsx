import { useMutation, useQueryClient } from "@tanstack/react-query";

import styled from "styled-components";
import toast from "react-hot-toast";
import { useState } from "react";

import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import CreateCabinForm from "./CreateCabinForm";
// import Table from "../../ui/Table";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showForm , setShowForm]=useState(false);

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

// Create a new instance of the query client, used to manage and interact with queries
const queryClient = useQueryClient();

// Destructure the mutation object returned by useMutation.
// isLoading is renamed to isDeleting to indicate that a delete operation is in progress
// mutate is the function used to trigger the mutation (delete operation)
const { isLoading: isDeleting, mutate } = useMutation({
  
  // mutationFn is the function responsible for performing the mutation (in this case, deleting a cabin)
  mutationFn: deleteCabin,

  onSuccess: () => {
    toast.success('Cabin successfully deleted');
    
    // Invalidate the "cabins" query in the cache to force a refetch of cabins
    // This ensures the UI gets updated with the latest data after deletion
    queryClient.invalidateQueries({
      queryKey: ["cabins"]
    });
  },

  // onError is called if there is an error during the mutation (delete operation)
  onError: err => {
    // Display the error message to the user
    toast.error(err.message);
  },
});

  return (
    <>
    <TableRow>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits Up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <div>
      <button onClick={()=>setShowForm((show)=>!show)} >Edit</button>
      <button onClick={()=>mutate(cabinId)} disabled={isDeleting}>Delete</button>
      </div>
    </TableRow>
    {showForm && <CreateCabinForm cabinToEdit={cabin}/> }
    </>
  );
}

export default CabinRow;
