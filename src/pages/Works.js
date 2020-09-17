import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import pic4 from '../assets/images/gallery/tables.jpg';
import pic5 from '../assets/images/gallery/art.jpg';

const WorksPage = () => (
  <Layout>
    <section id="wrapper">
      <section id="banner">
        <div className="inner">
          <h2>S447 Portfolio</h2>
          <p>Favorite Works</p>
        </div>
      </section>

      <div className="wrapper style2">
        <div className="inner">
          <section className="row">
            <article className="col-6 col-12-small">
              <figure>
                <Link to="/Art"><img src={pic5} alt="" className="image fig"/></Link>
                <figcaption><h3>Metal Art</h3></figcaption>
              </figure> 
            </article>
            <article className="col-6 col-12-small">
              <figure>
                <Link to="/Tables"><img src={pic4} alt="" className="image fig"/></Link>
                <figcaption><h3>Custom Tables</h3></figcaption>
              </figure> 
            </article>
          </section>  
        </div>
      </div>
    
    </section>
  </Layout>
);

export default WorksPage;
