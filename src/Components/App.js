import React from "react";
import Heading from "./Heading";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SongCard from "./SongCard";

function App() {
  const image = "https://picsum.photos/200";
  return (
    <div>
      <NavBar />
      <Heading />

      {/* <img src={image + "?grayscale"} alt="random-image" />
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul> */}
      <SongCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/1024px-The_Fabs.JPG" artist="Beatles" song="Don't let me Down" album="The White Album" />
      <SongCard img="https://upload.wikimedia.org/wikipedia/commons/b/b9/Brandi-carlile1.jpg" artist="Brandi Carlile" song="That Wasn't Me" album="	Bear Creek" />
      <SongCard img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Joss_Stone_%40_Stockholm_jazz_fest_01_new.jpg/800px-Joss_Stone_%40_Stockholm_jazz_fest_01_new.jpg" artist="Joss Stone" song="Right to be Wrong" album="Mind, Body & Soul" />
      <Footer />
    </div>
  );
}

export default App;
