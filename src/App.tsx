import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import Count from "./Count/Count";
import ModalForm from "./Box/Modal";

//style-components
import { Header, HeaderText} from "./style-components/Header";
import { SideBar } from "./style-components/SideBar";
import { Label } from "./style-components/FormStyles";

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <Header> <HeaderText> React examples </HeaderText></Header>
      <Divider/>
      <SideBar>
        {/* simple count example} */}
        <Label> Count example: </Label>
        <Divider hidden />
        <Count
          count={count}
          incrementClick={increment}
          decrementClick={decrement}
        ></Count>
        <Label> {count}</Label>
        <Divider />
        {/* form example. using formik, yup for type validation } */}
        <Label> Form example: </Label>
        <Divider hidden />
        <ModalForm />
        <Divider />
      </SideBar>
    </React.Fragment>
  );
};

export default App;
