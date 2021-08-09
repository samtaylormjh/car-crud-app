import { ADD_CAR, UPDATE_CAR } from "./actions";

const placeholderCars = [
  {
    id: 1,
    number_plate: "YM3988",
    model: "HONDA",
    make: "CIVIC",
  },
  {
    id: 2,
    number_plate: "PLU15",
    model: "Mitsubishi",
    make: "Lancer",
  },
  {
    id: 3,
    number_plate: "HBK472",
    model: "TOYOTA",
    make: "CAMRY",
  },
  {
    id: 10,
    number_plate: "HU3886",
    model: "NISSAN",
    make: "MARCH",
  },
  {
    id: 5,
    number_plate: "FEU432",
    model: "VOLKSWAGEN",
    make: "golf",
  },
];

const carsReducer = (state = placeholderCars, action) => {
  switch (action.type) {
    case ADD_CAR: {
      const newState = [...state, action.car];
      return newState;
    }
    case UPDATE_CAR: {
      const { car: newCar } = action;
      // console.log(newCar);
      // console.log(state);
      let newState = [...state];
      const indexToUpdate = newState.findIndex((c) => c.id == newCar.id);
      newState[indexToUpdate] = newCar;
      return newState;
    }
    default:
      return state;
  }
};

export default carsReducer;
