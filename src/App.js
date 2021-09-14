import './App.css';
import PhotoCard from "./PhotoCard";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=2K8UZVJfqs8I7QgzdWde2FXoZWGpwBcBegTpKkP9`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });

  }, []);

  const clickFuntion = () => {
    setLike(!like);
  };


  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <h4>Brought to by NASA’S Astronomy Picture of the Day API </h4>
      </header>
      <PhotoCard data={data} like={like} click={clickFuntion} />
    </div>
  );
}

export default App;
