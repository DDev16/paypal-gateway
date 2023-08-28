import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './App.css';

const PaymentComponent = () => {
  const clientId = 'AYp_Tlz1y_8LHEqsunsOKfIMEBbxsLt3uao1CqNwJMVzt6e2mHwTKH6_n_sZcypXvEaUHGYsJkHItsCG';

  return (
    <PayPalScriptProvider options={{ 'client-id': clientId }}>
      <div className="payment-container">
        <h2 className="payment-header">Make a Payment</h2>
        <PayPalButtons
          className="paypal-button"
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '75.00', // Adjust the payment amount if needed
                }
              }]
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PaymentComponent;
