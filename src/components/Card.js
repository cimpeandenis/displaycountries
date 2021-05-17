import React from "react";
import { Link, useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/SingleCountry", { alpha: props.alpha3Code });
  };
  // console.log(props);
  return (
    <>
      <article className="card">
        <img src={props.flag} />
        <footer>
          <div className="card-info">
            <div className="card-sub-info">
              <h2>Country </h2>
              <p>{props.name}</p>
            </div>
            <div className="card-sub-info">
              <h2>Capital</h2>
              <p>{props.capital}</p>
            </div>
            <div className="card-sub-info">
              <h2>Region</h2>
              <p>{props.region}</p>
            </div>
            <div className="card-sub-info">
              <h2>Population</h2>
              <p>{props.population}</p>
            </div>
            <button class="button" onClick={onClick}>
              <span>Details</span>
            </button>
          </div>
        </footer>
      </article>
    </>
  );
};

export default Card;
