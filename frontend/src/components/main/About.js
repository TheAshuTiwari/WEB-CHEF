import React from 'react';

const About = () => {
  return (
    <div style={{minHeight: '100vh', backgroundImage: `url('https://usabilitygeek.com/wp-content/uploads/2019/07/2-1024x576.png')`, backgroundSize: 'cover'}}>
      <>
        <header>
          <h1>About Us</h1>
        </header>

        <section>
          <h4>
            Welcome to our AI Webpage Builder project! We simplify website creation using cutting-edge technology. Our mission is to empower individuals and businesses with an
            effortless online presence. With our AI-powered builder, create stunning websites in minutes, no coding required. Our advanced algorithms ensure visually appealing and
            optimized websites. We value feedback and continuously improve our platform to meet industry standards. Join us on this journey to revolutionize website creation. Start
            building your dream website today and unleash your creativity. Explore our website, try our AI Webpage Builder, and reach out for support.
          </h4>
          <br></br>
          <h2>Why Choose Us</h2>
          <ul>
            <li>Experienced professionals</li>
            <li>Quality products</li>
            <li>Exceptional customer service</li>
            <li>Innovative solutions</li>
            <li>Customer satisfaction</li>
          </ul>
        </section>
        <footer>
          <p>© 2023 Your Company. All rights reserved.</p>
        </footer>
      </>
    </div>
  );
};

export default About;
