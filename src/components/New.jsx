import { Form } from "react-final-form";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import CarForm from "./CarForm";
import { addCar } from "./actions";

import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

function New(props) {
  console.log(props);
  const submitHandler = (values) => {
    console.log(values);
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
