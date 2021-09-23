import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeTile from "./pages/RecipeTile";
import Label from "./pages/Label";

function App() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}&strCategory=${Label}`;

  async function getMeals() {
    let result = await axios.get(url);
    setMeals(result.data.meals);
    console.log(result.data.meals);
    console.log(result.data.meals[1].strCategory);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getMeals();
  };

  useEffect(() => {
    getMeals()
    return () => {
    }
  }, []);



  return (
    <div className="Container">
      <div className="App">
        <form className="app__searchForm" onSubmit={onSubmit}>
          <input
            className="app__input"
            type="text"
            placeholder="enter search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input className="app__submit" type="submit" value="search" />

          <select className="app__labels">
            {meals.map((meal) => (
              <Label meal={meal} />
            ))}
          </select>
        </form>

        <div className="app__meals">

          {meals.map((meal) => {
            return <RecipeTile meal={meal} />;
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
