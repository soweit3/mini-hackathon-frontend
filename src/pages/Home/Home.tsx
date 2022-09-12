import './Home.css';
import React from 'react';

const Home: React.FC = () => {
    return (
<>
  <section className="container">
    <h1 className="name">Unnamed Privacy Co. Ltd </h1>
    <h2 className="span">We care about privacy so you don't have to </h2>
  </section>

  <div className="background">
  <div className="container">
    <div className="panel pricing-table">
      
      <div className="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Personal</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Basic Plan</li>
          <li className="pricing-features-item">Limited Features</li>
        </ul>
        <span className="pricing-price">Free</span>
        <a href="/sign-up" className="pricing-button">Sign up</a>
      </div>
      
      <div className="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Small team</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Full Support</li>
          <li className="pricing-features-item">Dedicated Privacy</li>
        </ul>
        <span className="pricing-price">$150/m</span>
        <a href="/contact-us" className="pricing-button is-featured">Contact Us</a>
      </div>
      
      <div className="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Enterprise</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Full Support + Extras</li>
          <li className="pricing-features-item">Ultimate Privacy Plan</li>
        </ul>
        <span className="pricing-price">$400/m</span>
        <a href="/contact-us" className="pricing-button">Contact Us</a>
      </div>
      
    </div>
  </div>
</div>

</>
    );

};

export default Home;