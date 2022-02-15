import { useState } from "react";
import "./searchBar.css";
const { v4: uuidv4 } = require("uuid");

const SearchBar = ({ placeholder, categories }) => {
  const [filteredCategory, setFilteredCategory] = useState([]);

  const handleChange = async (e) => {
    const search = e.target.value;
    const filteredCategories = await categories.filter((category) => {
      if (category.categoryName.toLowerCase().includes(search.toLowerCase())) {
        return category;
      }
      return false;
    });
    if (search.length === 0) {
      return setFilteredCategory([]);
    }
    setFilteredCategory(filteredCategories);
    console.log(filteredCategory);
  };

  return (
    <div className="aaa">
      <div className="inputDiv">
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="categoriesSearchContainer">
        {filteredCategory.length !== 0 && (
          <div className="categoriesSearchDiv">
            <div className="categoriesSearch">
              {filteredCategory
                .map((category) => {
                  return (
                    <p key={uuidv4()} className="eachCategory">
                      {category.categoryName}
                    </p>
                  );
                })
                .slice(0, 4)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
