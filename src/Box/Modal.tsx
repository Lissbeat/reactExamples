import * as React from "react";
import Modal from "@bdenzer/react-modal";
import { Button} from "semantic-ui-react";

import CreateBox from "./CreateBox"; 



const modalStyle = {
    animationTime: 400,
    modalHeader: {
      backgroundColor: 'white'
    
    },
    modalTitle: {
      color: 'black', 
      
    }, 
    modalBody: {
      backgroundColor: 'black'
    }
    

}

const ModalForm: React.FC = () => {
 

  const [shouldShowModal, setModal] = React.useState(false);

  const closeModal= () =>  {
    setModal(false);
  }

  const openModal =()  =>{
    setModal(true);

  }

  return (
    <React.Fragment>
      <Modal closeModal={closeModal} shouldShowModal={shouldShowModal} customStyle={modalStyle} >
        <CreateBox/>
      </Modal>
      <Button color= "blue" onClick={openModal}>Create a box</Button>
      </React.Fragment>
  );
};

export default ModalForm;
