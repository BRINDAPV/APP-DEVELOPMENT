import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaUser, FaPhoneAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    accountNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { cartItems, totalAmount } = state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { 
      state: { 
        cartItems,
        totalAmount,
        cardholderName: formData.cardholderName,
        accountNumber: formData.accountNumber
      }
    });
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm mb-6" style={{ width: '100%', padding: 0, position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
        <Navbar.Brand href="/welcome">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DOLq206yTU18XZB782edF42_2pZJ_1p_2UL72fRpaChBIgUdqMr-ewvx-Tkclrx9QkM&usqp=CAU"
            alt="App Logo"
            className="d-inline-block align-top"
            style={{
              maxWidth: '70%',
              height: '75px',
              transition: 'transform 0.3s ease-in-out'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.4)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/welcome"><FaHome /> Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
            <Nav.Link href="/contact"><FaPhoneAlt /> Contact</Nav.Link>
          </Nav>
          <NavDropdown title={<FaUser />} id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-5">
        <h2>Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Cardholder Name</label>
            <input
              type="text"
              className="form-control"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              className="form-control"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Month</label>
            <input
              type="text"
              className="form-control"
              name="expiryMonth"
              value={formData.expiryMonth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Year</label>
            <input
              type="text"
              className="form-control"
              name="expiryYear"
              value={formData.expiryYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              className="form-control"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Pay Now</button>
        </form>
      </div>
    </>
  );
};

export default Payment;
