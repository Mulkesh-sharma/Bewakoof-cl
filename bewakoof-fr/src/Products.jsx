import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Products.css';
import ProductAccordian from './ProductAccordian';
import ProductCard from './ProductCard';
import axios from 'axios';

function Products({ title, path }) {
  const [mensData, setMensData] = useState([]);
  const [womensData, setWomensData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductData(title);
  }, [title]);

  const fetchProductData = async (category) => {
    setLoading(true);
    setError(null);

    try {
      let response;
      if (category === "Men's Clothing") {
        response = await axios.get('https://bewakoof-api-gwad.onrender.com/mensdata');
        setMensData(response.data || []); // Directly setting response.data
      } else if (category === "Women's Clothing") {
        response = await axios.get('https://bewakoof-api-gwad.onrender.com/womensdata');
        setWomensData(response.data || []); // Directly setting response.data
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(`Failed to fetch products: ${err.message}`);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar mensData={mensData} womensData={womensData} />
      <div className="container">
        <div className="row row-path">
          <p>Home / {path}</p>
        </div>
        <div className="row row-title">
          <h4>
            {title}{' '}
            <span>
              {(title === "Men's Clothing" ? mensData.length : womensData.length)}
            </span>
          </h4>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-3 product-cat">
            <p style={{ fontSize: '0.8rem', color: 'gray', fontWeight: '600' }}>FILTERS</p>
            <ProductAccordian genderTitle={title} />
          </div>
          <div className="col-lg-9 products">
            <div className="row">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
              ) : (
                (title === "Men's Clothing" ? mensData : womensData).map((prod) => (
                  <div className="col-lg-4 col-6 mobile-card" key={prod.id}>
                    <ProductCard
                      pid={prod.id}
                      imgUrl={prod.productImgTagSrc}
                      name={prod.clr_shade_4}
                      op={prod.actualPriceText}
                      np={prod.discountedPriceText}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
