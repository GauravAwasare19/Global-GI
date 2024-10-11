import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'f42931f0-74c1-4aae-810a-a429dc9eb3e1');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Message Sent',
        text: 'Our team will get back to you soon!',
        icon: 'success',
      });
      event.target.reset();
    } else {
      console.log('Error:', data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15120.907437929973!2d73.7618611!3d18.6538132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b92d559f9135%3A0x4d2b5c0cc5a1030d!2sGlobal%20Gateway%20International%20Courier!5e0!3m2!1sen!2sin!4v1727505790881!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="contact-details">
          <p className="office-title">Nigdi Pradhikaran Office</p>
          <p>
            <strong>Address: </strong>Global Gateway International, Sr no - 17/2,
            Plot-6, Sector-26, Shree Nivas Housing Society,
            <br />
            Near Ganesh Talav, Nigdi Pradhikaran, Pune-411044, India
          </p>
          <p>
            <strong>Contact: </strong>+(91) 9767870732
          </p>
          <p>
            Email: <a href="mailto:globalgipcmc@gmail.com">globalgipcmc@gmail.com</a>
          </p>
        </div>
      </div>

      <section className="form-section">
        <form onSubmit={onSubmit} className="contact-form">
          <h3>Message Us</h3>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter your name" name="name" required />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="email" className="field" placeholder="Enter your email" name="email" required />
          </div>
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" className="field" placeholder="Enter your contact number" name="mobilenumber" required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" className="field mess" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
