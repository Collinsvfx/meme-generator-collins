import memesData from "../memesData";
import React from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // const url = memesArray[randomNumber].url;
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="meme-container">
      <div>
        <div className="two-inputs">
          <input
            type="text"
            name="input 1"
            placeholder="Top text"
            className="first-input"
          />
          <input type="text" name="input 2" placeholder="Bottom text" />
        </div>
      </div>
      <div className="the-btn">
        <button onClick={getImage}>Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} alt="" className="meme-image" />
    </div>
  );
}
