import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:3000/carts')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        calculateTotal(data);
      });
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
    setTotalAmount(total.toFixed(2));
  };

  const updateQuantity = (id, delta) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, quantity: item.quantity + delta };
        return updatedItem.quantity > 0 ? updatedItem : item;
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCartItems(updatedCartItems);
    calculateTotal(updatedCartItems);
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:3000/carts/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        calculateTotal(updatedCartItems);
      } else {
        console.error('Failed to delete item');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  const handleProceedToPay = () => {
    navigate('/payment', { state: { cartItems, totalAmount } }); // Pass state to payment page
  };
  
  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button className="btn btn-secondary btn-sm" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </td>
              <td>₹{parseFloat(item.price).toFixed(2)}</td>
              <td>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Amount: ₹{totalAmount}</h3>
      <button className="btn btn-primary mt-3" onClick={handleProceedToPay}>Proceed to Pay</button>
    </div>
  );
};

export default Cart;
