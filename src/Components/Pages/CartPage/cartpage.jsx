import React from "react";
import "../CartPage/cartpage.css";

const CartPage = () => {
  return (
    <div className="cp-whole">
      <h1 className="cp-h1">Cart Details</h1>
      <table className="cp-table">
        <tr className="cp-tr1">
          <th>Items</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>

        <tr className="cp-tr2">
          <td>
            <div className="shrt">Shirt</div>
          </td>

          <td>
            <div className="shrt">1</div>
          </td>
          <td>
            <div className="shrt">2000</div>
          </td>
          <td>
            <div className="shrt">2000</div>
          </td>
        </tr>
        <tr className="cp-tr3">
          <td>
            <div className="shrt"></div>
          </td>

          <td>
            <div className="shrt"></div>
          </td>
          <td>
            <div className="shrt">Net Amount</div>
          </td>
          <td>
            <div className="shrt">2000</div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CartPage;
