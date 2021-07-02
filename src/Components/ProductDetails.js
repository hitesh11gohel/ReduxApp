import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
  addToCart,
  addQuantity,
  addProductWithQuantity,
} from "./../Redux/actions/actions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { id, image, title, description, price, category } = product;
  const [totalPrice, setTotalPrice] = useState(price);

  // const cartItems = useSelector((state) => state.productCartQuantity);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    }; // eslint-disable-next-line
  }, [productId]);

  useEffect(() => {
    setTotalPrice(price * quantity); // eslint-disable-next-line
  }, [quantity]);

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
              <div className="ui vertical divider">
                <span style={{ fontSize: "20px" }}>&</span>
              </div>
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
                      padding: "15px",
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
                  <h3
                    className="ui brown block header"
                    style={{ fontSize: "25px" }}
                  >
                    {category}
                  </h3>

                  <div style={{ display: "inline-flex", margin: "10px 0px" }}>
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        if (quantity === 1) {
                        } else {
                          setQuantity(quantity - 1);
                        }
                        dispatch(addQuantity(quantity, totalPrice));
                      }}
                    >
                      -
                    </button>
                    <h4 style={{ padding: "0px 15px" }}>{quantity}</h4>
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        setQuantity(quantity + 1);
                        dispatch(addProductWithQuantity(product));
                        dispatch(addQuantity(quantity, totalPrice));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p style={{ fontSize: "13px" }}>{description}</p>

                  <div>
                    <button
                      className="btn add-to-cart"
                      onClick={() => {
                        debugger;
                        if (quantity > 1) {
                          dispatch(
                            addToCart({
                              id,
                              title,
                              description,
                              image,
                              price,
                              category,
                              quantity,
                              totalPrice,
                            })
                          );
                        } else {
                          dispatch(
                            addToCart({
                              id,
                              title,
                              description,
                              image,
                              price,
                              category,
                              quantity,
                            })
                          );
                        }
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
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
