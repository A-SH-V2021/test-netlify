import React from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { query, searchHandle } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e)=>searchHandle(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
