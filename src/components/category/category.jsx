import "./categoryComponent.css";

const Category = (props) => {
  return (
    <button className="category">
      <div
        className={`image-container ${props.classNameImage}`}
        onClick={props.onClick}
      >
        {props.categoryName}
      </div>
    </button>
  );
};

export default Category;
