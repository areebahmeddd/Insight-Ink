import React from 'react'
import './style.css'

const contact = () => {
    

  return (
    <div className='contact'>
        <div className='contact-container'>
        <div className='left'>
            <h3>Let's get in touch!</h3>
            <p>We're open for any suggestions or just to have a chat</p>
            <div className='card'>
            <div className='card-icon'><i className='fa fa-map-marker'></i></div>
            <div className='card-text'>
                <p><span>Address:</span> Dayananda Sagar College of Engineering</p>
            </div>
            </div>
            <div className='card'>
            <div className='card-icon'><i className='fa fa-phone'></i></div>
            <div className='card-text'>
                <p><span>Phone:</span> +91 63639 88392</p>
            </div>
            </div>
            <div className='card'>
            <div className='card-icon'><i className='fa fa-paper-plane'></i></div>
            <div className='card-text'>
                <p><span>Email: </span>
                <a href="mailto:support@insight-ink.org">
                              support@insight-ink.org
                            </a></p>
            </div>
            </div>
            <div className='card'>
            <div className='card-icon'><i className='fa fa-globe'></i></div>
            <div className='card-text'>
                <p><span>Website: </span>
                <a href="https://example.com/">example.com</a></p>
            </div>
            </div>
        </div>
        <div className='right'>
            <form onSubmit={e=>e.preventDefault()} className="contactForm">
                <div className='row'>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" required/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="example@insight-ink.org" required/>
                </div>
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" className="form-control" placeholder="" required/>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" placeholder="" required rows={5}></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">Send</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default contact