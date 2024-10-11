import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

//function AddCabin() {
//    const [isOpenModal, setIsOpenModal] = useState(false);

//    return (
//        <div>
//            <Button onClick={() => setShowForm((isOpenModal) => !isOpenModal)}>Add new cabin</Bu>
//            {isOpenModal &&
//                <Modal onClose={() => setIsOpenModal(false) }>
//                    <CreateCabinForm/>
//               </Modal>}

//        </div>
//    );
//}
function AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.Open opens="cabin-form">
                    <Button>Add new cabin</Button>
                </Modal.Open>
                <Modal.Window name="cabin-form">
                    <CreateCabinForm />
                </Modal.Window>
            </Modal>
        </div>
    );
}

export default AddCabin;