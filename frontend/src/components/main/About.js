import React from 'react'

const About = () => {
  return (
    <div>
      <>
  <title>About Us</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n    }\n\n    header {\n      background-color: #f2f2f2;\n      padding: 20px;\n    }\n\n    h1 {\n      color: #333;\n      margin: 0;\n    }\n\n    nav {\n      background-color: #333;\n    }\n\n    nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0;\n    }\n\n    nav ul li {\n      display: inline;\n    }\n\n    nav ul li a {\n      color: #fff;\n      display: inline-block;\n      padding: 10px 20px;\n      text-decoration: none;\n    }\n\n    nav ul li a.active {\n      background-color: #555;\n    }\n\n    section {\n      padding: 20px;\n    }\n\n    h2 {\n      color: #333;\n    }\n\n    footer {\n      background-color: #f2f2f2;\n      padding: 20px;\n      text-align: center;\n      font-size: 12px;\n    }\n  "
    }}
  />
  <header>
    <h1>About Us</h1>
  </header>

  <section>
    <h4>Welcome to our AI Webpage Builder project! We simplify website creation using cutting-edge technology. Our mission is to empower individuals and businesses with an effortless online presence. With our AI-powered builder, create stunning websites in minutes, no coding required. Our advanced algorithms ensure visually appealing and optimized websites. We value feedback and continuously improve our platform to meet industry standards. Join us on this journey to revolutionize website creation. Start building your dream website today and unleash your creativity. Explore our website, try our AI Webpage Builder, and reach out for support.</h4>
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
  )
}

export default About