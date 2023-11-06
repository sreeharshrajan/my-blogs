import React from 'react';

function CategoryList(props) {
  const { categories } = props;

  const items = [];

  categories.forEach((item, index) => {
    items.push(<li key={index}>{item}</li>);
  });

  return (
    <div>
       <ul>
       <li>{items}</li> 
      </ul>
    </div>
  );
}

export default CategoryList;