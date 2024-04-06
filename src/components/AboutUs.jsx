// AboutUs.js

import React, { useState } from "react";
import "../About.css";

const AboutUs = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleButtonClick = (contactType) => {
    setSelectedContact(contactType);
  };

  const renderContactInfo = () => {
    switch (selectedContact) {
      case "Contact":
        return <p className="contact-info">Contact information: 254-7000-000-000</p>;
      case "Email":
        return <p className="contact-info">Email: gigahooy@gmail.com</p>;
      default:
        return null;
    }
  };

  return (
    <div className="about-us-container">
      <h2>Welcome to Gig Ahooy!!!</h2>
      <p>
        In an age where time is of the essence and convenience is not just a
        luxury but a necessity, Gig Ahooy!!! was born out of a desire to
        transform how we view and manage deliveries. Our journey began with a
        simple question: In a world that's constantly moving, why should our
        delivery services lag behind?
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to redefine the delivery experience, making it seamless,
        efficient, and remarkably intuitive for everyone involved. Whether
        you're a small business looking to expand your reach, a busy
        professional who values your time, or someone sending a care package to
        a loved one, Gig Ahooy!!! is your trusted partner in bridging the gap
        between convenience and necessity.
      </p>

      <h3>Our Vision</h3>
      <p>
        We envision a world where delivery services are so seamlessly integrated
        into our daily lives that they become virtually invisible. A world where
        our platform empowers users to send and receive packages, manage
        schedules, and communicate needs in real-time, without ever having to
        compromise on efficiency or reliability.
      </p>

      <h3>Why Gig Ahooy!!!?</h3>
      <ul>
        <li>
          <strong>User-Centric Design:</strong> We've painstakingly crafted our
          interface to ensure that every interaction is intuitive, pleasant,
          and productive.
        </li>
        <li>
          <strong>Transparency:</strong> From real-time tracking to clear
          pricing, we believe in keeping our users informed every step of the
          way.
        </li>
        <li>
          <strong>Flexibility:</strong> Life is unpredictable, and our services
          are built to accommodate that. Customizable pick-up and drop-off
          times, a variety of delivery options, and a responsive customer
          service team are just the beginning.
        </li>
        <li>
          <strong>Technology-Driven:</strong> Leveraging the latest in web and
          mobile technology, Gig Ahooy!!! is at the forefront of innovation,
          ensuring fast, secure, and dependable service every time.
        </li>
      </ul>

      <h3>Our Team</h3>
      <p>
        Behind Gig Ahooy!!! is a diverse team of dreamers, thinkers, and doers,
        united by a shared passion for innovation and a relentless pursuit of
        excellence. We are technologists, logistics experts, and customer
        service enthusiasts, all working together to bring you a service that
        we're proud of.
      </p>

      <h3>Join Us on Our Journey</h3>
      <p>
        Gig Ahooy!!! is more than just a delivery platform; it's a community of
        individuals and businesses pushing the boundaries of what's possible.
        We're constantly evolving, learning, and expanding our horizons, and we
        invite you to be a part of this exciting journey. Whether you're
        looking to simplify your delivery needs or seeking a partner to grow
        your business, Gig Ahooy!!! is here to set a new standard in delivery
        service.
      </p>
      
      <p>
        Welcome aboard Gig Ahooy!!!—where deliveries and possibilities are
        endless.
      </p>
      <div className="closeNav" id="closeNav">
        <button onClick={() => handleButtonClick("Contact")}>Contact</button>
        <button onClick={() => handleButtonClick("Email")}>Email</button>
      </div>
      {renderContactInfo()}
    </div>
  );
};

export default AboutUs;
