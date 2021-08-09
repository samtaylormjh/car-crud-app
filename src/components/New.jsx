import { Form } from "react-final-form";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import CarForm from "./CarForm";
import { addCar } from "./actions";

import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function New(props) {
  const submitHandler = (values) => {
    const ids = props.cars.map((c) => c.id);
    values.id = Math.max(...ids) + 1;
    props.addCar(values);
    props.history.push("/");
  };

  return (
    <>
      <br />
      <Form component={CarForm} onSubmit={submitHandler} />
      <Container>
        <Link to="/">
          <Button color="danger">Back</Button>
        </Link>
      </Container>
    </>
  );
}

export default connect(mapStateToProps, { addCar })(New);
