import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./../Redux/actions/actions";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const renderList = products.map(({ id, title, image, price, category }) => {
    return (
      <div
        key={id}
        className="four wide column"
        style={{ marginTop: "1rem", height: "400px" }}
      >
        <div className="ui link cards" style={{ marginBottom: "1rem" }}>
          <div className="card">
            <Link to={`/products/${id}`}>
              <div className="image">
                <img
                  src={image}
                  alt={title}
                  style={{
                    margin: "5px 50px",
                    height: "200px",
                    width: "150px",
                    padding: "10px",
                  }}
                />
              </div>
            </Link>

            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
              <button
                className="ui vertical animated button teal"
                tabIndex="0"
                style={{ width: "100%", marginTop: "5px" }}
                onClick={() => {
                  dispatch(addToCart({id, title, image, price, category }));
                }}
              >
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add To Cart</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
