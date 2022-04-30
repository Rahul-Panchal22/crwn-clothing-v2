import "./category-item.styles.scss";

const CategoryItem = (props) => {
  return (
    <div className={`${props.category.size} category-container`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${props.category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2 className="title">{props.category.title.toUpperCase()}</h2>
        <p className="sub-title">SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
