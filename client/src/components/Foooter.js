import React from 'react'
import './foooter.css'

function Foooter() {
  return (
    
<section className="py-0">
        {/* row images */}
    <section className="w-100 " style={{ background: '#f5f7f8',paddingTop:'20px' }}>
    <div className="container-fluid p-5 ">
        <div className="row g-5 " >

        {/* Image 1 */}
        <div className="col-6 col-md-2 ">
            <div className='img-overlay overflow-hidden'>
            <img
            src="https://rally.axiomthemes.com/wp-content/uploads/2025/01/insta1-copyright-370x370.jpg"
            alt=""
            className="img-fluid w-100 rounded-4"
            />
        </div>
        </div>

        {/* Image 2 */}
        <div className="col-6 col-md-2">
            <div className='img-overlay overflow-hidden'>
            <img
            src="https://rally.axiomthemes.com/wp-content/uploads/2025/01/insta2-copyright-370x370.jpg"
            alt=""
            className="img-fluid w-100 rounded-4"
            />
        </div>
        </div>

        {/* Image 3 */}
        <div className="col-6 col-md-2">
            <div className='img-overlay overflow-hidden'>
            <img
            src="https://rally.axiomthemes.com/wp-content/uploads/2025/01/insta3-copyright-370x370.jpg"
            alt=""
            className="img-fluid w-100 rounded-4"
            />
        </div>
        </div>

        {/* Image 4 */}
        <div className="col-6 col-md-2">
            <div className='img-overlay overflow-hidden'>
            <img
            src="https://rally.axiomthemes.com/wp-content/uploads/2025/01/insta4-copyright-370x370.jpg"
            alt=""
            className="img-fluid w-100 rounded-4"
            />
        </div>
        </div>

        {/* Image 5 */}
        <div className="col-6 col-md-2">
            <div className='img-overlay overflow-hidden'>
            <img
            src="https://rally.axiomthemes.com/wp-content/uploads/2025/01/insta5-copyright-370x370.jpg"
            alt=""
            className="img-fluid w-100 rounded-4"
        />
        </div>
        </div>

        {/* Image 6 */}
        <div className="col-6 col-md-2  ">
            <div className='img-overlay overflow-hidden'>
            <img
            src="https://rally.axiomthemes.com/wp-content/uploads/2025/01/insta6-copyright-370x370.jpg"
            alt=""
            className="img-fluid w-100 rounded-4 "
            />
        </div>
        </div>

        </div>
    </div>
    </section>
        {/* footer */}
    <div className="container foooter">
        <h1 className='foooter-t'>We offer premium <br/>automotive services</h1>
        <div className="row gy-4">

        {/* Address */}
        <div className="col-12 col-md-3">
            <h6 className="fw-bold foooter-h">Address</h6>
            <p className="mb-0">
            Tunisia —<br/>
            785 15h Street, Office 478,<br/>
            Tunis, Dep 81566
            </p>
        </div>

        {/* Say Hello */}
        <div className="col-12 col-md-3">
            <h6 className="fw-bold foooter-h">Say Hello</h6>
            <p className="mb-3 foooter-hover">
            <a  href="mailto:info@email.com">info@email.com</a>
            </p>
            <p className="mb-3">
            <a className='foooter-hover' href="tel:+1234567890">+1 234 567 890</a>
            </p>
        </div>

        {/* Socials */}
        <div className="col-12 col-md-3">
            <h6 className="fw-bold foooter-h">Socials</h6>
            <ul className="list-unstyled mb-0">
            <li><a className='foooter-hover' href="https://www.facebook.com/" target="_blank">Facebook</a></li>
            <li><a className='foooter-hover' href="https://twitter.com/" target="_blank">Twitter (X)</a></li>
            <li><a className='foooter-hover' href="https://youtube.com/" target="_blank">Youtube</a></li>
            <li><a className='foooter-hover' href="https://www.instagram.com/" target="_blank">Instagram</a></li>
            </ul>
        </div>

        {/* Newsletter */}
        <div className="col-12 col-md-3">
            <h6 className="fw-bold">Newsletter</h6>
            <form>
            <div className="mb-3">
                <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email Address"
                required
                />
            </div>

            <div className="form-check mb-3">
                <input
                className="form-check-input"
                type="checkbox"
                id="privacy"
                required
                />
                <label className="form-check-label" htmlFor="privacy">
                I agree to the <a href="/privacy-policy/" target="_blank">Privacy Policy</a>
                </label>
            </div>

            <button type="submit" className="btn btn-primary">
                Subscribe
            </button>
            </form>
        </div>

        </div>
    </div>

    {/* todo: improve newsletter section */}
</section>


  )
}

export default Foooter;

