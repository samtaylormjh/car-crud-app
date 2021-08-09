export const ADD_CAR = "add_car";

export const addCar = (car) => {
  return {
    type: ADD_CAR,
    car: car,
  };
};

export default addCar;
