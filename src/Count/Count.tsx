import * as React from "react"; 
import ModalForm from "../Box/Modal";
import { Button} from "semantic-ui-react";
interface IForm {
    incrementClick: () => void; 
    decrementClick: () => void; 
    count: number; 

}

const Count: React.FC<IForm> = ({incrementClick,decrementClick, count}) => 
{
    return(
        <React.Fragment> 
            <Button color= "green" onClick = {incrementClick}> + </Button>
            <Button color = "red" onClick = {decrementClick}> -  </Button>
        </React.Fragment>
    )

}
export default Count;