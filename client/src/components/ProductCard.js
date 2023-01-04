import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/ProductCard.css'
const ProductCard = ({product}) => {
    const { id, title, price,description, category,image,rating  } = product;
    // console.log(id)
  return (
    



    <NavLink to={`details/${id}`}>
    <div key={id} className='card'>
    <div className='cardimage'>
    <img src={image} alt="img" />
    <p className='category'>{category}</p>

    </div>
    <div className='card-data'>
    <div className='card-data-flex'>
        <h3>{title}</h3>
        <p className='card-data--price'>{price}</p>
    </div>
    </div>

    </div>

    </NavLink>
    )
    }

export default ProductCard