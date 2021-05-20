import React, { Component, useState, useEffect } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [visible, change] = useState(false);
  const [listofstates, x] = useState([false, false, false, false]);
  const [vis, hange] = useState(false);
  const [listofcities, y] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);
  function hell(index) {
    if (listofstates[index] == true) {
      listofstates[index] = !listofstates[index];
      if (visible == false) {
        change(true);
      } else {
        change(false);
      }
    } else {
      listofstates[index] = !listofstates[index];
      if (visible == false) {
        change(true);
      } else {
        change(false);
      }
    }
  }
  function gell(index, index1) {
    if (listofcities[index][index1] == true) {
      listofcities[index][index1] = !listofcities[index][index1];
      if (vis == false) {
        hange(true);
      } else {
        hange(false);
      }
    } else {
      listofcities[index][index1] = !listofcities[index][index1];
      if (vis == false) {
        hange(true);
      } else {
        hange(false);
      }
    }
    console.log(listofstates);
    console.log(listofcities);
  }

  return (
    <div id="main">
      <ul>
        {states.map((state, index) => (
          <li>
            <button onClick={() => hell(index)}>{state.name}</button>
            <ul>
              {listofstates[index] == true
                ? state.cities.map((city, index1) => (
                    <li>
                      <button onClick={() => gell(index, index1)}>
                        {city.name}
                      </button>
                      <ul>
                        {listofcities[index][index1] == true
                          ? city.towns.map((j) => (
                              <li>
                                <button>{j.name}</button>
                              </li>
                            ))
                          : null}
                      </ul>
                    </li>
                  ))
                : null}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
