import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
  addToCart,
} from "./../Redux/actions/actions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, description, price, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct()); 
    }; // eslint-disable-next-line
  }, [productId]);

  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <Link
          style={{
            padding: "10px",
            margin: "2rem 3rem",
            borderRadius: "5px",
            backgroundColor: "lightGray",
            color: "black",
          }}
          to="/"
        >
          Back
        </Link>

        {Object.keys(product).length === 0 ? (
          <>
            <h1 style={{ textAlign: "center" }}>Loading...</h1>
          </>
        ) : (
          <div
            className="ui placeholder segment"
            style={{ width: "75%", margin: "auto auto" }}
          >
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">&</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img
                    className="ui fluid image"
                    src={image}
                    alt={title}
                    style={{
                      width: "300px",
                      height: "350px",
                      margin: "auto",
                      padding: "15px"
                    }}
                  />
                </div>
                <div className="column lp">
                  <h1 className="rp">{title}</h1>
                  <h2>
                    <a className="ui red tag label" href="/">
                      ${price}
                    </a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <button
                    className="ui vertical animated button teal"
                    tabIndex="0"
                    onClick={() => {
                      dispatch(addToCart(product));
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
        )}
      </div>
    </>
  );
};

export default ProductDetails;
