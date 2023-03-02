import React from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="checkoutcontainer">
        <ul>
          <li>Shipping address</li>
          <li>Payment details</li>
          <li>Review your order</li>
          <div className="shippingaddresscontainer">
            <form action="#">
            <p>First Name:</p>
              <input type="text" />
              <p>Last Name:</p>
              <input type="text" />
              <p>Address Line 1:</p>
              <input type="text" />
              <p>Address Line 2:</p>
              <input type="text" />
              <p> City:</p>
              <input type="text" />
              <p>State/Province/Region:</p>
              <input type="text" />
              <p>Zip / Postal Code:</p>
              <input type="number" />
              <option value="">Use this address for payment details</option>
              <button onClick={() => navigate('/payment/esewa')}>Next</button>

              
            </form>
          </div>

        </ul>
      </div>
    </>
  )
}

export default Checkout