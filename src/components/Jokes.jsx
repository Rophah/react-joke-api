import { useState, useEffect } from "react";
import spinner from "../assets/spinner1.jpg"


const Jokes = () => {

  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url= "https://api.chucknorris.io/jokes/random";

  const getJoke = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) =>{
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setJoke(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light">
        <h1 className="--text-center">Random Jokes Generator</h1>
        <div className="--line"></div>
        {isLoading ? (<div className="--center-all">
        <img src={spinner} alt="loading" width={100}/>
        </div>) : (<div className="--center-all">
        <h3>Joke id: {joke.id}</h3>
        <p>{joke.value}</p>
        </div>)}    
        
        <br/>
        <button className="--btn --btn-primary --center-all" onClick={getJoke}>Generate Joke</button>
        <br/>
      </div>
    </section>
  );
};

export default Jokes;
