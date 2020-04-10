import * as React from "react";
//formik
import { Field } from "formik";
//Styles
import {
  Segment,
  Grid,
  Divider,
  Label as LabelError,
  Input,
  Checkbox,
} from "semantic-ui-react";
import { Label, InputFieldL } from "../style-components/FormStyles";
import { SelectL, SelectS } from "../style-components/Select";
import { ColorLabel } from "./ColorLabel";

interface IInput {
  errors: any;
  touched: any;
}

export const InputBox: React.FC<IInput> = ({ errors, touched }) => {
  //state for toggle select options
  const [hidden, setHidden] = React.useState(true);
  const selectOptions = () => {
    if (!hidden) {
      setHidden(true);
    }

    else {
      setHidden(false);
    }
  };

  return (
    <React.Fragment>
      <Divider hidden />
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Label>Box Name :</Label>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted>
              <Field
                placeholder="Enter box name..."
                name="boxName"
                type="text"
                as={InputFieldL}
              />
              {errors.boxName && touched.boxName ? (
                <LabelError size="large" color="red" pointing>
                  {errors.boxName}
                </LabelError>
              ) : null}
              <Divider hidden />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Label>Set box size :</Label>
              <Divider hidden />
              <Divider hidden />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted>
              <Field
                placeholder="Enter length..."
                type="number"
                name="length"
                label={{ basic: true, content: "ft" }}
                labelPosition="right"
                as={Input}
              />
              <Divider hidden />
              <Field
                type="number"
                placeholder="Enter width..."
                label={{ basic: true, content: "ft" }}
                labelPosition="right"
                name="width"
                as={Input}
              />
              <Divider hidden />

              <Label>select size</Label>
              <Checkbox onChange={selectOptions}> </Checkbox>

              <Divider hidden />
              <Field as={SelectS} name="length" type="number" hidden={hidden}>
                <option value="40">40</option>
                <option value="20">20</option>
              </Field>

              <Label hidden={hidden}> * </Label>
              <Field as={SelectS} name="width" type="number" hidden={hidden}>
                <option value="8">8</option>
                <option value="10">10</option>
              </Field>
              <Divider hidden />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Label>Select color :</Label>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted>
              <ColorLabel />
              <Field as={SelectL} name="color">
                <option color="red" value="red">
                  Red
                </option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
              </Field>

              <Divider hidden />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};
