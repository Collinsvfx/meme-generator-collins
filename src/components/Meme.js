export default function Meme() {
  return (
    <div className="meme-container">
      <div>
        <form className="two-inputs">
          <input
            type="text"
            name="input 1"
            placeholder="Top text"
            className="first-input"
          />
          <input type="text" name="input 2" placeholder="Bottom text" />
        </form>
      </div>
      <div className="the-btn">
        <button>Get a new meme image 🖼</button>
      </div>
    </div>
  );
}
