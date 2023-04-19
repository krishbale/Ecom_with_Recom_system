import React from 'react'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { useCartContext } from '../context/Cartcontext';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ curElem }) => {
const { cart, removeItem, clearCart, totalItem, totalAmount, increment, decrement } = useCartContext()

    const { id,price ,quantity,title,image} = curElem;
  return (
    <>
    <div className='table-row'>
    <div className="table-cell">
{id}
    </div>
    <div className="table-cell">
    <img style={{ height: "20px", width: "20px" }} src={image} alt="phone" />
    </div>
    <div className="table-cell">
{title}
    </div>
    <div className="table-cell">
{price}
    </div>
    <div className="table-cell">
    <AddCircleIcon onClick={() => increment(id)} style={{ height: "20px", width: "20px" }} alt="+" />

{quantity}

<RemoveCircleIcon onClick={() => decrement(id)} style={{ height: "20px", width: "20px" }} alt="-" />
    </div>
    <div className='table-cell'> <p>{price * quantity}</p></div>
    <div className='table-cell'><p onClick={() => removeItem(id)}>

<DeleteIcon style={{ height: "20px", width: "20px" }} alt="delet" /> 
</p></div>
    </div>
   

    </>
 
  )
}

export default CartItem;
{/* <td>{item.id}</td>
<td><img style={{ height: "20px", width: "20px" }} src={item.image} alt="phone" /></td>
<td>{item.title}</td>
<td>{item.price}</td>
<td>

  <AddCircleIcon onClick={() => increment(item.id)} style={{ height: "20px", width: "20px" }} alt="+" />

  {item.quantity}

  <RemoveCircleIcon onClick={() => decrement(item.id)} style={{ height: "20px", width: "20px" }} alt="-" />

</td>
<td>{item.price * item.quantity}</td>
<td onClick={() => removeItem(item.id)}>

  <DeleteIcon style={{ height: "20px", width: "20px" }} alt="delet" /> */}
