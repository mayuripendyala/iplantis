import React from "react";
import { Link } from "react-router-dom";
import { Table, Divider,Grid } from 'semantic-ui-react'

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">
          ← Back to Plants
          </Link>

        {user ? (
          <>
            <h2>Order History for {user.firstName} {user.lastName}</h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                <div className="flex-row">
                  {order.products.map(({ _id, quantity, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}  X  {quantity/10}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

      </div>

    </>)
};

export default OrderHistory;
