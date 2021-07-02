import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { removeToCart } from "./../Redux/actions/actions";
import Blank_Cart from "./../assets/blank-cart.jpg";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  function Loading() {
    return (
      <div style={{ marginTop: "15rem", textAlign: "center" }}>
        <div>
          <img src={Blank_Cart} alt="..." width="800" />
        </div>
        <button className="btn btn-light">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Back To Home
          </Link>
        </button>
      </div>
    );
  }

  return (
    <>
      {cart.length === 0 ? (
        Loading()
      ) : (
        <div style={{ marginTop: "10rem" }} className="container">
          <h1 className="text-center">Dashboard</h1>
          <hr style={{ border: "2px solid green", marginBottom: "25px" }} />
          <table className="table table-hover table-fixed">
            <thead>
              <tr>
                <th scope="col" width="10" className="text-center">
                  Product Id
                </th>
                <th scope="col" width="40" className="text-center">
                  Product Name
                </th>
                <th scope="col" width="20" className="text-center">
                  Product Image
                </th>
                <th scope="col" width="10" className="text-center">
                  Product Price
                </th>
                <th scope="col" width="10" className="text-center">
                  Quantity
                </th>
                <th scope="col" width="10" className="text-center">
                </th>
                <th scope="col" width="10" className="text-center">
                  Total Price
                </th>
                
                <th scope="col" width="10" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            {/* //Demo */}
            {cart.map(({ id, title, image, price, quantity, totalPrice }) => (
              <tbody key={id}>
                <tr>
                  <td className="text-center">{id}</td>
                  <td>{title}</td>
                  <td className="text-center">
                    <img src={image} alt="product" width="75" />
                  </td>
                  <td className="text-center">
                    <b>{price} $</b>
                  </td>
                  <td className="text-center">
                    {quantity} 
                  </td>
                  <td className="text-center">
                    x
                  </td>
                  <td className="text-center">
                    <b>{totalPrice || price * quantity} $</b>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => dispatch(removeToCart(id))}
                    >
                      <DeleteForeverIcon
                        style={{ fontSize: "25px", color: "red" }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </>
  );
};

export default Cart;
