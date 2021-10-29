import React, { useEffect } from 'react';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { Button } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';

// Import IndexDB helper which will allow the app to talk
// to the database
import { idbPromise } from '../../utils/helpers';


function CategoryMenu({}) {

  const state = useSelector((state) => {
    return state
  });
  const dispatch = useDispatch();

  const { categories } = state;
  // loading will be used for offline capabilities
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      // also add to indexDB
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      console.log("I am offline")
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });

    }
  }, [loading, categoryData, dispatch]);

  const handleClick = (id,name) => {
    if (name!=='All'){
      dispatch({
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: id
      });
    }
    else{
      dispatch({
        type: UPDATE_CURRENT_CATEGORY,
        categories: categoryData.categories
      });
    }
    
  };

  // on click before global state was setCategory(item._id);
  // now is handleClick(item._id);

  return (
    <div class="menu my-2">
      <h2>Filter by</h2>
      {categories.map(item => (
        <button class="item mx-2" 
          key={item._id}
          onClick={() => {
            handleClick(item._id,item.name);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu ;
