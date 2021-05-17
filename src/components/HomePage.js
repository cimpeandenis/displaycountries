import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import axios from "axios";
import "../style/HomePage.css";

const HomePage = (props) => {
  const [data, setData] = useState();
  const [haveData, setHaveData] = useState(false);

  useEffect(async () => {
    const result = await axios("https://restcountries.eu/rest/v2/all");
    setData(result.data);
    setHaveData(true);
  }, []);

  console.log(data);
  let itemsToRender;
  if (haveData) {
    itemsToRender = data.map((item) => {
      return (
        <div className="cardlist">
          <Card key={item.alpha2Code} {...item} />
        </div>
      );
    });
  }
  return (
    <>
      {itemsToRender}
      {/* <h1>welcome home!</h1>
            <Card /> */}
    </>
  );
};

export default HomePage;
