import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/gallery/art 1.jpg';
import pic2 from '../assets/images/gallery/art 2.jpg';
import pic3 from '../assets/images/gallery/art 3.jpg';

const Art = () => (
  <Layout>
    <section id="wrapper">
      <section id="banner">
        <div className="inner">
          <h2>Our Portfolio</h2>
          <p>Metal Art</p>
        </div>
      </section>

      <div className="wrapper style2">
        <div className="inner">
          <h2 className="major">Custom Metal Art</h2>          
          <section className="row">
            <article className="col-8-large off-2-large col-8-medium off-2-medium col-12-small-off-0">
              <figure>
                <img src={pic1} alt="" className="image fig"/>
                <figcaption><h4>Custom Yard Art</h4></figcaption>
              </figure> 
            </article>
            <article className="col-8-large off-2-large col-8-medium off-2-medium col-12-small-off-0">
              <figure>
                <img src={pic2} alt="" className="image fig"/>
                <figcaption><h4>Window Art</h4></figcaption>
              </figure> 
            </article>
            <article className="col-8-large off-2-large col-8-medium off-2-medium col-12-small-off-0">
              <figure>
                <img src={pic3} alt="" className="image fig"/>
                <figcaption><h4>Metal Statue</h4></figcaption>
              </figure> 
            </article>
          </section>  
        </div>
      </div>    
    </section>
  </Layout>
);

export default Art;
