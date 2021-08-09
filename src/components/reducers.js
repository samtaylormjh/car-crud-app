import ADD_CAR from "./actions";

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
    id: 4,
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
    case ADD_CAR:
      let newState = [...state];
      console.log(newState);
      console.log(action);
      return action.car;
    default:
      return state;
  }
};

export default carsReducer;
