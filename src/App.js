import React from 'react';
import './App.css';
import PaymentComponent from './PaymentComponent.js'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PayPal Payment Gateway Integration</h1>
        <p className="payment-info">
You are enlisting the expertise of Dillon Devera for professional web developemt services, This comprehensive package entails 2-3 web page additions and content update and logo update.
The total cost for this premium service is $250, which will be conveniently split into two payments of $125 each. The first payment of $125 will be required to initiate the project. Once the web pages are  completed to your satisfaction, the second payment of $125 will be due.




</p>
<p className="payment-amount">$150 (2 payments of $125)</p>
        <PaymentComponent />
      </header>
      <main>
        
        
      </main>
    </div>
  );
}

export default App;
