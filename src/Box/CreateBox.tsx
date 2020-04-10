import * as React from "react";
import { InputBox } from "./Input";
//yup
import { CreateSchema } from "./CreateSchema";
//Form
import { Formik, Form } from "formik";
//Styles
import { Message, Button } from "semantic-ui-react";



const CreateBox: React.FC = () => {
  //State for displaying success message if data from graphql is ok.
  const [hidden, setHidden] = React.useState(false);

  const displayMessage = () => {
    const timeout = setTimeout(() => {
      setHidden(true);
    }, 3000);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          boxName: "",
          length: "40",
          width: "8",
          x_position: 0,
          y_position: 0,
          color: "red",
        }}
        validationSchema={CreateSchema}
        onSubmit={({ boxName, length, width, color }, { resetForm }) => {
          const lengthNum = parseInt(length);
          const widthNum = parseInt(width);
          resetForm();
          displayMessage();
          setHidden(false);

          //graphql mutation for creating a box
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <InputBox touched={touched} errors={errors}></InputBox>

            {/* data form graphql, if data ok success message will display */}
            {/* {data ? ( */}
            <Message hidden={hidden} size="large" color="green">
              Box saved!
            </Message>
            {/* ) : null} */}

            <Button type="submit"> Create</Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default CreateBox;
