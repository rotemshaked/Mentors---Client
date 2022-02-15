import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../components/category/category";
import SearchBar from "../components/homePage/searchBar";
import BackButton from "../components/backButton/backButton";
import HomePageSentence from "../components/homePage/homePageSentence";
import("../components/homePage/homePage.css");

function HomePage() {
  const [categories, setCategories] = useState("");
  // const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    axios
      .get("https://distracted-euclid-f15421.netlify.app/api/categories")
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((error) => {
        console.log("Can't get the categories from server", error);
      });
  }, []);

  // const handleClick = (e) => {
  //   setCategoryId(e.target);
  // };

  return (
    <div>
      <div className="homePageImage">
        <HomePageSentence
          firstLine="You are not alone"
          secondLine="Find a Mentor"
        />
        <div className="homePageSearchBar">
          <SearchBar placeholder="Search Category" categories={categories} />
        </div>
      </div>
      <div className="homePageSecondPart">
        <div className="categories">
          {categories !== "" &&
            categories.map((category) => {
              // console.log(category._id);
              return (
                <Link to={`/${category.categoryName}`} key={category._id}>
                  <Category
                    // onClick={handleClick}
                    classNameImage={`${category.categoryName}`}
                    categoryName={category.categoryName}
                  />
                </Link>
              );
            })}
        </div>
        <BackButton />
      </div>
    </div>
  );
}

export default HomePage;
