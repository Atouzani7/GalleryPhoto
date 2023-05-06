const ACCESS_KEY = "9zgXOCJrtsTEp-Djy4SaTa3549N7fR27-2J9NzxjKeM";
const getApi = () => {
  return fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`).then(
    (response) => response.json()
  );
  /* .then((data) => console.log(data)) */
  /* .catch((error) => console.error(error)) */
};
export default getApi;

/* const ACCESS_KEY = "9zgXOCJrtsTEp-Djy4SaTa3549N7fR27-2J9NzxjKeM";
const getApi = () => {
  return fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
export { getApi }; */

/* import React, { useEffect, useState } from "react";
import "./Api.scss";

function Api() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=9zgXOCJrtsTEp-Djy4SaTa3549N7fR27-2J9NzxjKeM"
    )
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []);
  // console.log(data);

  return (
    <div className="all">
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id} className="wrap">
              <img alt="img" src={item.urls.regular} className="imgGallery" />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Api; */
