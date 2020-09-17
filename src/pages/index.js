import React from 'react';

import Layout from '../components/Layout';

import pic2 from '../assets/images/pic02.jpg';
import pic6 from '../assets/images/art_item.jpg';
import pic8 from '../assets/images/live_edge.png';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner fpWrapper">
        <h2>S447</h2>
        <p>metal works</p>
        <div className="row">
                <div className="col-12 col-12-small">
                    <div className="icon logo">
                        <a href="#four"><i class="fa fa-angle-double-down"></i></a>
                    </div>
                </div>
            </div>
      </div>
    </section>  

    <section id="four" className="wrapper style3">
      <div  className="inner">
        <h2 className="major">Featured Elements</h2>
        <section>
          <article className="row gtr-uniform stories">
            <div className="col-4 col-12-small">
              <img src={pic8} alt="" className="image fit" />
            </div>
            <div className="col-8 col-12-small">
              <h3 className="major">Live Edge Table</h3>
              <p>              
                This is a creation we just finished and sold. It's a live edge wood table 
                with a custom steel base. Perfect as either a coffee or media table. Let us know if you would like us to make you a custom live edge table for your home or office.
              </p>
            </div>
          </article>
          <article className="row gtr-uniform stories">
            <div className="col-4 col-12-small">
              <img src={pic6} alt="" className="image fit" />
            </div>
            <div className="col-8 col-12-small">
              <h3 className="major">Custom Metal Art</h3>
              <p>              
                Custom designed and crafted metal art and statues.  Send us a note if you would like something made custom just for you.
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <div className="inner">
        <img src={pic2} alt="" className="image main"/>
        <div className="content">
          <h2 className="major">Our Story</h2>
          <p>
            We are a custom metal art and fabrication studio specializing hand crafted, 
            high-quality, one of a kind metal creations for your home or business. My metal sculptures are
            abstract. The abstract manipulation of metal form in space creates compositions that convey the balance
            and energy that I put into my work.          
          </p>
          <p>
            Whether you need custom metal art, railings, gates, tables, light fixtures, yard art, or simply 
            a specialized functional piece of metal, we've probably created something similar and can work 
            with you to make your piece special and unique.   
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
