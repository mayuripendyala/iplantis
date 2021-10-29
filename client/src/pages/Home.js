import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import { Container } from 'semantic-ui-react';

// Before being managed globally
// const Home = () => {
//   const [currentCategory, setCategory] = useState("");

//   before being managed globally
//   return (
//     <div className="container">
//       <CategoryMenu setCategory={setCategory} />
//       <ProductList currentCategory={currentCategory} />
//     </div>
//   );

 
// };

 // after being managed globally
const Home = () => {
  return (
    <Container className="flex-row space-around ">

      <CategoryMenu class="my-2" />

      <ProductList class="column"/>
    
      <Cart />
    </Container>
  );
};

export default Home;
