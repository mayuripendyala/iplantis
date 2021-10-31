import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
// commented out in favor of redux logic
//import { useStoreContext } from "../../utils/GlobalState";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import { Card, Image, Button } from 'semantic-ui-react'

function ProductItem(item) {
  // commented out in favor of redux logic
  //const [state, dispatch] = useStoreContext();
  const state = useSelector((state) => {
    return state
  });
  const dispatch = useDispatch();

  const { cart } = state;

  // deconstruct item object
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;


 
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    // <div class="ui card mx-2">
    //   <div class="image">
    //     <Link to={`/products/${_id}`}>
    //       <img
    //         alt={name}
    //         src={`/images/${image}`}
    //       />
          
    //     </Link>
    //   </div>

    // <div class="content">
    //   <p>{name}</p>
    //   <div class="description">
    //     <span> AUD${price}</span>
    //   </div>
     
    //   <div class="description">{quantity} {pluralize("item", quantity)} in stock</div>
    // </div>
      
    //   <div class="description">
      
    //   <button onClick={addToCart}>Add to cart</button>
       
    //   </div>
      
    // </div>

    <Card color='green' >
      <Link to={`/products/${_id}`}>
          <Image size="medium"
             alt={name}
            src={`/images/${image}`}
            wrapped ui={false} 
          />
     </Link>
      <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span> AUD${price}</span>
      </Card.Meta>
      <Card.Description>
      {quantity} {pluralize("item", quantity)} in stock
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button onClick={addToCart}> Add to cart</Button>
    </Card.Content>
    </Card>
  );
}

export default ProductItem;
