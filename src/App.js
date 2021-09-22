import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");

  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  async function getRecipes() {
    var result = await axios.get(url);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          className="app__submit"
          type="submit"
          value="search"
        />
      </form>
    </div>
  );
}

export default App;
