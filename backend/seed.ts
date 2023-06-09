import mongoose, { Schema, model } from "mongoose";

const carSchema = new Schema(
  {
    car: new Schema({
      _id: Number,
      img: String,
      model: String,
      price: String,
      brand: String,
      type: String,
    }),
  },
  { versionKey: false }
);
const customerSchema = new Schema({
  customer: new Schema(
    {
      img: String,
      name: String,
      email: String,
      text: String,
    },
    { _id: false }
  ),
});
const catalogSchema = new Schema({
  catalog: new Schema(
    {
      model: String,
      brand: String,
      type: String,
      img: String,
      price: String,
      info: String,
    },
    { _id: false }
  ),
});

const carsData = [
  {
    car: {
      img: "/images/img1.png",
      model: "Mercedes-GL",
      price: "Start per day €200",
      brand: "GL classe",
      type: "SUV",
    },
  },
  {
    car: {
      img: "/images/img2.png",
      model: "Mercedes-S",
      price: "Start per day €250",
      brand: "S classe",
      type: "Sedan",
    },
  },
  {
    car: {
      img: "/images/img3.png",
      model: "Mercedes-ML",
      price: "Start per day €300",
      brand: "ML classe",
      type: "Crossover",
    },
  },
  {
    car: {
      img: "/images/img3.png",
      model: "Mercedes-ML",
      price: "Start per day €350",
      brand: "ML classe",
      type: "Crossover",
    },
  },
  {
    car: {
      img: "/images/img2.png",
      model: "Mercedes-S",
      price: "Start per day €400",
      brand: "S classe",
      type: "Sedan",
    },
  },
  {
    car: {
      img: "/images/img1.png",
      model: "Mercedes-GL",
      price: "Start per day €450",
      brand: "GL classe",
      type: "SUV",
    },
  },
];
const customersData = [
  {
    customer: {
      img: "/images/clientImg1.png",
      name: "Hannery",
      email: "Hanneri@gmail.com",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
  {
    customer: {
      img: "/images/clientImg2.png",
      name: "Channery",
      email: "Channeri@gmail.com",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
  {
    customer: {
      img: "/images/clientImg2.png",
      name: "Cheng",
      email: "Cheng@gmail.com",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
  {
    customer: {
      img: "/images/clientImg1.png",
      name: "Jang",
      email: "Jang@gmail.com",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page",
    },
  },
];
const catalogsData = [
  {
    catalog: {
      model: "Mercedes-GL",
      brand: "GL classe",
      type: "SUV",
      img: "/images/img1.png",
      price: "Start per day €450",
      info: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    },
  },
  {
    catalog: {
      model: "Mercedes-S",
      brand: "S classe",
      type: "SUV",
      img: "/images/img2.png",
      price: "Start per day €400",
      info: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    },
  },
  {
    catalog: {
      model: "Mercedes-ML",
      brand: "ML classe",
      type: "Crassover",
      img: "/images/img1.png",
      price: "Start per day €350",
      info: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    },
  },
  {
    catalog: {
      model: "Mercedes-ML",
      brand: "ML classe",
      type: "Crassover",
      img: "/images/img1.png",
      price: "Start per day €350",
      info: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    },
  },
  {
    catalog: {
      model: "Mercedes-S",
      brand: "S classe",
      type: "SUV",
      img: "/images/img2.png",
      price: "Start per day €400",
      info: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    },
  },
  {
    catalog: {
      model: "Mercedes-GL",
      brand: "GL classe",
      type: "SUV",
      img: "/images/img1.png",
      price: "Start per day €450",
      info: "Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
    },
  },
];

export const Car = model("Car", carSchema);
export const Customers = model("Customers", customerSchema);
export const CatalogItems = model("CatalogItems", catalogSchema);

carsData.map((carData) => {
  return Car.create(carData);
});
customersData.map((customerData) => {
  return Customers.create(customerData);
});
catalogsData.map((catalogData) => {
  return CatalogItems.create(catalogData);
});

mongoose.disconnect();
