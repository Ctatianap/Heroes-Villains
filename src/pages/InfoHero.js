import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  faArrowLeft,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveInfo } from "../LocalStorageService";

const InfoHeroe = ({ heroes }) => {
  const { slug } = useParams();
  const [hero, setHero] = useState(undefined);
  const [votesLike, setVotesLike] = useState(0);

  let iconLike = "like-icon";
  let iconDisLike = "dislike-icon";

  if (votesLike > 0) {
    iconLike = "like-active";
    iconDisLike = "dislike-icon";
  } else if (votesLike < 0) {
    iconLike = "like-icon";
    iconDisLike = "dislike-active";
  }

  useEffect(() => {
    setHero(heroes.find((hero) => hero.slug === slug));
  }, [setHero, heroes, slug]);

  const vote = (num) => {
    setVotesLike(num);

    if (num > 0) {
      saveInfo(`${hero.name}:`, "Me gusta");
    } else {
      saveInfo(`${hero.name}:`, "No me gusta");
    }
  };

  if (hero) {
    const name = hero.name;
    const img = hero.images.sm;
    return (
      <div>
        <div>
          <Link to="/">
            <FontAwesomeIcon className="back" icon={faArrowLeft} />
          </Link>
        </div>
        <div className="row info-card">
          <div>
            <img src={img} className="info-img" alt={name} />
          </div>
          <div className="info-div">
            <div className="div-datos">
              <h3>{name}</h3>
              <p className="info-p">
                {hero.biography.fullName} <br />
                <span>Occupation:</span> {hero.work.occupation} <br />{" "}
                <span>Gender:</span> {hero.appearance.gender} |{" "}
                <span>Race:</span> {hero.appearance.race} |{" "}
                <span>Eye Color:</span>
                {hero.appearance.eyeColor} | <span>Hair Color:</span>
                {hero.appearance.hairColor}
              </p>
            </div>
            <div className="div-botones">
              <p className="like-text">¿Te gusta?</p>
              <FontAwesomeIcon
                icon={faThumbsUp}
                onClick={() => vote(1)}
                className={iconLike}
              />
              <FontAwesomeIcon
                icon={faThumbsDown}
                onClick={() => vote(-1)}
                className={iconDisLike}
              />
              <p className="editor">{hero.biography.publisher}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default InfoHeroe;
