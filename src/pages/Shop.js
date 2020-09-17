import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/twins.jpg';
import pic5 from '../assets/images/tomato_cage.jpg';
import pic6 from '../assets/images/planter.jpg';
import pic7 from '../assets/images/planter 2.jpg';

const ShopPage = () => (
  <Layout>
    <section id="wrapper">
      <section id="banner">
        <div className="inner">
          <h2>S447 Shop</h2>
          <p>Custom Metal</p>
        </div>
      </section>

      <div className="wrapper style2">
        <div className="inner">
          <h2 className="major">Metal Elements</h2>
          <p>
            Here are some of our most popular items available for purchase. Visit our shop for these items or send us a note below if you would like a custom version of your own.
          </p>

          <section className="features">
            <article>
              <img src={pic5} alt="" className="image"/>
              <h3 className="major">Metal Tomato Cage</h3>
              <p>
                Custom metal tomato cage. This tomato cage will be reusable for years to come.
              </p>
              <a href="https://www.etsy.com/listing/745558415/metal-tomato-cage?ref=shop_home_active_1" target="_blank" rel="noopener noreferrer" className="special">
                Learn more / Buy
              </a>
            </article>
            <article>
              <img src={pic4} alt="" className="image"/>
              <h3 className="major">Yard Art</h3>
              <p>
                Unique and distinct steel yard yard art. Perfect for your lawn or garden.
              </p>
              <a href="https://www.etsy.com/shop/Studio447?ref=simple-shop-header-name&listing_id=745561823" target="_blank" rel="noopener noreferrer" className="special">
                Learn more / Buy
              </a>
            </article>
            <article>
              <img src={pic7} alt="" className="image"/>
              <h3 className="major">Vertical Planter</h3>
              <p>
                Large metal planter with a sunset inlay. The perfect addition to your front porch or garden.
              </p>
              <a href="https://www.etsy.com/listing/748639838/vertical-planter?ref=shop_home_active_1" target="_blank" rel="noopener noreferrer" className="special">Learn more / Buy</a>              
            </article>
            <article>
              <img src={pic6} alt="" className="image"/>
              <h3 className="major">Metal Planter</h3>
              <p>
                This is our standard sized metal planter for your porch, deck or garden. This beautiful and durable planter will last you for years to come.
              </p>
              <a href="https://www.etsy.com/listing/731693314/metal-planter?ref=shop_home_active_2" target="_blank" rel="noopener noreferrer" className="special">
                Learn more / Buy
              </a>
            </article>
          </section>
          <ul className="actions special">
            <li><a href="https://www.etsy.com/shop/Studio447?ref=simple-shop-header-name&listing_id=745561823" target="_blank" rel="noopener noreferrer" className="button"><b>Our Etsy Shop</b></a></li>
          </ul>      
        </div>
      </div>
    
    </section>
  </Layout>
);

export default ShopPage;
