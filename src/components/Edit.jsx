import { Form } from "react-final-form";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import CarForm from "./CarForm";
import { updateCar } from "./actions";

import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  const { cars } = state;
  const selectedCar = cars.find((c) => c.id == ownProps.match.params.id);
  return { selectedCar };
}

function Edit(props) {
  const selectedCar = props.selectedCar;
  const submitHandler = (values) => {
    props.updateCar(values);
    props.history.push("/");
  };

  return (
    <>
      <br />
      <Form
        component={CarForm}
        onSubmit={submitHandler}
        initialValues={selectedCar}
      />
      <Container>
        <Link to="/">
          <Button color="danger">Back</Button>
        </Link>
      </Container>
    </>
  );
}

export default connect(mapStateToProps, { updateCar })(Edit);
