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
    <h2>Our Company</h2>
    <p>
      Welcome to our company! We are a leading provider of innovative solutions
      in the industry. With a team of dedicated professionals, we strive to
      deliver exceptional products and services to our clients.
    </p>
    <h2>Our Mission</h2>
    <p>
      Our mission is to exceed customer expectations by providing high-quality
      products and exceptional customer service. We are committed to
      continuously improving our offerings and staying at the forefront of
      technology.
    </p>
    <h2>Our Team</h2>
    <p>
      We have a talented and diverse team of professionals who bring their
      expertise to every project. Our team is passionate about what they do and
      works together to achieve our goals.
    </p>
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