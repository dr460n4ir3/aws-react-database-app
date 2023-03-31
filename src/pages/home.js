import React from 'react';

function Home() {
  return (
    <div className="landing-page">
      <div className="hero">
        <h1>Welcome to My Website</h1>
        <p>We specialize in creating awesome websites</p>
        <button>Get Started</button>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Beautiful Design</h2>
          <p>Our websites are beautifully designed and easy to use</p>
        </div>
        <div className="feature">
          <h2>Fast and Secure</h2>
          <p>We use the latest technologies to ensure fast and secure websites</p>
        </div>
        <div className="feature">
          <h2>Responsive</h2>
          <p>Our websites are fully responsive and look great on any device</p>
        </div>
      </div>
      <div className="testimonials">
        <h2>What our clients are saying</h2>
        <div className="testimonial">
          <p>"The team at My Website did an amazing job on our website. We couldn't be happier!"</p>
          <p>- John Smith</p>
        </div>
        <div className="testimonial">
          <p>"I highly recommend My Website. They are professional, talented, and a pleasure to work with."</p>
          <p>- Jane Doe</p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; My Website 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
