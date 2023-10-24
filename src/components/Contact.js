import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-info">
        <p>Address: Adelaide</p>
        <p>Email: vuhau.hsph@gmail.com</p>
      </div>
      <div>
        <form action="">
          <div className="contact-form">
            <div className="form-input">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-input">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-input">
              <input type="text" placeholder="Message" required />
            </div>
          </div>

          <input type="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
}
