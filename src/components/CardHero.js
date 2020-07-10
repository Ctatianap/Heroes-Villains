import React from "react";
import { Link } from "react-router-dom";

const CardHero = ({ name, img, slug, editor }) => {
  return (
    <>
      <Link to={`infoHero/${slug}`}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={img} className="card-img" alt={name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{name}!!</h3>
                <p className="card-text">{editor}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardHero;
