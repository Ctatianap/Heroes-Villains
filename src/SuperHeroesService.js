import axios from "axios";
import { getInfo, saveInfo } from "./LocalStorageService";

let getSuperHeroes = ({ page, pageSize }) => {
  const superHeroes = getInfo("superHeroes");

  if (!superHeroes) {
    return axios
      .get("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
      .then((resultado) => {
        saveInfo("superHeroes", resultado.data);
        return resultado.data.slice((page - 1) * pageSize, page * pageSize);
      });
  }
  return Promise.resolve(
    superHeroes.slice((page - 1) * pageSize, page * pageSize)
  );
};

export default { getSuperHeroes };
