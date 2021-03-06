export const ADD_CAR = "ADD_CAR";
export const UPDATE_CAR = "UPDATE_CAR";
export const DELETE_CAR = "DELETE_CAR";

export const addCar = (car) => {
  return {
    type: ADD_CAR,
    car: car,
  };
};

export const updateCar = (car) => {
  return {
    type: UPDATE_CAR,
    car: car,
  };
};

export const deleteCar = (car) => {
  return {
    type: DELETE_CAR,
    car: car,
  };
};
