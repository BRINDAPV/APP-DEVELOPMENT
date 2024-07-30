import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { state } = location;
  const { cartItems, totalAmount, cardholderName, accountNumber } = state || {};

  // Default company name
  const companyName = "Toys Kingdom";

  const downloadJSON = () => {
    const data = {
      cardholderName,
      accountNumber,
      companyName,
      totalAmount,
      cartItems
    };

    const json = JSON.stringify(data, null, 2); // Format JSON with indentation
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'payment-confirmation.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mt-4">
      <h2 style={{ marginBottom: '70px' }}>Payment Confirmation</h2>
      <div className="mb-4">
        <h4>Payment Details</h4>
        <p><strong>Cardholder Name:</strong> {cardholderName}</p>
        <p><strong>Account Number:</strong> {accountNumber}</p>
        <p><strong>Company Name:</strong> {companyName}</p>
        <p><strong>Amount:</strong> ₹{totalAmount}</p>
      </div>

      <div>
        <h4>Items Purchased:</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems && cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{parseFloat(item.price).toFixed(2)}</td>
                <td>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={downloadJSON} className="btn btn-primary mt-4">
        Download Copy
      </button>
    </div>
  );
};

export default Confirmation;
