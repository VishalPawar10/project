import React from 'react';
import './style.css'
const Checkout = () => {

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="checkout-container">
      <form>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span className="text-capitalize">Full Name :</span>
              <input type="text" placeholder="john deo" />
            </div>
            <div className="inputBox">
              <span className="text-capitalize">E-mail :</span>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div className="inputBox">
              <span className="text-capitalize">Address :</span>
              <input type="text" placeholder="room - street - locality" />
            </div>
            <div className="inputBox">
              <span className="text-capitalize">City :</span>
              <input type="text" placeholder="mumbai" />
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>State :</span>
                <input type="text" placeholder="india" />
              </div>
              <div className="inputBox">
                <span className="text-capitalize">Zip code :</span>
                <input type="text" placeholder="123 456" />
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="title">payment</h3>
            <div className="radio">
              <label style={{ padding: '5px', marginLeft: '2px' }}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                  style={{ padding: '5px', marginRight: '10px' }}
                />
                Cash On Delivery
              </label>
            </div>


          </div>
        </div>
        <input type="submit" value="Confirm Order" className="submit-btn" />
      </form>
    </div>
  );
};

export default Checkout;