import { Button, Container, Table } from "reactstrap";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCar } from "./actions";

function mapStateToProps(state) {
  return { cars: state.cars };
}

function Index(props) {
  console.log(props);
  const sortedCars = _.sortBy(props.cars, "id");

  return (
    <Container>
      <br />
      <Link to="/new">
        <Button color="primary">New +</Button>
      </Link>

      <Table hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Number Plate</th>
            <th>Model</th>
            <th>Make</th>
          </tr>
        </thead>
        <tbody>
          {_.map(sortedCars, (car) => (
            <Cars key={car.id} car={car} deleteCar={props.deleteCar} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default connect(mapStateToProps, { deleteCar })(Index);

const Cars = (props) => {
  const { car } = props;

  return (
    <tr>
      <th scope="row">{car.id}</th>
      <td>{car.number_plate}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>
        <Link to={`/${car.id}/edit`}>Edit</Link>
      </td>
      <td>
        <Button
          color="danger"
          onClick={() => {
            props.deleteCar(car);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
