import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  console.log("Header's Cart", cart);
  const history = useHistory();

  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center" style={{ display: "flex" }}>
          <Link style={{ flexGrow: 1, textDecoration: "none"}} to="/">
            <h2 style={{ margin:'15px', color: "black" }}>Cloth Market</h2>
          </Link>
          <div>
            <button className="Cart-btn" onClick={() => {history.push('/cart')}}>
            {cart.length === 0 ? (
                ""
              ) : (
                <p
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "4px 8px",
                    margin: "-10px -12px",
                    float:'right',
                    borderRadius: "50%",
                  }}
                >
                  {cart.length}
                </p>
              )}
              <ShoppingCartIcon style={{ fontSize: "35px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
