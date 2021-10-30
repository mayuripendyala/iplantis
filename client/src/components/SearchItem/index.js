// import React, { useEffect } from 'react';
// import { SEARCH_PRODUCTS } from '../../utils/actions';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_PRODUCTS_NAME } from "../../utils/queries";


// import { useDispatch, useSelector } from 'react-redux';

// // Import IndexDB helper which will allow the app to talk
// // to the database
// import { idbPromise } from '../../utils/helpers';





// function SearchItem(a={}) {
//     const state = useSelector((state) => {
//         return state
//       });
//       const dispatch = useDispatch();
    
//       const { products } = state;
//       // loading will be used for offline capabilities
//       const { loading, data: productsData } = useQuery(QUERY_PRODUCTS_NAME);

//       useEffect(() => {
//         // if categoryData exists or has changed from the response of useQuery, then run dispatch()
//         if (productsData) {
//           console.log(productsData)
//           // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
//           dispatch({
//             type: SEARCH_PRODUCTS,
//             products: productsData
//           });
//           // also add to indexDB
//           // productsData.forEach(product => {
//           //   idbPromise('products', 'put', product);
//           // });
//         } else if (!loading) {
//           console.log("I am offline")
//           idbPromise('products', 'get').then(products => {
//             dispatch({
//               type: productsData,
//               categories: products
//             });
//           });
    
//         }
//       }, [loading, productsData, dispatch]);
    
//     const handleSearch =(text) =>{
//         if (text) {
//           dispatch({
//             type: SEARCH_PRODUCTS,
//             searchtext: text
//           });
//         }
    
//       }


//   return (
    
//     <div class="ui search">
//     <div class="ui icon input">
//       <input class="prompt" type="text" placeholder="Search..."  />
//       <i class="search icon"></i>
//     </div>
   
//   </div>

    
//   );
// }

// export default SearchItem;





