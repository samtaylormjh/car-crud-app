import { Field } from "react-final-form";
import { Container, FormGroup, Label, Input, Col, Button } from "reactstrap";

const required = (value) => (value ? undefined : "Required");

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export default function CarForm(props) {
  return (
    <div>
      <Container>
        <FormGroup row>
          <Label for="number_plate" sm={2}>
            Number Plate
          </Label>
          <Col sm={3}>
            <Field
              component={InputField}
              name="number_plate"
              label="Number Plate"
              validate={composeValidators(required)}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="make" sm={2}>
            Make
          </Label>
          <Col sm={3}>
            <Field
              component={InputField}
              name="make"
              label="Make"
              validate={composeValidators(required)}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="model" sm={2}>
            Model
          </Label>
          <Col sm={3}>
            <Field
              component={InputField}
              name="model"
              label="Model"
              validate={composeValidators(required)}
            />
          </Col>
        </FormGroup>
        <br />
        <Button type="submit" onClick={props.handleSubmit}>
          Submit
        </Button>
      </Container>
    </div>
  );
}

const InputField = (props) => {
  const { input, meta } = props;
  return (
    <div>
      <FormGroup>
        <Input
          valid={meta.touched && meta.valid}
          invalid={meta.touched && meta.invalid}
          {...input}
          type="text"
          placeholder={props.label}
        />
      </FormGroup>
    </div>
  );
};
