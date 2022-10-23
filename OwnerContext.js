import React, { useEffect, useState } from "react";
const DATA = [
  {
    name: "Mike",
    email: "mike@email.com",
    phone: "123-123-4567",
    address: "123 M St fairfield IA",
    password: "123",
    image:
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png",
    food: [
      {
        url: "https://www.seriouseats.com/thmb/IO89-GKyidSzlW4O_HN3RS2voqk=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__06__20120629-pho-food-lab-19-c94bfd465387441f83ee8939fdf67dbe.jpg",
        name: "Pho",
        origin: "Vietnamese",
        price: 9,
        date: "2021-10-23",
      },
      {
        url: "https://steamykitchen.com/wp-content/uploads/2008/02/vietnamese-pho-recipe-2-500x396.jpg",
        name: "Pho2",
        origin: "Vietnamese",
        price: 11,
        date: "2021-10-23",
      },
      {
        url: "https://glebekitchen.com/wp-content/uploads/2019/01/beefphobowlfront.jpg",
        name: "Pho3",
        origin: "Vietnamese",
        price: 13,
        date: "2021-10-23",
      },
      {
        url: "https://glebekitchen.com/wp-content/uploads/2019/01/beefphobowlfront.jpg",
        name: "Pho4",
        origin: "Vietnamese",
        price: 13,
        date: "2021-10-23",
      },
    ],
    notes: [
      { header: "text header", comment: "my 1 commets", date: "2021-10-23" },
      { header: "text header", comment: "my 2 commets", date: "2021-10-23" },
    ],
  },
  {
    name: "Erdene",
    email: "erdene@email.com",
    phone: "123-123-4567",
    address: "123 M St fairfield IA",
    password: "123",
    image:
      "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png",
    food: [
      {
        url: "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png",
        name: "Pho2",
        origin: "Vietnamese",
        price: 9,
        date: "2021-10-23",
      },
    ],
    notes: [
      { header: "text header", comment: "my comments", date: "2021-10-23" },
    ],
  },
];

const FoodContext = React.createContext();

export function FoodStore({ children }) {
  const [data, setdata] = useState(DATA);

  // login API fetch(URL + "/owners/login") method:"POST"
  // register API fetch(URL + "/owners") method:"PUT/PATCH"
  // list food API fetch(URL + "/owners/food")
  // add food API fetch(URL + "/owners/food") method:"PUT/PATCH"
  // edit food API fetch(URL + "/owners/food/name") method:"PUT/PATCH"
  // delete food API fetch(URL + "/owners/food/name") method:"PUT/PATCH"
  // list note API fetch(URL + "/owners/note")
  // add note API fetch(URL + "/owners/note") method:"PUT/PATCH"

  useEffect(() => {
    setdata(DATA);
  }, []);

  return (
    <FoodContext.Provider value={{ data }}>{children}</FoodContext.Provider>
  );
}

export default FoodContext;
