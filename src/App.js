import './App.css';
import PhotoCard from "./PhotoCard";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });

  }, []);

  return (
    <div className="App">
      <header className="App-Header">
        <h1>Spacestagram</h1>
        <h4>Brought to by NASA’S Astronomy Picture of the Day API </h4>
      </header>
      {data.map(card => {
        return (
          <PhotoCard key={card.title} data={card} />
        );
      })}
    </div>
  );
}

export default App;
