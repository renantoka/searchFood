import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import RecipeTile from "./pages/RecipeTile";
import Label from "./pages/Label";

function App() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);/* 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8); */

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
    getMeals();
    return () => {};
  }, []);

 /*  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setPostsPerPage(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);
 */
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
