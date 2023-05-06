import React, { useEffect, useState } from "react";
import { getApi } from "@components/APi/Api";
import "../API/Api.scss";
import CardAffiche from "@components/CardAffiche/CardAffiche";

const Affiche = () => {
  const [dataPhoto, setDataPhoto] = useState([]);

  useEffect(() => {
    getApi()
      .then((affiche) => {
        setDataPhoto(affiche);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(dataPhoto);
  return (
    <div className="all">
      {dataPhoto ? (
        <ul>
          {dataPhoto.map((item) => (
            <CardAffiche key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Affiche;

/* import React, { useEffect, useState } from "react";
import { getApi } from "@components/APi/Api";

const Affiche = () => {
  const [dataPhoto, setDataPhoto] = useState([]);

  useEffect(() => {
    getApi()
      .then((affiche) => {
        setDataPhoto(affiche);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(dataPhoto);

  return <div></div>;
};

export default Affiche;
 */
/* const VillagersList = () => {
  const [villagers, setVillagers] = useState([]);
  useEffect(() => {
    getVillagers().then((villager) => {
      setVillagers(villager.slice(0, 15));
    });
  }, []);
  console.log(villagers[0]); */
