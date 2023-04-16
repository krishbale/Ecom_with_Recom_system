import React from 'react'
import "../styles/Detail.css"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useCartContext } from '../context/Cartcontext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Fetchsingledata } from '../hooks/Fetchdata';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Fetchallproducts } from '../hooks/FetchAll';
import LoadingAnimations from '../components/LoadingAnimations';
import Card from '../components/Card';
const  Detail = () => {
     const displayconsole= (data)=>{
    window.alert(` 1 item ${data } is added to the cart`)

   }

  let { id } = useParams()
  const {addtoCart} = useCartContext(); 
  let navigate = useNavigate();

  const {allproducts } = Fetchallproducts(`/getrecom/${id}`,id);



    let array = allproducts;
  const {data,loading} = Fetchsingledata(id);


    if(loading){
    return(
      <LoadingAnimations/>
    )}else
if(!loading){
  return(
    <>
      <div className='detail'>
        <div className="image-container">
          <div className='image'>
          <img src={data.image} alt=""/>
          </div>
        
        </div>
        <div className="description">
          <div className='title'><h1>{data.title}</h1></div>
          <div className='des'>
          <p>{data.description}</p>
          </div>
          
          <span>
          <h3>Price:${data.price}</h3>
          {/* {console.log(data.id)} */}
           <NavLink 
           onClick={()=> addtoCart(data)} 
           to={'/cart'}>
          <button     className='cartbutton'> <ShoppingCartCheckoutIcon /></button>
          </NavLink> 
         
         
          <button  onClick={()=> [addtoCart(data),displayconsole(data.title)]}  className='cartbutton'><AddShoppingCartIcon/></button>
          <div><button className="back" onClick={() => navigate(-1)}> <ArrowBackIcon /></button></div>
          </span>
         
        </div>
      </div>  
      
      <div className="product_section  center">Recommended products for you</div>
    
      <div className='productitem' >
      
      {
        array.map((product) => {
          
          return (
           <Card key={product.id} product={product} />
          )
        })
      }
</div>
    </>
  );
}




}

export default Detail

