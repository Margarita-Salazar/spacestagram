import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import AppHeader from './components/Header';
import PhotoCard from "./components/PhotoCard";

const API_KEY = process.env.REACT_APP_API_KEY || "DEMO_KEY";

function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`)
      .then(response => {
        setData(response.data);
        setloading(false);
      })
      .catch(error => {
        console.log(error.message);
      });

  }, []);

  return (
    <>
      <AppHeader />
      {loading ?
        <div className="loading">Loading...</div>
        : data.map(card => {
          return (
            <PhotoCard key={card.title} data={card} />
          );
        })}
    </>
  );
}

export default App;
