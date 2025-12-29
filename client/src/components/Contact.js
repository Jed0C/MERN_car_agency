import React from 'react'
import './contact.css'


function Contact() {
  return (
    <div style={{
  backgroundImage: 'linear-gradient(135deg, #667eea, #764ba2)'
}}>
    <div className='container-fluid contact-t'>
        <h1 >Contacts</h1>
    </div>

    <div className="container-fluid contact-g">
  <div className="row">
    
    {/* Left side */}
    <div className="col-md-6 ">
      <div className="mb-4 ">
        <h1>
          Have questions? <br/>Get in touch!
        </h1>
        <p className='contact-p'>
          Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo enim ipsam voluptatem quia voluptas.
        </p>
      </div>
      <ul className="list-unstyled contact-p my-5">
        <li className="d-flex align-items-start mb-3">
          <span className="me-3"><i class="fa-solid fa-location-dot" style={{color:'#d42121'}}></i></span>
          <span>785 15h Street, Office 478 Berlin</span>
        </li>
        <li className="d-flex align-items-start mb-3">
          <span className="me-3"><i className="fa-solid fa-mobile-screen" style={{color:'#d42121'}}></i></span>
          <a href="tel:18408412569" className="text-decoration-none">
            +1 840 841 25 69
          </a>
        </li>
        <li className="d-flex align-items-start">
          <span className="me-3"><i class="fa-solid fa-envelope" style={{color:'#d42121'}}></i></span>
          <a href="mailto:info@email.com" className="text-decoration-none">
            info@email.com
          </a>
        </li>
      </ul>
    </div>

    {/* Right side */}
    <div className="col-md-6">
      <form
        action="/contacts/#contact-form"
        method="post"
        aria-label="Contact form"
        noValidate
      >
        <div className="row g-3 contact-gleft">
          <div className="col-md-6 no-border">
            <input className="form-control" type="text" name="your-name" placeholder="Name" required />
          </div>

          <div className="col-md-6 no-border">
            <input className="form-control" type="email" name="your-email" placeholder=" Email Address" required />
          </div>

          <div className="col-md-6 no-border">
            <input className="form-control" type="tel" name="phone" placeholder="Phone" required />
          </div>

          <div className="col-md-6 no-border">
            <input className="form-control" type="text" name="subject" placeholder="Subject" required />
          </div>

          <div className="col-12 no-border">
            <textarea
              className="form-control"
              name="your-message"
              rows="6"
              placeholder="How can we help you? Feel free to get in touch!"
              required
            ></textarea>
          </div>
        </div>

        <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" name="acceptance" required />
          <label className="form-check-label">
            I agree with the site’s <a href="/privacy-policy/">privacy policy</a>.
          </label>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Get in Touch
        </button>
      </form>
    </div>

  </div>
</div>
  <div style={{ width: "100%", height: "600px" }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Berlin&output=embed"
      />
    </div>
   
  </div>
  )
}

export default Contact;