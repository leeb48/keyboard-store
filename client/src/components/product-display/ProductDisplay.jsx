import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../search/SearchBar';

const ProductDisplay = ({ title, titleColor }) => {
  return (
    <section className="section">
      <SearchBar title={title} titleColor={titleColor} />
      <div className="shop">
        <div className="card shop-card">
          <div className="card-image">
            <figure className="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div className="content">
              <p className="is-size-5 price">$99</p>
              <button className="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="card shop-card">
          <div className="card-image">
            <figure className="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div className="content">
              <p className="is-size-5">$99</p>
            </div>
            <button className="button is-info is-rounded">Add To Cart</button>
          </div>
        </div>
        <div className="card shop-card">
          <div className="card-image">
            <figure className="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div className="content">
              <p className="is-size-5">$99</p>
              <button className="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card shop-card">
          <div className="card-image">
            <figure className="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div className="content">
              <p className="is-size-5">$99</p>
              <button className="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card shop-card">
          <div className="card-image">
            <figure className="image">
              <img src="img/kb1.jpg" alt="keyboard" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-6">
                  Obinslab Anne Pro 2 White RGB LED 60% Double Shot PBT
                  Mechanical Keyboard
                </p>
              </div>
            </div>
            <div className="content">
              <p className="is-size-5">$99</p>
              <button className="button is-info is-rounded">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDisplay.propTypes = {};

export default ProductDisplay;
