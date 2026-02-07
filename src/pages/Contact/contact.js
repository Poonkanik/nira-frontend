import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p>
        For product inquiries, bulk orders, or customer support,
        please contact Nira Soaps.
      </p>

      <div className="contact-info">
        <p><strong>Business:</strong> Nira Soaps</p>
        <p>📍 Tamil Nadu, India</p>
        <p>📞 +91 9003713234</p>
        <p>✉ support@nirasoaps.com</p>
        <p>Mon–Sat: 9:30 AM – 6:30 PM</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;