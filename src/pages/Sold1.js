import React from 'react';

import Layout from '../components/Layout';
import pic from '../assets/images/window_cover.png';

const Sold1 = () => (
  <Layout>
    <section id="wrapper">
      <section id="banner">
        <div className="inner">
          <h2>The Shop</h2>
          <p>Custom Metal Elements</p>
        </div>
      </section>

      <div className="wrapper">
        <div className="inner">
          <h2 className="major lead">Missing Elements</h2>
          <section>         
            <article className="row">             
              <div className="col-6 col-12-small">   
                <p>Unfortunately, this item has been sold. If you would like one, please send us a note below.</p>
                <p>If you would like a custom version of it, let us know and we'll be in touch to discuss your custom creation.</p>
              </div>
              <div className="col-6 col-12-small"><img src={pic} alt="" className="image fit" /></div>
            </article>
          </section>     
        </div>
      </div>    
    </section>
  </Layout>
);

export default Sold1;
