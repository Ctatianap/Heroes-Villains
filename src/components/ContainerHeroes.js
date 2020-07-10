import React from "react";
import CardHero from "./CardHero";

const ContainerHeroes = ({ heroes }) => {
  return (
    <div className="container-cards">
      <div className="c-card ">
        {heroes.map((h) => (
          <CardHero
            key={h.id}
            slug={h.slug}
            name={h.name}
            img={h.images.sm}
            editor={h.biography.publisher}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerHeroes;
