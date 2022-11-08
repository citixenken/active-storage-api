import { AppContext } from "../App";
import React, { useContext, useEffect } from "react";

function LatestImage() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:3000/latest")
      .then((res) => res.json())
      .then((data) => {
        setLatestPost(data.image_url);
      })
      .catch((err) => console.error(err));
  }, [latestPost]);

  return (
    <div>
      <img src={latestPost} alt="latest post" className="latest-image" />
    </div>
  );
}

export default LatestImage;
