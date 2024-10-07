import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
 import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin } from "../../services/apiCabins";

// import { useCreateCabin } from "./useCreateCabin";
// import { useEditCabin } from "./useEditCabin";

// function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
//   const { isCreating, createCabin } = useCreateCabin();
//   const { isEditing, editCabin } = useEditCabin();
//   const isWorking = isCreating || isEditing;

//   const { id: editId, ...editValues } = cabinToEdit;
//   const isEditSession = Boolean(editId);

//   const { register, handleSubmit, reset, getValues, formState } = useForm({
//     defaultValues: isEditSession ? editValues : {},
//   });
//   const { errors } = formState;

//   function onSubmit(data) {
//     const image = typeof data.image === "string" ? data.image : data.image[0];

//     if (isEditSession)
//       editCabin(
//         { newCabinData: { ...data, image }, id: editId },
//         {
//           onSuccess: (data) => {
//             reset();
//             onCloseModal?.();
//           },
//         }
//       );
//     else
//       createCabin(
//         { ...data, image: image },
//         {
//           onSuccess: (data) => {
//             reset();
//             onCloseModal?.();
//           },
//         }
//       );
//   }

//   function onError(errors) {
//     // console.log(errors);
//   }

//   return (
//     <Form
//       onSubmit={handleSubmit(onSubmit, onError)}
//       type={onCloseModal ? "modal" : "regular"}
//     >
//       <FormRow label="Cabin name" error={errors?.name?.message}>
//         <Input
//           type="text"
//           id="name"
//           disabled={isWorking}
//           {...register("name", {
//             required: "This field is required",
//           })}
//         />
//       </FormRow>

//       <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
//         <Input
//           type="number"
//           id="maxCapacity"
//           disabled={isWorking}
//           {...register("maxCapacity", {
//             required: "This field is required",
//             min: {
//               value: 1,
//               message: "Capacity should be at least 1",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Regular price" error={errors?.regularPrice?.message}>
//         <Input
//           type="number"
//           id="regularPrice"
//           disabled={isWorking}
//           {...register("regularPrice", {
//             required: "This field is required",
//             min: {
//               value: 1,
//               message: "Capacity should be at least 1",
//             },
//           })}
//         />
//       </FormRow>

//       <FormRow label="Discount" error={errors?.discount?.message}>
//         <Input
//           type="number"
//           id="discount"
//           disabled={isWorking}
//           defaultValue={0}
//           {...register("discount", {
//             required: "This field is required",
//             validate: (value) =>
//               value <= getValues().regularPrice ||
//               "Discount should be less than regular price",
//           })}
//         />
//       </FormRow>

//       <FormRow
//         label="Description for website"
//         error={errors?.description?.message}
//       >
//         <Textarea
//           type="number"
//           id="description"
//           defaultValue=""
//           disabled={isWorking}
//           {...register("description", {
//             required: "This field is required",
//           })}
//         />
//       </FormRow>

//       <FormRow label="Cabin photo">
//         <FileInput
//           id="image"
//           accept="image/*"
//           {...register("image", {
//             required: isEditSession ? false : "This field is required",
//           })}
//         />
//       </FormRow>

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button
//           variation="secondary"
//           type="reset"
//           onClick={() => onCloseModal?.()}
//         >
//           Cancel
//         </Button>
//         <Button disabled={isWorking}>
//           {isEditSession ? "Edit cabin" : "Create new cabin"}
//         </Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default CreateCabinForm;

function CreateCabinForm() {
  const {register ,handleSubmit ,reset} =useForm();

  const queryClient=useQueryClient();
  const {mutate , isLoading :isCreating}=useMutation({
    mutationFn :createCabin,
    onSuccess:()=>
    {
      toast.success('new cabin successfully created');
      queryClient.invalidateQueries({queryKey:['cabins']});
      reset();
    },
    onError:(err)=>
      toast.error(err.message)
  });

  function onSubmit(data){
    mutate(data);  
  }
  return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <label htmlFor="name">Cabin name</label>
          <Input type="text" id="name" {...register("name")}/>
        </FormRow>

        <FormRow>
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <Input type="number" id="maxCapacity" {...register("maxCapacity")}/>
        </FormRow>

        <FormRow>
          <label htmlFor="regularPrice">Regular Price</label>
          <Input type="number" id="regularPrice"  defaultValue={0}{...register("regularPrice")}/>
        </FormRow>

        <FormRow>
          <label htmlFor="discount">Discount</label>
          <Input type="number" id="discount" {...register("discount")}/>
        </FormRow>

        <FormRow>
          <label htmlFor="description">Description</label>
          <Input type="text" id="description" {...register("description")}/>
        </FormRow>

        <FormRow>
          <label htmlFor="image">Cabin photo</label>
          <FileInput  id="image" accept="image/*" />
        </FormRow>

        <Button disabled={isCreating}>Add Cabin</Button>
      </Form>
  )
}

export default CreateCabinForm
