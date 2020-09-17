import React from 'react';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in Touch</h2>
        <div className="row gtr-uniform">
          <div className="col-6 col-12-small">
            <p>
              We love doing custom metal work! Please send us a note if you would like to discuss working 
              on your project or special creation.
            </p>
            {/*<p className="social"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bigBadge facebook"><i className="fa fa-facebook"></i></a></p>*/}          
          </div>
          <div className="col-6 col-12-small">          
            <form method="post" action="https://formspree.io/studiofourfour7@gmail.com">
              <div className="fields">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="_replyto" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
          </div>
        </div>          
        <ul className="copyright">
          <li>&copy; <span className="mylogo">2019 infused Ideas</span> &nbsp; | &nbsp; All rights reserved</li>
        </ul>      
      </div>
    </section>
  );
}
