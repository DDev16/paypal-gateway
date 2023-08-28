import React from 'react';
import './App.css';
import PaymentComponent from './PaymentComponent.js'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PayPal Payment Gateway Integration</h1>
        <p className="payment-info">
You are enlisting the expertise of Dillon Devera for professional Graphic Design services, and we are excited to offer you a convenient two-payment arrangement. This comprehensive package entails the creation of a custom logo for Angela Morrison, drawing inspiration from commercial airline aesthetics. Dillon will work closely with you to deliver a distinctive and captivating design that aligns with your vision.
Throughout the process, you'll have the opportunity to participate in a personalized, one-on-one design consultation. This collaborative approach ensures that the final design reflects your preferences and resonates with your brand identity.

The total cost for this premium service is $150, which can be conveniently split into two payments of $75 each. The first payment of $75 will be required to initiate the project. Once the design is completed to your satisfaction, the second payment of $75 will be due.

Upon completion of the project and finalizing the payments, you will receive the logo design in a range of formats that guarantee its adaptability across various mediums. These formats include high-resolution vector files (PDF) for pristine scalability, as well as raster image files (JPEG, PNG, TIFF) that are suitable for both digital and print applications.

Additionally, this package encompasses post-design support, enabling you to make future adjustments, implement fixes, or request edits to the logo. This adaptability ensures that the logo remains a steadfast representation of your evolving brand.

Experience the fusion of creativity and professionalism as Dillon Devera brings your brand's essence to life through an emblem that draws inspiration from the sleek designs of commercial airlines.

</p>
<p className="payment-amount">$150 (2 payments of $75)</p>
        <PaymentComponent />
      </header>
      <main>
        
        
      </main>
    </div>
  );
}

export default App;
