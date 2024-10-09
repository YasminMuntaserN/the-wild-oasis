import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";



function CreateCabinForm({cabinToEdit={}}) {
  const {id : editId , ...editValues } =cabinToEdit;
  // if there is editId the isEditSession will be true else it will be false
  const isEditSession=Boolean(editId)
  const {register ,handleSubmit ,reset , getValues ,formState} =useForm({
    defaultValues :isEditSession?editValues :{},
  });
  const{errors} =formState;
  
  const {isCreating , createCabin}=useCreateCabin();
  const { EditCabin, isEditing } =useEditCabin();


  
  const isWorking=isEditing ||isCreating;

  function onSubmit(data){
    const image =typeof data.image === 'string' ? data.image :data.image[0];

    if(isEditSession)
        EditCabin(
          {newCabinData :{...data , image } , id:editId} , 
        {
          onSuccess:(data) =>{reset()}
        },
      )  ;
    else 
      createCabin({...data , image:image} ,
    {
      onSuccess:(data) =>{reset()}
    })  
  }

  function onError(errors){
      console.log(errors);
  }

  return (
      <Form onSubmit={handleSubmit(onSubmit ,onError)}>
        <FormRow label="Cabin name" error ={errors?.name?.message}>
          <Input
              type="text"
              id="name" 
              disabled={isWorking}
              {...register("name"  ,{
                required:"This field is required"
          })}/>
        </FormRow>

        <FormRow label="Maximum Capacity" error ={errors?.maxCapacity?.message}>
          <Input type="number"
                  id="maxCapacity" 
                  disabled={isWorking}
                  {...register("maxCapacity",{
                required:"This field is required",
                min:{value:1 ,message:'Capacity should at least one'}
          })}/>
        </FormRow>

        <FormRow label="Regular Price" error ={errors?.regularPrice?.message}>
          <Input type="number"
                  id="regularPrice" 
                  defaultValue={0}
                  disabled={isWorking}
                  {...register("regularPrice",{
                required:"This field is required"
          })}/>
        </FormRow>

        <FormRow label="Discount" error ={errors?.discount?.message}>
          <Input type="number"
                  id="discount"
                  defaultValue={0}
                  disabled={isWorking}
                  {...register("discount",{
                required:"This field is required",
                validate:(value)=>value <=  getValues().regularPrice || 'Discount should be less than regular Price'
          })}/>
        </FormRow>

        <FormRow label="Description for website" error ={errors?.description?.message}>
          <Input type="text"
                  id="description"
                  disabled={isWorking} 
          {...register("description",{
                required:isEditSession ?false :"This field is required"
          })}/>
        </FormRow>

        <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

        <Button disabled={isCreating}>{isCreating ?"Edit cabin":"Create New Cabin"}</Button>
      </Form>
  )
}

export default CreateCabinForm
