'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import img1 from '../../public/1.jpg';
import img2 from '../../public/2.jpg';
import img3 from '../../public/3.jpg';
import img4 from '../../public/4.jpg';
import img5 from '../../public/5.jpg';

import "./globals.css";

const Page = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/Thank');
  };

  const showMessage = () => {
    setMessageVisible(true);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="Boys New Trends Pants Design _ Dress And Jeans Pants Collocation _ Top 20 Pants Design For Man.jpg"
        />
        <title>Shoppiu</title>
      </Head>

      <header className="header">
        <div className="logo">Shoppiu</div>
      </header>

      <div className="container">
        <h1 style={{ fontSize: '34px' }}>Shop Now</h1>
        <div className="card">
          <Image src={img1} alt="Product 1" width={569} style={{ width: "100%" }} />
          <h2>Product 1</h2>
          <p className="price">$10.00</p>
          <button className="btn">Add to Cart</button>
        </div>
        <div className="card">
          <Image src={img2} alt="Product 2" width={450} />
          <h2>Product 2</h2>
          <p className="price">$20.00</p>
          <button className="btn">Add to Cart</button>
        </div>
        <div className="card">
          <Image src={img3} alt="Product 3" width={500} />
          <h2>Product 3</h2>
          <p className="price">$30.00</p>
          <button className="btn">Add to Cart</button>
        </div>
      </div>

      <h2>Inquiry</h2>
      <form onSubmit={handleSubmit} method="POST" style={{ margin: '60px' }}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <br />
        <input type="text" name="email" placeholder="Email" />
        <br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: 'chartreuse',
            margin: '20px',
          }}
        >
          Submit
        </button>
      </form>

      <h2>Form 2</h2>
      <form id="form2" className="form" style={{ margin: '60px' }}>
        <input type="text" id="name" placeholder="Enter your name" required />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button
          type="button"
          onClick={showMessage}
          style={{
            padding: '10px 20px',
            backgroundColor: 'rgb(76, 0, 255)',
            margin: '20px',
            color: 'white',
          }}
        >
          Submit
        </button>
      </form>
      {messageVisible && (
        <div id="message" className="message">
          Thank you for submitting!
        </div>
      )}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We offer the best products at affordable prices. Shop with
              confidence!
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Page;
